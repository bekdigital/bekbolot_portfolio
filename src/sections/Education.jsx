import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { education, sections, training, ui } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { ExternalIcon, GradCapIcon } from '../components/Icons'

/** Small heading used for the two parts of the Education section. */
function PartHeading({ id, children }) {
  return (
    <h3 id={id} className="mb-6 flex scroll-mt-24 items-center gap-3 text-xl font-semibold text-navy-950 dark:text-white">
      <span aria-hidden="true" className="h-6 w-1 rounded-full bg-accent" />
      {children}
    </h3>
  )
}

function InstitutionCard({ school, index }) {
  const { t } = useApp()
  const { names } = school
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = school.image && !imageFailed
  return (
    <Reveal as="li" delay={index * 60} className="card overflow-hidden md:grid md:grid-cols-[2fr_3fr]">
      {/* Photo of the institution */}
      <figure className="relative bg-navy-100 dark:bg-navy-800">
        {showImage ? (
          <img
            src={school.image}
            onError={() => setImageFailed(true)}
            alt={`${names.en}, ${t(school.location)}`}
            loading="lazy"
            className="aspect-[16/10] h-full w-full object-cover md:aspect-auto"
          />
        ) : (
          <div
            aria-hidden="true"
            className="grid aspect-[16/10] h-full w-full place-items-center bg-gradient-to-br from-navy-700 to-navy-950 text-navy-300 md:aspect-auto md:min-h-[16rem]"
          >
            <div className="text-center">
              <GradCapIcon width={44} height={44} className="mx-auto text-accent-light" />
              <p className="mt-3 px-6 text-lg font-semibold text-white">{names.original}</p>
            </div>
          </div>
        )}
        {showImage && school.imageCredit && (
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-1.5 pt-6 text-[11px] text-white/90">
            <a href={school.imageCredit.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {school.imageCredit.text}
            </a>
          </figcaption>
        )}
      </figure>

      <div className="flex flex-col p-6 sm:p-7">
        {/* 1. Names: original language, English, Russian */}
        <h4 className="text-xl font-semibold leading-snug text-navy-950 dark:text-white" lang="und">
          {names.original}
        </h4>
        {names.originalAlt && <p className="text-navy-700 dark:text-navy-100">{names.originalAlt}</p>}
        <dl className="mt-2 space-y-0.5 text-sm">
          <div className="flex gap-2">
            <dt className="w-7 shrink-0 font-semibold text-navy-500 dark:text-navy-300">EN</dt>
            <dd className="text-navy-700 dark:text-navy-100" lang="en">{names.en}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-7 shrink-0 font-semibold text-navy-500 dark:text-navy-300">RU</dt>
            <dd className="text-navy-700 dark:text-navy-100" lang="ru">{names.ru}</dd>
          </div>
        </dl>

        {/* 2. About the school */}
        <p className="mt-4 text-navy-600 dark:text-navy-200">{t(school.about)}</p>

        {/* Degree */}
        <p className="mt-4 font-semibold text-accent-dark dark:text-accent-light">{t(school.degree)}</p>
        {school.details && <p className="mt-1 text-sm text-navy-600 dark:text-navy-200">{t(school.details)}</p>}

        {/* 3. Study period */}
        <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <div>
            <dt className="text-navy-500 dark:text-navy-300">{t(ui.studied)}</dt>
            <dd className="font-medium tabular-nums text-navy-950 dark:text-white">{school.studied}</dd>
          </div>
          <div>
            <dt className="text-navy-500 dark:text-navy-300">{t(ui.graduated)}</dt>
            <dd className="font-medium tabular-nums text-navy-950 dark:text-white">{school.graduated}</dd>
          </div>
          <div>
            <dt className="text-navy-500 dark:text-navy-300">{t(ui.place)}</dt>
            <dd className="font-medium text-navy-950 dark:text-white">{t(school.location)}</dd>
          </div>
        </dl>

        {/* 4. Thesis & publication */}
        {(school.thesis || school.publication) && (
          <div className="mt-5 rounded-lg border border-navy-100 bg-navy-50 p-4 text-sm dark:border-navy-800 dark:bg-navy-900/60">
            {school.thesis && (
              <p className="text-navy-700 dark:text-navy-100">
                <span className="font-semibold">{t(ui.thesis)}:</span> <em>{t(school.thesis)}</em>
              </p>
            )}
            {school.publication && (
              <div className="mt-3">
                <p className="font-semibold text-navy-700 dark:text-navy-100">{t(ui.publication)}:</p>
                <p className="mt-0.5 text-navy-700 dark:text-navy-100" lang="en">
                  “{school.publication.title}”
                </p>
                <p className="text-navy-500 dark:text-navy-300">{school.publication.journal}</p>
                <a
                  href={school.publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 font-medium text-accent-dark hover:underline dark:text-accent-light"
                >
                  {t(ui.readPublication)}
                  <ExternalIcon width={15} height={15} />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Learn more */}
        <div className="mt-6">
          <a href={school.website} target="_blank" rel="noopener noreferrer" className="btn btn-secondary py-2.5">
            {t(ui.learnMore)}
            <span className="sr-only">: {names.en}</span>
            <ExternalIcon width={16} height={16} />
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function Education() {
  const { t } = useApp()
  return (
    <Section id="education" eyebrow={sections.education.eyebrow} title={sections.education.title} className="section-alt">
      {/* Part 1: academic education */}
      <PartHeading id="academic">{t(ui.academicEducation)}</PartHeading>
      <ul className="space-y-8">
        {education.map((school, i) => (
          <InstitutionCard key={i} school={school} index={i} />
        ))}
      </ul>

      {/* Part 2: courses & certificates */}
      <div className="mt-16">
        <PartHeading id="courses">{t(ui.coursesHeading)}</PartHeading>
        <Reveal>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {training.map((c, i) => (
              <li key={i} className="flex items-baseline justify-between gap-4 border-b border-navy-200 py-4 dark:border-navy-800">
                <div>
                  <p className="font-medium text-navy-950 dark:text-white">{t(c.name)}</p>
                  {t(c.provider) && <p className="text-sm text-navy-500 dark:text-navy-300">{t(c.provider)}</p>}
                </div>
                <p className="shrink-0 text-sm font-medium tabular-nums text-accent-dark dark:text-accent-light">{c.year}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
