import { useApp } from '../context/AppContext'
import { sections, training } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'

export default function Training() {
  const { t } = useApp()
  return (
    <Section id="training" eyebrow={sections.training.eyebrow} title={sections.training.title}>
      <Reveal>
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {training.map((c, i) => (
            <li key={i} className="flex items-baseline justify-between gap-4 border-b border-navy-100 py-4 dark:border-navy-800">
              <div>
                <p className="font-medium text-navy-950 dark:text-white">{t(c.name)}</p>
                {t(c.provider) && <p className="text-sm text-navy-500 dark:text-navy-300">{t(c.provider)}</p>}
              </div>
              <p className="shrink-0 text-sm font-medium tabular-nums text-accent-dark dark:text-accent-light">{c.year}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
