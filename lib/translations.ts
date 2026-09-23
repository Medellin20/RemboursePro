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
  en: french,
  es: french,
  de: french,
  el: french,
  pt: french,
  it: french,
  lt: french,
  nl: dutch,
};
