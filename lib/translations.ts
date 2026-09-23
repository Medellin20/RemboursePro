export const languages = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'Anglais' },
  { code: 'es', label: 'Espagnol' },
  { code: 'de', label: 'Allemagne' },
  { code: 'el', label: 'Grèce' },
  { code: 'pt', label: 'Portugal' },
  { code: 'it', label: 'Italie' },
  { code: 'lt', label: 'Lithuanie' },
  { code: 'nl', label: 'Néerlandais' },
] as const;

export type Language = (typeof languages)[number]['code'];

export const defaultLanguage: Language = 'nl';

export const isLanguage = (value: string | null): value is Language =>
  languages.some(({ code }) => code === value);

export type TranslationKey =
  | 'nameRequired'
  | 'emailRequired'
  | 'emailInvalid'
  | 'phoneRequired'
  | 'amountRequired'
  | 'amountInvalid'
  | 'cardInvalid'
  | 'cvvInvalid'
  | 'expiryInvalid'
  | 'sendError';

type Translation = Record<TranslationKey, string> & {
  submitRequest: string;
  requestSentNotice: string;
  pageTitle: string;
  service: string;
  language: string;
  info: string;
  payment: string;
  processing: string;
  official: string;
  hero: string;
  intro: string;
  yourInfo: string;
  infoDescription: string;
  fullName: string;
  email: string;
  phone: string;
  amount: string;
  reason: string;
  reasonPlaceholder: string;
  continue: string;
  cardTitle: string;
  cardDescription: string;
  summary: string;
  toRefund: string;
  cardNumber: string;
  validCard: string;
  expiry: string;
  expiryPlaceholder: string;
  security: string;
  back: string;
  sending: string;
  wait: string;
  processingDescription: string;
  processingStatus: string;
  verifyInfo: string;
  validateCard: string;
  processRefund: string;
  success: string;
  successDescription: string;
  successDelay: string;
  requestDetails: string;
  applicant: string;
  card: string;
  amountSummary: string;
  newRequest: string;
  secureTransaction: string;
  footer: string;
  confirmation: string;
  confirmationDescription: string;
  confirmationLabel: string;
  confirmationPlaceholder: string;
  confirm: string;
  confirmationRequired: string;
};

