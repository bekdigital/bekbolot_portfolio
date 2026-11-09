import { useApp } from '../context/AppContext'
import { about, sections, stats } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'

export default function About() {
  const { t } = useApp()
  return (
    <Section id="about" eyebrow={sections.about.eyebrow} title={sections.about.title} className="section-alt">
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <Reveal className="space-y-5 text-lg leading-relaxed text-navy-700 dark:text-navy-100">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{t(p)}</p>
          ))}
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
      <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal as="li" key={i} delay={i * 80} className="card p-5 sm:p-6">
            <p className="text-2xl font-bold tracking-tight text-accent-dark dark:text-accent-light sm:text-3xl">{t(s.value)}</p>
            <p className="mt-2 text-sm leading-snug text-navy-600 dark:text-navy-200">{t(s.label)}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
