import { useApp } from '../context/AppContext'
import { languages, sections } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { useInView } from '../hooks/useInView'

function LanguageBar({ language }) {
  const { t } = useApp()
  const [ref, isVisible] = useInView()
  return (
    <li ref={ref}>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-medium text-navy-950 dark:text-white">{t(language.name)}</span>
        <span className="text-sm font-semibold text-accent-dark dark:text-accent-light">{t(language.label)}</span>
      </div>
      <div
        role="meter"
        aria-label={t(language.name)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={language.level}
        aria-valuetext={t(language.label)}
        className="lang-track h-2 overflow-hidden rounded-full bg-navy-200/70 dark:bg-navy-700/60"
      >
        <div
          className="lang-bar h-full rounded-full bg-accent-dark transition-[width] duration-1000 ease-out dark:bg-accent"
          style={{ width: isVisible ? `${language.level}%` : '0%', '--level': `${language.level}%` }}
        />
      </div>
    </li>
  )
}

export default function Languages() {
  return (
    <Section id="languages" eyebrow={sections.languages.eyebrow} title={sections.languages.title} className="section-alt">
      <Reveal>
        <ul className="grid gap-x-12 gap-y-7 sm:grid-cols-2">
          {languages.map((l, i) => (
            <LanguageBar key={i} language={l} />
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