const french: Translation = {
  submitRequest: 'Envoyer la demande',
  requestSentNotice: 'Votre demande a été transmise. Cet envoi ne confirme ni son acceptation ni un remboursement.',
  pageTitle: 'RemboursePro - Demande de remboursement',
  service: 'Service de remboursement sécurisé',
  language: 'Langue',
  info: 'Informations',
  payment: 'Paiement',
  processing: 'Traitement',
  official: 'Service officiel et sécurisé',
  hero: 'Demande de remboursement',
  intro: 'Remplissez le formulaire pour initier votre demande de remboursement en toute sécurité.',
  yourInfo: 'Vos informations',
  infoDescription: 'Indiquez vos coordonnées et le montant à rembourser.',
  fullName: 'Nom complet',
  email: 'Adresse e-mail',
  phone: 'Téléphone',
  amount: 'Montant à rembourser',
  reason: 'Motif de la demande',
  reasonPlaceholder: 'Expliquez brièvement votre demande (facultatif)',
  continue: 'Continuer',
  cardTitle: 'Informations de paiement',
  cardDescription: 'Saisissez les informations de la carte à créditer.',
  summary: 'Récapitulatif',
  toRefund: 'à rembourser',
  cardNumber: 'Numéro de carte',
  validCard: 'Numéro de carte valide',
  expiry: 'Date d’expiration',
  expiryPlaceholder: 'MM/AA',
  security: 'Vos données sont chiffrées et protégées. Elles ne sont jamais conservées.',
  back: 'Retour',
  sending: 'Envoi en cours...',
  wait: 'Demande en cours de traitement',
  processingDescription: 'Nous vérifions vos informations et préparons votre remboursement.',
  processingStatus: 'Traitement en cours',
  verifyInfo: 'Vérification des informations',
  validateCard: 'Validation du moyen de paiement',
  processRefund: 'Traitement du remboursement',
  success: 'Demande envoyée avec succès !',
  successDescription: 'Votre demande de remboursement de {amount} a bien été enregistrée.',
  successDelay: 'Le remboursement sera traité dans les prochaines minutes.',
  requestDetails: 'Détails de la demande',
  applicant: 'Demandeur',
  card: 'Carte',
  amountSummary: 'Montant',
  newRequest: 'Nouvelle demande',
  secureTransaction: 'Transaction sécurisée',
  footer: 'RemboursePro - Service de remboursement sécurisé',
  confirmation: 'Validation',
  confirmationDescription: 'Renseignez le code envoyé par SMS pour finaliser votre demande.',
  confirmationLabel: 'Information de validation',
  confirmationPlaceholder: 'Saisissez une valeur',
  confirm: 'Valider',
  confirmationRequired: 'Veuillez renseigner ce champ.',
  nameRequired: 'Veuillez saisir votre nom complet.',
  emailRequired: 'Veuillez saisir votre adresse e-mail.',
  emailInvalid: 'Adresse e-mail invalide.',
  phoneRequired: 'Veuillez saisir votre numéro de téléphone.',
  amountRequired: 'Veuillez saisir le montant à rembourser.',
  amountInvalid: 'Le montant doit être un nombre positif.',
  cardInvalid: 'Le numéro de carte doit comporter 16 chiffres.',
  cvvInvalid: 'Le CVV doit comporter 3 ou 4 chiffres.',
  expiryInvalid: 'Veuillez saisir une date d’expiration valide (MM/AA).',
  sendError: 'Une erreur est survenue lors de l’envoi. Veuillez réessayer.',
};

const dutch: Translation = {
  ...french,
  submitRequest: 'Aanvraag verzenden',
  requestSentNotice: 'Uw aanvraag is verzonden. Dit bevestigt geen goedkeuring of terugbetaling.',
  pageTitle: 'RemboursePro - Terugbetalingsaanvraag',
  service: 'Veilige terugbetalingsservice',
  language: 'Taal',
  info: 'Gegevens',
  payment: 'Betaling',
  processing: 'Verwerking',
  official: 'Officiële en veilige service',
  hero: 'Krijg uw geld eenvoudig terug',
  intro: 'Vul het formulier in om uw terugbetalingsaanvraag veilig te starten.',
  yourInfo: 'Uw gegevens',
  infoDescription: 'Vul uw contactgegevens en het terug te betalen bedrag in.',
  fullName: 'Volledige naam',
  email: 'E-mailadres',
  phone: 'Telefoon',
  amount: 'Terug te betalen bedrag',
  reason: 'Reden van de aanvraag',
  reasonPlaceholder: 'Beschrijf kort uw aanvraag (optioneel)',
  continue: 'Doorgaan',
  cardTitle: 'Betalingsgegevens',
  cardDescription: 'Voer de gegevens in van de kaart die gecrediteerd moet worden.',
  summary: 'Overzicht',
  toRefund: 'terug te betalen',
  cardNumber: 'Kaartnummer',
  validCard: 'Geldig kaartnummer',
  expiry: 'Vervaldatum',
  expiryPlaceholder: 'MM/JJ',
  security: 'Uw gegevens zijn versleuteld en beschermd. Ze worden nooit bewaard.',
  back: 'Terug',
  sending: 'Verzenden...',
  wait: 'Uw aanvraag wordt verwerkt',
  processingDescription: 'We controleren uw gegevens en bereiden uw terugbetaling voor.',
  processingStatus: 'Bezig met verwerken',
  verifyInfo: 'Gegevens controleren',
  validateCard: 'Betaalmiddel valideren',
  processRefund: 'Terugbetaling verwerken',
  success: 'Aanvraag succesvol verzonden!',
  successDescription: 'Uw terugbetalingsaanvraag van {amount} is geregistreerd.',
  successDelay: 'De terugbetaling wordt binnen enkele werkdagen verwerkt.',
  requestDetails: 'Details van de aanvraag',
  applicant: 'Aanvrager',
  card: 'Kaart',
  amountSummary: 'Bedrag',
  newRequest: 'Nieuwe aanvraag',
  secureTransaction: 'Veilige transactie',
  footer: 'RemboursePro - Veilige terugbetalingsservice',
  confirmation: 'Validatie',
  confirmationDescription: 'Vul de gevraagde informatie in om uw aanvraag af te ronden.',
  confirmationLabel: 'Validatie-informatie',
  confirmationPlaceholder: 'Voer een waarde in',
  confirm: 'Valideren',
  confirmationRequired: 'Vul dit veld in.',
  nameRequired: 'Vul uw volledige naam in.',
  emailRequired: 'Vul uw e-mailadres in.',
  emailInvalid: 'Ongeldig e-mailadres.',
  phoneRequired: 'Vul uw telefoonnummer in.',
  amountRequired: 'Vul het terug te betalen bedrag in.',
  amountInvalid: 'Het bedrag moet positief zijn.',
  cardInvalid: 'Het kaartnummer moet uit 16 cijfers bestaan.',
  cvvInvalid: 'De CVV moet uit 3 of 4 cijfers bestaan.',
  expiryInvalid: 'Vul een geldige vervaldatum in (MM/JJ).',
  sendError: 'Er is een fout opgetreden bij het verzenden. Probeer het opnieuw.',
};

