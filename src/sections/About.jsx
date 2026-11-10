import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { about, experience, sections, stats, ui } from '../data/content'
import { ChevronIcon } from '../components/Icons'
import Section from '../components/Section'
import Reveal from '../components/Reveal'

/** Start/end of a job as dates. "MM/YYYY" means the 1st of that month; no end means today. */
function jobRange(job) {
  const fromMonth = (v) => {
    const [m, y] = v.split('/').map(Number)
    return new Date(y, m - 1, 1)
  }
  const start = job.exactStart ? new Date(job.exactStart) : fromMonth(job.start)
  const end = job.exactEnd ? new Date(job.exactEnd) : job.end ? fromMonth(job.end) : new Date()
  return [start, end]
}

/** Total time of all jobs tagged `tag`, as { years, months }. */
function totalTime(tag) {
  const days = experience
    .filter((job) => job.tags?.includes(tag))
    .reduce((sum, job) => {
      const [start, end] = jobRange(job)
      return sum + (end - start) / 86400000
    }, 0)
  const totalMonths = Math.round(days / 30.44)
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 }
}

/** "4 yrs 10 mos" / "4 г. 10 мес." */
function formatTime({ years, months }, lang) {
  const parts = []
  if (lang === 'ru') {
    if (years) parts.push(`${years} г.`)
    if (months) parts.push(`${months} мес.`)
  } else {
    if (years) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`)
    if (months) parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`)
  }
  return parts.join(' ')
}

export default function About() {
  const { t, lang } = useApp()
  const [expanded, setExpanded] = useState(false)
  return (
    <Section id="about" eyebrow={sections.about.eyebrow} title={sections.about.title} className="section-alt">
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <Reveal>
          {/* Shows about 5 lines; "Read more" opens the full text */}
          <div
            id="about-text"
            className={`about-text relative space-y-5 overflow-hidden text-lg leading-relaxed text-navy-700 dark:text-navy-100 ${
              expanded ? '' : 'max-h-[8.125em]'
            }`}
          >
            {about.paragraphs.map((p, i) => (
              <p key={i}>{t(p)}</p>
            ))}
            {!expanded && (
              <div
                aria-hidden="true"
                className="no-print pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-navy-50 dark:from-navy-900"
              />
            )}
          </div>
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            aria-controls="about-text"
            className="no-print mt-3 inline-flex items-center gap-1 rounded-md px-2 py-1.5 font-medium text-accent-dark hover:bg-accent/10 dark:text-accent-light"
          >
            {t(expanded ? ui.readLess : ui.readMore)}
            <ChevronIcon width={16} height={16} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </Reveal>

        <Reveal delay={100}>
          <ul className="space-y-3">
            {about.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-navy-700 dark:text-navy-100">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {t(h)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Key numbers */}
      <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal as="li" key={i} delay={(i % 3) * 80} className={`card p-4 sm:p-6 ${s.list || i === stats.length - 1 ? 'col-span-2 lg:col-span-1' : ''}`}>
            <p className="text-xl font-bold tracking-tight text-accent-dark dark:text-accent-light sm:text-3xl">
              {s.sumOf ? formatTime(totalTime(s.sumOf), lang) : t(s.value)}
            </p>
            <p className="mt-2 text-sm leading-snug text-navy-600 dark:text-navy-200">{t(s.label)}</p>
            {s.list && (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {s.list.map((item, j) => (
                  <li
                    key={j}
                    className="rounded-full border border-navy-200 bg-navy-50 px-2.5 py-0.5 text-xs text-navy-700 dark:border-navy-700 dark:bg-navy-800/60 dark:text-navy-100"
                  >
                    {t(item)}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
