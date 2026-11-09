import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { experience, sections, ui } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { ChevronIcon } from '../components/Icons'

/** Turns "03/2024" into "Mar 2024" (or "мар. 2024" in Russian). */
function formatDate(value, lang) {
  const [month, year] = value.split('/').map(Number)
  return new Intl.DateTimeFormat(lang === 'ru' ? 'ru-RU' : 'en-US', { month: 'short', year: 'numeric' })
    .format(new Date(year, month - 1))
    .replace(' г.', '')
}

function ExperienceItem({ job, index, defaultOpen }) {
  const { t, lang } = useApp()
  const [open, setOpen] = useState(defaultOpen)
  const panelId = `job-panel-${index}`
  const isCurrent = !job.end
  const dates = `${formatDate(job.start, lang)} – ${isCurrent ? t(ui.present) : formatDate(job.end, lang)}`

  return (
    <Reveal as="li" className="relative pl-8 sm:pl-12">
      {/* timeline dot */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-2 ${
          isCurrent
            ? 'border-accent bg-accent shadow-[0_0_0_4px_rgba(75,146,219,0.2)]'
            : 'border-accent bg-white dark:bg-navy-950'
        }`}
      />

      <article className="card">
        <h3>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex w-full items-start justify-between gap-4 rounded-xl p-5 text-left sm:p-6"
          >
            <span>
              <span className="block text-sm font-medium text-accent-dark dark:text-accent-light">{dates}</span>
              <span className="mt-1 block text-lg font-semibold text-navy-950 dark:text-white">{t(job.role)}</span>
              <span className="mt-1 block text-navy-600 dark:text-navy-200">
                {t(job.organisation)} · {t(job.location)}
              </span>
            </span>
            <span className="no-print mt-1 flex shrink-0 items-center gap-1 text-sm text-navy-500 dark:text-navy-300">
              <span className="sr-only">{t(open ? ui.hideDetails : ui.showDetails)}</span>
              <ChevronIcon className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </span>
          </button>
        </h3>

        <div id={panelId} hidden={!open} className="job-panel border-t border-navy-100 px-5 pb-6 pt-5 dark:border-navy-800 sm:px-6">
          <div className={`grid gap-6 ${job.achievements.length ? 'md:grid-cols-2' : ''}`}>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-300">
                {t(ui.responsibilities)}
              </h4>
              <ul className="space-y-2 text-navy-700 dark:text-navy-100">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-navy-400" />
                    {t(r)}
                  </li>
                ))}
              </ul>
            </div>
            {job.achievements.length > 0 && (
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-300">
                  {t(ui.achievements)}
                </h4>
                <ul className="space-y-2 text-navy-700 dark:text-navy-100">
                  {job.achievements.map((a, i) => (
                    <li key={i} className="flex gap-3">
                      <span aria-hidden="true" className="mt-0.5 shrink-0 text-accent-dark dark:text-accent-light">
                        ✓
                      </span>
                      {t(a)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow={sections.experience.eyebrow} title={sections.experience.title}>
      <ol className="relative ml-2 space-y-6 border-l-2 border-navy-100 dark:border-navy-800 sm:ml-4">
        {experience.map((job, i) => (
          <ExperienceItem key={i} job={job} index={i} defaultOpen={i === 0} />
        ))}
      </ol>
    </Section>
  )
}
