import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { about, sections, ui } from '../data/content'
import { ChevronIcon } from '../components/Icons'
import Section from '../components/Section'
import Reveal from '../components/Reveal'

export default function About() {
  const { t } = useApp()
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
    </Section>
  )
}
