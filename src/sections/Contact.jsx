import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { contactForm, profile, sections, ui } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { CheckIcon, CopyIcon, DownloadIcon, LinkedInIcon, MailIcon, PinIcon, TelegramIcon } from '../components/Icons'

export default function Contact() {
  const { t } = useApp()
  const emptyForm = { name: '', email: '', organisation: '', subject: '', message: '' }
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const useWeb3Forms = Boolean(profile.web3formsKey)

  const [copied, setCopied] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Copies the email address and shows "Copied" for two seconds.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      // Older browsers: select the text in a temporary field and copy it
      const field = document.createElement('textarea')
      field.value = profile.email
      document.body.appendChild(field)
      field.select()
      document.execCommand('copy')
      field.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Sends the message. With a web3forms.com key it is delivered straight to my
  // inbox; without one, the visitor's email app opens with the message ready.
  const handleSubmit = async (e) => {
    e.preventDefault()
    const signature = `${form.name}${form.organisation ? `, ${form.organisation}` : ''}`

    if (!useWeb3Forms) {
      const body = `${form.message}\n\n— ${signature}\n${form.email}`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
      return
    }

    // A hidden "botcheck" field is filled in only by spam bots
    if (e.target.botcheck.checked) return

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.web3formsKey,
          subject: `Portfolio: ${form.subject}`,
          from_name: signature,
          name: form.name,
          email: form.email,
          organisation: form.organisation || '—',
          message: form.message,
        }),
      })
      const result = await response.json()
      if (!result.success) throw new Error(result.message)
      setStatus('sent')
      setForm(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-navy-950 placeholder-navy-400 transition-colors focus:border-accent dark:border-navy-700 dark:bg-navy-950 dark:text-white'
  const labelClass = 'mb-1.5 block text-sm font-medium text-navy-700 dark:text-navy-100'

  return (
    <Section id="contact" eyebrow={sections.contact.eyebrow} title={sections.contact.title} intro={sections.contact.intro}>
      <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
        <Reveal>
          <ul className="space-y-5">
            <li className="flex items-center gap-4">
              <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-dark dark:text-accent-light">
                <MailIcon />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-navy-500 dark:text-navy-300">{t(contactForm.emailLabel)}</p>
                <a href={`mailto:${profile.email}`} className="break-all font-medium text-navy-950 hover:text-accent-dark dark:text-white dark:hover:text-accent-light">
                  {profile.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-dark dark:text-accent-light">
                <LinkedInIcon />
              </span>
              <div>
                <p className="text-sm text-navy-500 dark:text-navy-300">{t(contactForm.linkedinLabel)}</p>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy-950 hover:text-accent-dark dark:text-white dark:hover:text-accent-light"
                >
                  {t(profile.name)}
                </a>
              </div>
            </li>
            {profile.telegram && (
              <li className="flex items-center gap-4">
                <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-dark dark:text-accent-light">
                  <TelegramIcon />
                </span>
                <div>
                  <p className="text-sm text-navy-500 dark:text-navy-300">{t(ui.telegram)}</p>
                  <a
                    href={`https://t.me/${profile.telegram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-navy-950 hover:text-accent-dark dark:text-white dark:hover:text-accent-light"
                  >
                    @{profile.telegram}
                  </a>
                </div>
              </li>
            )}
            <li className="flex items-center gap-4">
              <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-dark dark:text-accent-light">
                <PinIcon />
              </span>
              <div>
                <p className="text-sm text-navy-500 dark:text-navy-300">{t(contactForm.locationLabel)}</p>
                <p className="font-medium text-navy-950 dark:text-white">{t(profile.location)}</p>
              </div>
            </li>
          </ul>

          {/* Quick actions */}
          <div className="no-print mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={copyEmail} className="btn btn-secondary py-2.5">
              {copied ? <CheckIcon width={18} height={18} /> : <CopyIcon width={18} height={18} />}
              {t(copied ? ui.copied : ui.copyEmail)}
            </button>
            <a href={profile.cvFile} download className="btn btn-secondary py-2.5">
              <DownloadIcon width={18} height={18} />
              {t(ui.downloadCv)}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary py-2.5">
              <LinkedInIcon width={18} height={18} />
              {t(ui.linkedinProfile)}
            </a>
            {profile.telegram && (
              <a href={`https://t.me/${profile.telegram}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary py-2.5">
                <TelegramIcon width={18} height={18} />
                {t(ui.telegram)}
              </a>
            )}
          </div>
          {/* Announces the "Copied" message to screen readers */}
          <p className="sr-only" aria-live="polite">
            {copied ? t(ui.copied) : ''}
          </p>
        </Reveal>

        <Reveal delay={100} className="no-print">
          {status === 'sent' ? (
            <div role="status" className="card flex flex-col items-start gap-4 p-6 sm:p-8">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                <CheckIcon width={24} height={24} />
              </span>
              <p className="text-lg font-medium text-navy-950 dark:text-white">{t(contactForm.success)}</p>
              <button type="button" onClick={() => setStatus('idle')} className="btn btn-secondary py-2.5">
                {t(contactForm.sendAnother)}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-4 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className={labelClass}>{t(contactForm.name)}</label>
                  <input id="cf-name" name="name" required autoComplete="name" value={form.name} onChange={update} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="cf-email" className={labelClass}>{t(contactForm.email)}</label>
                  <input id="cf-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update} className={inputClass} />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-org" className={labelClass}>{t(contactForm.organisation)}</label>
                  <input id="cf-org" name="organisation" autoComplete="organization" value={form.organisation} onChange={update} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="cf-subject" className={labelClass}>{t(contactForm.subject)}</label>
                  <input id="cf-subject" name="subject" required value={form.subject} onChange={update} className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="cf-message" className={labelClass}>{t(contactForm.message)}</label>
                <textarea id="cf-message" name="message" required rows={5} value={form.message} onChange={update} className={`${inputClass} resize-y`} />
              </div>
              {/* Spam trap: hidden from people, bots tick it */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              {status === 'error' && (
                <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-800 dark:bg-red-900/30 dark:text-red-200">
                  {t(contactForm.error)}{' '}
                  <a href={`mailto:${profile.email}`} className="font-medium underline">
                    {profile.email}
                  </a>
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-navy-500 dark:text-navy-300">
                  {t(useWeb3Forms ? contactForm.note : contactForm.noteMailto)}
                </p>
                <button type="submit" disabled={status === 'sending'} className="btn btn-primary shrink-0 disabled:opacity-60">
                  <MailIcon width={18} height={18} />
                  {t(status === 'sending' ? contactForm.sending : contactForm.send)}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
