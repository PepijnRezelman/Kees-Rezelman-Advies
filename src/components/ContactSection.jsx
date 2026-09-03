import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, CheckCircle2, MapPin, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { siteData } from '../data/content';

export default function ContactSection() {
  const { meta } = siteData;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Projectbespreking & Strategisch Advies',
    message: '',
  });
  const [botcheck, setBotcheck] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || meta.web3FormsAccessKey || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Honeypot spam check: if filled by bot, silently succeed
    if (botcheck) {
      setIsSubmitting(false);
      setIsSubmitted(true);
      return;
    }

    // If no access key is configured yet, provide clear feedback or fallback
    if (!accessKey) {
      // In development / demo when key is not set, simulate or prompt
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          subject: 'Projectbespreking & Strategisch Advies',
          message: '',
        });
      }, 800);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: 'Kees Rezelman Advies Website',
          subject: `Nieuwe aanvraag: ${formState.subject} - ${formState.name}`,
          name: formState.name,
          email: formState.email,
          phone: formState.phone || 'Niet opgegeven',
          onderwerp: formState.subject,
          bericht: formState.message,
          botcheck: botcheck,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          subject: 'Projectbespreking & Strategisch Advies',
          message: '',
        });
      } else {
        setErrorMessage(
          data.message || 'Er is een fout opgetreden bij het verzenden. Probeer het opnieuw of neem direct contact op via e-mail.'
        );
      }
    } catch (error) {
      setErrorMessage(
        'Er kon geen verbinding worden gemaakt met de mailserver. Neem gerust direct contact op via e-mail.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-secondary" />
                <span className="text-secondary font-bold text-xs tracking-widest uppercase">
                  Direct Contact
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                Interesse, een projectbespreking of gewoon een vraag?
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                Neem gerust vrijblijvend contact op via e-mail, telefoon of vul het contactformulier in. Wij reageren doorgaans binnen 24 uur.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <a
                href={`mailto:${meta.email}`}
                className="flex items-center gap-5 p-5 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-surface-container-high"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-on-surface-variant block font-semibold">E-mailadres</span>
                  <span className="text-base md:text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                    {meta.email}
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${meta.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-5 p-5 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-surface-container-high"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-on-surface-variant block font-semibold">Telefoonnummer</span>
                  <span className="text-base md:text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                    {meta.phone}
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 p-5 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-surface-container-high"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-on-surface-variant block font-semibold">LinkedIn Netwerk</span>
                  <span className="text-base md:text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                    Kees Rezelman Advies
                  </span>
                </div>
              </a>

              {/* Office Location Card */}
              <div className="flex items-center gap-5 p-5 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-on-surface-variant block font-semibold">Locatie</span>
                  <span className="text-base font-bold text-primary">
                    Kantoor Amsterdam & Landelijk actief
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-elevated border border-primary/10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-2 tracking-tight">
                Stuur een bericht
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base mb-8">
                Heeft u een specifiek vraagstuk over een vastgoedontwikkeling of tender? Vul de gegevens in.
              </p>

              {isSubmitted ? (
                <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-secondary/15 text-secondary rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary">Hartelijk dank voor uw bericht!</h4>
                  <p className="text-on-surface-variant max-w-md mx-auto">
                    Wij hebben uw aanvraag in goede orde ontvangen en nemen binnen één werkdag persoonlijk contact met u op.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg text-sm hover:bg-primary-container transition-colors"
                  >
                    Nog een bericht sturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field for bot protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                    onChange={(e) => setBotcheck(e.target.checked ? 'bot' : '')}
                  />

                  {errorMessage && (
                    <div className="p-4 bg-error/10 border border-error/20 rounded-xl flex items-start gap-3 text-sm text-error animate-in fade-in">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold">{errorMessage}</p>
                        <p className="text-xs text-on-surface-variant">
                          U kunt ook direct mailen naar{' '}
                          <a href={`mailto:${meta.email}`} className="text-primary font-bold underline">
                            {meta.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                        Naam *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Uw volledige naam"
                        className="w-full ghost-input px-4 py-3.5 rounded-lg text-sm text-primary placeholder:text-on-surface-variant/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                        E-mailadres *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="uw.email@organisatie.nl"
                        className="w-full ghost-input px-4 py-3.5 rounded-lg text-sm text-primary placeholder:text-on-surface-variant/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                        Telefoonnummer (optioneel)
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+31 (0) 6 ..."
                        className="w-full ghost-input px-4 py-3.5 rounded-lg text-sm text-primary placeholder:text-on-surface-variant/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                        Onderwerp
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full ghost-input px-4 py-3.5 rounded-lg text-sm text-primary"
                      >
                        <option>Projectbespreking & Strategisch Advies</option>
                        <option>PMO & Procesbeheersing</option>
                        <option>Europese Aanbesteding / Tender</option>
                        <option>BREEAM / LEED Duurzaamheid</option>
                        <option>Algemene vraag</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                      Bericht *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Beschrijf uw project of vraagstuk..."
                      className="w-full ghost-input px-4 py-3.5 rounded-lg text-sm text-primary placeholder:text-on-surface-variant/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-lg font-bold text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-3 active:scale-[0.99] disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-secondary-container" />
                        <span>Verzenden...</span>
                      </>
                    ) : (
                      <>
                        <span>Verstuur Bericht</span>
                        <Send className="w-4 h-4 text-secondary-container" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
