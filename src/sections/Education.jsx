import { useApp } from '../context/AppContext'
import { education, sections, ui } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { GradCapIcon } from '../components/Icons'

export default function Education() {
  const { t } = useApp()
  return (
    <Section id="education" eyebrow={sections.education.eyebrow} title={sections.education.title} className="section-alt">
      <ul className="grid gap-6 md:grid-cols-3">
        {education.map((ed, i) => (
          <Reveal as="li" key={i} delay={i * 80} className="card flex flex-col p-6">
            <span aria-hidden="true" className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent-dark dark:text-accent-light">
              <GradCapIcon />
            </span>
            <p className="text-sm font-medium text-accent-dark dark:text-accent-light">{ed.years}</p>
            <h3 className="mt-1 text-lg font-semibold leading-snug text-navy-950 dark:text-white">{t(ed.degree)}</h3>
            <p className="mt-2 text-navy-700 dark:text-navy-100">{t(ed.institution)}</p>
            <p className="text-sm text-navy-500 dark:text-navy-300">{t(ed.location)}</p>
            {ed.details && <p className="mt-3 text-sm text-navy-600 dark:text-navy-200">{t(ed.details)}</p>}
            {ed.thesis && (
              <p className="mt-4 border-t border-navy-100 pt-4 text-sm text-navy-600 dark:border-navy-800 dark:text-navy-200">
                <span className="font-semibold">{t(ui.thesis)}:</span> <em>{t(ed.thesis)}</em>
              </p>
            )}
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
