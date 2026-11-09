import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { COURSES_VISIBLE, education, sections, training, ui } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { ChevronIcon, ExternalIcon, GradCapIcon } from '../components/Icons'

/** Heading for each of the two columns. */
function ColumnHeading({ id, children }) {
  return (
    <h3 id={id} className="mb-5 flex scroll-mt-24 items-center gap-3 text-xl font-semibold text-navy-950 dark:text-white">
      <span aria-hidden="true" className="h-6 w-1 rounded-full bg-accent" />
      {children}
    </h3>
  )
}

/** Photo of a school, with a placeholder if the image is missing or fails to load. */
function SchoolPhoto({ school, className }) {
  const [failed, setFailed] = useState(false)
  if (!school.image || failed) {
    return (
      <div aria-hidden="true" className={`grid place-items-center bg-gradient-to-br from-navy-700 to-navy-950 text-accent-light ${className}`}>
        <GradCapIcon width={28} height={28} />
      </div>
    )
  }
  return (
    <img
      src={school.image}
      alt={`${school.names.en}, ${school.location.en}`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}

/** Compact school card. "Details" opens names, description, thesis, publication and website. */
function SchoolCard({ school, index }) {
  const { t } = useApp()
  const [open, setOpen] = useState(false)
  const { names } = school
  const panelId = `school-panel-${index}`

  return (
    <li className="card overflow-hidden">
      <div className="flex gap-4 p-4 sm:p-5">
        <SchoolPhoto school={school} className="h-20 w-20 shrink-0 rounded-lg sm:h-24 sm:w-24" />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark dark:text-accent-light">
            {t(school.level)}
          </p>
          <h4 className="mt-1 font-semibold leading-snug text-navy-950 dark:text-white">{names.original}</h4>
          <p className="mt-0.5 text-sm text-navy-600 dark:text-navy-200">{t(school.degree)}</p>
          <p className="mt-1 text-sm tabular-nums text-navy-500 dark:text-navy-300">
            {school.studied} · {t(school.location)}
          </p>
        </div>
      </div>

      <div className="no-print flex flex-wrap items-center gap-2 border-t border-navy-100 px-4 py-2.5 dark:border-navy-800 sm:px-5">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-accent-dark hover:bg-accent/10 dark:text-accent-light"
        >
          {t(open ? ui.hide : ui.details)}
          <span className="sr-only">: {names.en}</span>
          <ChevronIcon width={16} height={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
        {school.publication && (
          <a
            href={school.publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-accent-dark hover:bg-accent/10 dark:text-accent-light"
          >
            {t(ui.publication)}
            <ExternalIcon width={14} height={14} />
          </a>
        )}
        <a
          href={school.website}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-navy-600 hover:bg-navy-100 dark:text-navy-200 dark:hover:bg-navy-800"
        >
          {t(ui.learnMore)}
          <span className="sr-only">: {names.en}</span>
          <ExternalIcon width={14} height={14} />
        </a>
      </div>

      {/* Details */}
      <div id={panelId} hidden={!open} className="expand-panel border-t border-navy-100 dark:border-navy-800">
        {school.image && (
          <figure className="relative">
            <SchoolPhoto school={school} className="aspect-[16/7] w-full" />
            {school.imageCredit && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-1.5 pt-6 text-[11px] text-white/90">
                <a href={school.imageCredit.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {school.imageCredit.text}
                </a>
              </figcaption>
            )}
          </figure>
        )}
        <div className="space-y-4 p-4 text-sm sm:p-5">
          <dl className="space-y-1">
            {names.originalAlt && (
              <div className="flex gap-2">
                <dt className="w-7 shrink-0 font-semibold text-navy-500 dark:text-navy-300">KY</dt>
                <dd className="text-navy-700 dark:text-navy-100" lang="ky">{names.originalAlt}</dd>
              </div>
            )}
            <div className="flex gap-2">
              <dt className="w-7 shrink-0 font-semibold text-navy-500 dark:text-navy-300">EN</dt>
              <dd className="text-navy-700 dark:text-navy-100" lang="en">{names.en}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-7 shrink-0 font-semibold text-navy-500 dark:text-navy-300">RU</dt>
              <dd className="text-navy-700 dark:text-navy-100" lang="ru">{names.ru}</dd>
            </div>
          </dl>

          <p className="text-navy-600 dark:text-navy-200">{t(school.about)}</p>

          <dl className="flex flex-wrap gap-x-8 gap-y-2">
            <div>
              <dt className="text-navy-500 dark:text-navy-300">{t(ui.studied)}</dt>
              <dd className="font-medium tabular-nums text-navy-950 dark:text-white">{school.studied}</dd>
            </div>
            <div>
              <dt className="text-navy-500 dark:text-navy-300">{t(ui.graduated)}</dt>
              <dd className="font-medium tabular-nums text-navy-950 dark:text-white">{school.graduated}</dd>
            </div>
          </dl>

          {school.details && <p className="text-navy-600 dark:text-navy-200">{t(school.details)}</p>}

          {(school.thesis || school.publication) && (
            <div className="rounded-lg bg-navy-50 p-3 dark:bg-navy-900/60">
              {school.thesis && (
                <p className="text-navy-700 dark:text-navy-100">
                  <span className="font-semibold">{t(ui.thesis)}:</span> <em>{t(school.thesis)}</em>
                </p>
              )}
              {school.publication && (
                <p className="mt-2 text-navy-700 dark:text-navy-100">
                  <span className="font-semibold">{t(ui.publication)}:</span>{' '}
                  <a
                    href={school.publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    lang="en"
                    className="text-accent-dark hover:underline dark:text-accent-light"
                  >
                    “{school.publication.title}”
                  </a>
                  <span className="block text-navy-500 dark:text-navy-300">{school.publication.journal}</span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

function CourseItem({ course }) {
  const { t } = useApp()
  return (
    <li className="flex items-baseline justify-between gap-4 py-3">
      <div>
        <p className="font-medium text-navy-950 dark:text-white">{t(course.name)}</p>
        {t(course.provider) && <p className="text-sm text-navy-500 dark:text-navy-300">{t(course.provider)}</p>}
      </div>
      <p className="shrink-0 text-sm font-medium tabular-nums text-accent-dark dark:text-accent-light">{course.year}</p>
    </li>
  )
}

export default function Education() {
  const { t } = useApp()
  const [showAll, setShowAll] = useState(false)
  const visible = training.slice(0, COURSES_VISIBLE)
  const more = training.slice(COURSES_VISIBLE)

  return (
    <Section id="education" eyebrow={sections.education.eyebrow} title={sections.education.title} className="section-alt">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
        {/* Left: academic education */}
        <Reveal>
          <ColumnHeading id="academic">{t(ui.academicEducation)}</ColumnHeading>
          <ul className="space-y-4">
            {education.map((school, i) => (
              <SchoolCard key={i} school={school} index={i} />
            ))}
          </ul>
        </Reveal>

        {/* Right: courses & training */}
        <Reveal delay={100}>
          <ColumnHeading id="courses">{t(ui.coursesHeading)}</ColumnHeading>
          <div className="card px-4 py-2 sm:px-5">
            <ul className="divide-y divide-navy-100 dark:divide-navy-800">
              {visible.map((c, i) => (
                <CourseItem key={i} course={c} />
              ))}
            </ul>
            {more.length > 0 && (
              <>
                <ul id="more-courses" hidden={!showAll} className="expand-panel divide-y divide-navy-100 border-t border-navy-100 dark:divide-navy-800 dark:border-navy-800">
                  {more.map((c, i) => (
                    <CourseItem key={i} course={c} />
                  ))}
                </ul>
                <div className="no-print border-t border-navy-100 py-2.5 dark:border-navy-800">
                  <button
                    type="button"
                    onClick={() => setShowAll((s) => !s)}
                    aria-expanded={showAll}
                    aria-controls="more-courses"
                    className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-accent-dark hover:bg-accent/10 dark:text-accent-light"
                  >
                    {showAll ? t(ui.showFewerCourses) : `${t(ui.showAllCourses)} (${training.length})`}
                    <ChevronIcon width={16} height={16} className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
