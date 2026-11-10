import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { JOBS_VISIBLE, experience, gallery, sections, ui } from '../data/content'
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

/** Heading for each of the two columns, with a short hint and the years covered. */
function ColumnHeading({ id, title, hint, years }) {
  const { t } = useApp()
  return (
    <div className="mb-5">
      <h3 id={id} className="flex scroll-mt-24 items-center gap-3 text-xl font-semibold text-navy-950 dark:text-white">
        <span aria-hidden="true" className="h-6 w-1 rounded-full bg-accent" />
        {t(title)}
      </h3>
      <p className="mt-1 pl-4 text-sm text-navy-500 dark:text-navy-300">
        {t(hint)} · <span className="tabular-nums">{years}</span>
      </p>
    </div>
  )
}

/** Compact job card on a timeline. "Details" opens responsibilities and achievements. */
function JobCard({ job, id, hidden = false }) {
  const { t, lang } = useApp()
  const [open, setOpen] = useState(false)
  const panelId = `job-panel-${id}`
  const isCurrent = !job.end
  // Exact dates (job.dates) are shown when given; otherwise month and year from start/end.
  const dates = job.dates
    ? t(job.dates)
    : `${formatDate(job.start, lang)} – ${isCurrent ? t(ui.present) : formatDate(job.end, lang)}`

  return (
    <li hidden={hidden} className="expand-panel relative pl-7">
      {/* timeline dot */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-5 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 ${
          isCurrent
            ? 'border-accent bg-accent shadow-[0_0_0_4px_rgba(75,146,219,0.2)]'
            : 'border-accent bg-white dark:bg-navy-950'
        }`}
      />
      <article className="card">
        {/* Same height for all cards on desktop so the two columns line up */}
        <div className="p-4 sm:p-5 lg:min-h-[10.5rem]">
          <p className="text-sm font-medium tabular-nums text-accent-dark dark:text-accent-light">
            {dates}
          </p>
          <h4 className="mt-1 font-semibold leading-snug text-navy-950 dark:text-white">{t(job.role)}</h4>
          <p className="mt-0.5 text-sm text-navy-600 dark:text-navy-200">
            {t(job.organisation)} · {t(job.location)}
          </p>
          {job.note && <p className="mt-1 text-sm italic text-navy-500 dark:text-navy-300">{t(job.note)}</p>}
        </div>

        <div className="no-print border-t border-navy-100 px-4 py-2 dark:border-navy-800 sm:px-5">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-accent-dark hover:bg-accent/10 dark:text-accent-light"
          >
            {t(open ? ui.hide : ui.details)}
            <span className="sr-only">: {t(job.role)}</span>
            <ChevronIcon width={16} height={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div id={panelId} hidden={!open} className="job-panel space-y-5 border-t border-navy-100 p-4 text-sm dark:border-navy-800 sm:p-5">
          <div>
            <h5 className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-300">
              {t(ui.responsibilities)}
            </h5>
            <ul className="space-y-1.5 text-navy-700 dark:text-navy-100">
              {job.responsibilities.map((r, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy-400" />
                  {t(r)}
                </li>
              ))}
            </ul>
          </div>
          {job.achievements.length > 0 && (
            <div>
              <h5 className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-300">
                {t(ui.achievements)}
              </h5>
              <ul className="space-y-1.5 text-navy-700 dark:text-navy-100">
                {job.achievements.map((a, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span aria-hidden="true" className="shrink-0 text-accent-dark dark:text-accent-light">✓</span>
                    {t(a)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    </li>
  )
}

/** Years covered by a group, e.g. "1997 – 2021" or "2013 – present". */
function yearSpan(jobs, presentLabel) {
  const starts = jobs.map((j) => Number(j.start.split('/')[1]))
  const hasCurrent = jobs.some((j) => !j.end)
  const ends = jobs.filter((j) => j.end).map((j) => Number(j.end.split('/')[1]))
  return `${Math.min(...starts)} – ${hasCurrent ? presentLabel : Math.max(...ends)}`
}

/** One column of jobs: the first JOBS_VISIBLE are shown, the rest open with "Show all". */
function JobColumn({ group, jobs, delay }) {
  const { t } = useApp()
  const [showAll, setShowAll] = useState(false)
  const extra = jobs.length - JOBS_VISIBLE
  const listId = `exp-list-${group.key}`
  return (
    <Reveal delay={delay}>
      <ColumnHeading id={`exp-${group.key}`} title={group.title} hint={group.hint} years={yearSpan(jobs, t(ui.present))} />
      <ol id={listId} className="relative ml-2 space-y-4 border-l-2 border-navy-100 dark:border-navy-800">
        {jobs.map((job, i) => (
          <JobCard key={i} job={job} id={`${group.key}-${i}`} hidden={!showAll && i >= JOBS_VISIBLE} />
        ))}
      </ol>
      {extra > 0 && (
        <div className="no-print ml-2 mt-3 pl-7">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            aria-expanded={showAll}
            aria-controls={listId}
            className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-accent-dark hover:bg-accent/10 dark:text-accent-light"
          >
            {showAll ? t(ui.showFewerCourses) : `${t(ui.showAllCourses)} (${jobs.length})`}
            <ChevronIcon width={16} height={16} className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}
    </Reveal>
  )
}

const GROUPS = [
  { key: 'military', title: ui.militaryCareer, hint: ui.militaryCareerHint },
  { key: 'international', title: ui.internationalCareer, hint: ui.internationalCareerHint },
]

export default function Experience() {
  const { t } = useApp()
  return (
    <Section
      id="experience"
      eyebrow={sections.experience.eyebrow}
      title={sections.experience.title}
      intro={sections.experience.intro}
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
        {GROUPS.map((g, gi) => {
          const jobs = experience.filter((j) => j.group === g.key)
          return <JobColumn key={g.key} group={g} jobs={jobs} delay={gi * 100} />
        })}
      </div>

      {/* Photo gallery */}
      {gallery.length > 0 && (
        <div className="mt-16">
          <h3 className="mb-5 flex items-center gap-3 text-xl font-semibold text-navy-950 dark:text-white">
            <span aria-hidden="true" className="h-6 w-1 rounded-full bg-accent" />
            {t(ui.galleryHeading)}
          </h3>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {gallery.map((photo, i) => (
              <Reveal as="li" key={i} delay={i * 80} className={i === gallery.length - 1 && gallery.length % 2 ? 'col-span-2 lg:col-span-1' : ''}>
                <figure className="card h-full overflow-hidden">
                  <div className="overflow-hidden">
                  <img
                    src={photo.src}
                    alt={t(photo.alt)}
                    loading="lazy"
                    className={`aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105 ${
                      photo.position === 'top' ? 'object-top' : photo.position === 'right' ? 'object-right' : ''
                    }`}
                  />
                  </div>
                  <figcaption className="p-3 text-xs leading-snug text-navy-600 dark:text-navy-200 sm:text-sm">
                    {t(photo.caption)}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}