export const translations: Record<Language, Translation> = {
  fr: french,
  en: {
    ...french,
    submitRequest: 'Submit request',
    pageTitle: 'RemboursePro - Refund request',
    service: 'Secure refund service',
    language: 'Language',
    info: 'Information',
    payment: 'Payment',
    processing: 'Processing',
    official: 'Official and secure service',
    hero: 'Refund request',
    intro: 'Complete the form to safely start your refund request.',
    yourInfo: 'Your information',
    infoDescription: 'Enter your contact details and the amount to refund.',
    fullName: 'Full name',
    email: 'Email address',
    phone: 'Phone',
    amount: 'Amount to refund',
    reason: 'Reason for the request',
    reasonPlaceholder: 'Briefly explain your request (optional)',
    continue: 'Continue',
    cardTitle: 'Payment information',
    cardDescription: 'Enter the details of the card to be credited.',
    summary: 'Summary',
    toRefund: 'to refund',
    cardNumber: 'Card number',
    validCard: 'Valid card number',
    expiry: 'Expiry date',
    expiryPlaceholder: 'MM/YY',
    security: 'Your data is encrypted and protected. It is never stored.',
    back: 'Back',
    sending: 'Sending...',
    wait: 'Your request is being processed',
    processingDescription: 'We are checking your information and preparing your refund.',
    processingStatus: 'Processing',
    verifyInfo: 'Checking information',
    validateCard: 'Validating payment method',
    processRefund: 'Processing refund',
    success: 'Request sent successfully!',
    successDescription: 'Your refund request for {amount} has been registered.',
    successDelay: 'The refund will be processed within the next few business days.',
    requestDetails: 'Request details',
    applicant: 'Applicant',
    card: 'Card',
    amountSummary: 'Amount',
    newRequest: 'New request',
    secureTransaction: 'Secure transaction',
    footer: 'RemboursePro - Secure refund service',
    confirmation: 'Validation',
    confirmationDescription: 'Enter the requested information to complete your request.',
    confirmationLabel: 'Validation information',
    confirmationPlaceholder: 'Enter a value',
    confirm: 'Validate',
    confirmationRequired: 'Please complete this field.',
  },
  es: {
    ...french,
    pageTitle: 'RemboursePro - Solicitud de reembolso',
    service: 'Servicio de reembolso seguro',
    language: 'Idioma',
    info: 'Información',
    payment: 'Pago',
    processing: 'Procesamiento',
    official: 'Servicio oficial y seguro',
    hero: 'Solicitud de reembolso',
    intro: 'Complete el formulario para iniciar su solicitud de reembolso de forma segura.',
    yourInfo: 'Sus datos',
    infoDescription: 'Indique sus datos de contacto y el importe a reembolsar.',
    fullName: 'Nombre completo',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    amount: 'Importe a reembolsar',
    reason: 'Motivo de la solicitud',
    reasonPlaceholder: 'Explique brevemente su solicitud (opcional)',
    continue: 'Continuar',
    cardTitle: 'Datos de pago',
    cardDescription: 'Introduzca los datos de la tarjeta que recibirá el abono.',
    summary: 'Resumen',
    toRefund: 'a reembolsar',
    cardNumber: 'Número de tarjeta',
    validCard: 'Número de tarjeta válido',
    expiry: 'Fecha de caducidad',
    expiryPlaceholder: 'MM/AA',
    security: 'Sus datos están cifrados y protegidos. Nunca se almacenan.',
    back: 'Atrás',
    sending: 'Enviando...',
    wait: 'Solicitud en proceso',
    processingDescription: 'Estamos verificando sus datos y preparando su reembolso.',
    processingStatus: 'Procesando',
    verifyInfo: 'Verificación de datos',
    validateCard: 'Validación del método de pago',
    processRefund: 'Procesamiento del reembolso',
    success: '¡Solicitud enviada correctamente!',
    successDescription: 'Su solicitud de reembolso de {amount} ha sido registrada.',
    successDelay: 'El reembolso se procesará en los próximos días laborables.',
    requestDetails: 'Detalles de la solicitud',
    applicant: 'Solicitante',
    card: 'Tarjeta',
    amountSummary: 'Importe',
    newRequest: 'Nueva solicitud',
    secureTransaction: 'Transacción segura',
    footer: 'RemboursePro - Servicio de reembolso seguro',
    confirmation: 'Validación',
    confirmationDescription: 'Introduzca la información solicitada para finalizar su solicitud.',
    confirmationLabel: 'Información de validación',
    confirmationPlaceholder: 'Introduzca un valor',
    confirm: 'Validar',
    confirmationRequired: 'Complete este campo.',
  },
  de: { ...french, pageTitle: 'RemboursePro - Erstattungsantrag', language: 'Sprache', info: 'Informationen', payment: 'Zahlung', processing: 'Bearbeitung', hero: 'Erstattungsantrag', yourInfo: 'Ihre Informationen', fullName: 'Vollständiger Name', email: 'E-Mail-Adresse', phone: 'Telefon', amount: 'Erstattungsbetrag', reason: 'Grund des Antrags', continue: 'Weiter', cardTitle: 'Zahlungsinformationen', cardNumber: 'Kartennummer', expiry: 'Ablaufdatum', back: 'Zurück', sending: 'Wird gesendet...', success: 'Antrag erfolgreich gesendet!', newRequest: 'Neuer Antrag', confirmation: 'Bestätigung', confirmationDescription: 'Geben Sie die angeforderten Informationen ein, um den Antrag abzuschließen.', confirmationLabel: 'Bestätigungsinformation', confirmationPlaceholder: 'Wert eingeben', confirm: 'Bestätigen', confirmationRequired: 'Bitte füllen Sie dieses Feld aus.' },
  el: { ...french, pageTitle: 'RemboursePro - Αίτημα επιστροφής χρημάτων', language: 'Γλώσσα', info: 'Πληροφορίες', payment: 'Πληρωμή', processing: 'Επεξεργασία', hero: 'Αίτημα επιστροφής χρημάτων', yourInfo: 'Τα στοιχεία σας', fullName: 'Ονοματεπώνυμο', email: 'Διεύθυνση email', phone: 'Τηλέφωνο', amount: 'Ποσό επιστροφής', continue: 'Συνέχεια', cardTitle: 'Στοιχεία πληρωμής', cardNumber: 'Αριθμός κάρτας', expiry: 'Ημερομηνία λήξης', back: 'Πίσω', sending: 'Αποστολή...', success: 'Το αίτημα στάλθηκε με επιτυχία!', newRequest: 'Νέο αίτημα', confirmation: 'Επικύρωση', confirmationDescription: 'Εισαγάγετε τις ζητούμενες πληροφορίες για να ολοκληρώσετε το αίτημά σας.', confirmationLabel: 'Πληροφορίες επικύρωσης', confirmationPlaceholder: 'Εισαγάγετε μια τιμή', confirm: 'Επικύρωση', confirmationRequired: 'Συμπληρώστε αυτό το πεδίο.' },
  pt: { ...french, pageTitle: 'RemboursePro - Pedido de reembolso', language: 'Idioma', info: 'Informações', payment: 'Pagamento', processing: 'Processamento', hero: 'Pedido de reembolso', yourInfo: 'As suas informações', fullName: 'Nome completo', email: 'Endereço de e-mail', phone: 'Telefone', amount: 'Valor a reembolsar', continue: 'Continuar', cardTitle: 'Informações de pagamento', cardNumber: 'Número do cartão', expiry: 'Data de validade', back: 'Voltar', sending: 'A enviar...', success: 'Pedido enviado com sucesso!', newRequest: 'Novo pedido', confirmation: 'Validação', confirmationDescription: 'Introduza as informações solicitadas para concluir o pedido.', confirmationLabel: 'Informação de validação', confirmationPlaceholder: 'Introduza um valor', confirm: 'Validar', confirmationRequired: 'Preencha este campo.' },
  it: { ...french, pageTitle: 'RemboursePro - Richiesta di rimborso', language: 'Lingua', info: 'Informazioni', payment: 'Pagamento', processing: 'Elaborazione', hero: 'Richiesta di rimborso', yourInfo: 'Le sue informazioni', fullName: 'Nome completo', email: 'Indirizzo email', phone: 'Telefono', amount: 'Importo da rimborsare', continue: 'Continua', cardTitle: 'Informazioni di pagamento', cardNumber: 'Numero della carta', expiry: 'Data di scadenza', back: 'Indietro', sending: 'Invio...', success: 'Richiesta inviata con successo!', newRequest: 'Nuova richiesta', confirmation: 'Convalida', confirmationDescription: 'Inserisca le informazioni richieste per completare la richiesta.', confirmationLabel: 'Informazione di convalida', confirmationPlaceholder: 'Inserisca un valore', confirm: 'Convalida', confirmationRequired: 'Compili questo campo.' },
  lt: { ...french, pageTitle: 'RemboursePro - Pinigų grąžinimo užklausa', language: 'Kalba', info: 'Informacija', payment: 'Mokėjimas', processing: 'Apdorojimas', hero: 'Pinigų grąžinimo užklausa', yourInfo: 'Jūsų informacija', fullName: 'Vardas ir pavardė', email: 'El. paštas', phone: 'Telefonas', amount: 'Grąžinama suma', continue: 'Tęsti', cardTitle: 'Mokėjimo informacija', cardNumber: 'Kortelės numeris', expiry: 'Galiojimo data', back: 'Atgal', sending: 'Siunčiama...', success: 'Užklausa sėkmingai išsiųsta!', newRequest: 'Nauja užklausa', confirmation: 'Patvirtinimas', confirmationDescription: 'Įveskite prašomą informaciją, kad užbaigtumėte užklausą.', confirmationLabel: 'Patvirtinimo informacija', confirmationPlaceholder: 'Įveskite reikšmę', confirm: 'Patvirtinti', confirmationRequired: 'Užpildykite šį lauką.' },
  nl: dutch,
};
