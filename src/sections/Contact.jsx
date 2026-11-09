import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { contactForm, profile, sections } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { LinkedInIcon, MailIcon, PinIcon } from '../components/Icons'

export default function Contact() {
  const { t } = useApp()
  const [form, setForm] = useState({ name: '', organisation: '', subject: '', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Builds a mailto: link and opens the visitor's email app.
  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `${form.message}\n\n— ${form.name}${form.organisation ? `, ${form.organisation}` : ''}`
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
  }

  const inputClass =
    'w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-navy-950 placeholder-navy-400 transition-colors focus:border-accent dark:border-navy-700 dark:bg-navy-950 dark:text-white'
  const labelClass = 'mb-1.5 block text-sm font-medium text-navy-700 dark:text-navy-100'

  return (
    <Section id="contact" eyebrow={sections.contact.eyebrow} title={sections.contact.title} intro={sections.contact.intro} className="section-alt">
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
        </Reveal>

        <Reveal delay={100} className="no-print">
          <form onSubmit={handleSubmit} className="card space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className={labelClass}>{t(contactForm.name)}</label>
                <input id="cf-name" name="name" required autoComplete="name" value={form.name} onChange={update} className={inputClass} />
              </div>
              <div>
                <label htmlFor="cf-org" className={labelClass}>{t(contactForm.organisation)}</label>
                <input id="cf-org" name="organisation" autoComplete="organization" value={form.organisation} onChange={update} className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="cf-subject" className={labelClass}>{t(contactForm.subject)}</label>
              <input id="cf-subject" name="subject" required value={form.subject} onChange={update} className={inputClass} />
            </div>
            <div>
              <label htmlFor="cf-message" className={labelClass}>{t(contactForm.message)}</label>
              <textarea id="cf-message" name="message" required rows={5} value={form.message} onChange={update} className={`${inputClass} resize-y`} />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-navy-500 dark:text-navy-300">{t(contactForm.note)}</p>
              <button type="submit" className="btn btn-primary shrink-0">
                <MailIcon width={18} height={18} />
                {t(contactForm.send)}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
