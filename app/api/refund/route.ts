import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      reservationNumber,
      reason,
      amount,
      cardLast4,
    } = body;

    if (!fullName || !email || !phone || !reservationNumber || !amount) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.REFUND_NOTIFICATION_EMAIL;
    const senderEmail = process.env.EMAIL_FROM;

    if (!resendApiKey || !notificationEmail || !senderEmail) {
      console.error('Configuration e-mail incomplète.');
      return NextResponse.json(
        { error: 'Le service e-mail n’est pas configuré.' },
        { status: 503 }
      );
    }

    const emailContent = `
Nouvelle demande de remboursement
================================

Informations du client:
- Nom complet: ${fullName}
- E-mail: ${email}
- Téléphone: ${phone}
- Numéro de réservation: ${reservationNumber}
- Motif: ${reason || 'Non précisé'}

Détails du remboursement:
- Montant: ${Number.parseFloat(amount).toFixed(2)} EUR
- Méthode: Carte bancaire
- Carte: **** ${cardLast4 || 'Non renseignée'}

Date de la demande: ${new Date().toLocaleString('fr-FR')}
`;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: senderEmail,
        to: [notificationEmail],
        reply_to: email,
        subject: `Nouvelle demande de remboursement - ${reservationNumber}`,
        text: emailContent,
      }),
    });

    if (!response.ok) {
      console.error('Le fournisseur e-mail a refusé la demande.', {
        status: response.status,
      });
      return NextResponse.json(
        { error: 'Impossible d’envoyer les informations par e-mail.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Erreur lors de l’envoi de la demande de remboursement.', err);
    return NextResponse.json(
      { error: 'Erreur lors du traitement de la demande.' },
      { status: 500 }
    );
  }
}
