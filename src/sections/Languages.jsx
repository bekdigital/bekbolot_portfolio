import { useApp } from '../context/AppContext'
import { communication, languages, sections, ui } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { useInView } from '../hooks/useInView'

function ColumnHeading({ children }) {
  return (
    <h3 className="mb-5 flex items-center gap-3 text-xl font-semibold text-navy-950 dark:text-white">
      <span aria-hidden="true" className="h-6 w-1 rounded-full bg-accent" />
      {children}
    </h3>
  )
}

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
  const { t } = useApp()
  return (
    <Section id="languages" eyebrow={sections.languages.eyebrow} title={sections.languages.title}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
        {/* Left: languages */}
        <Reveal>
          <ColumnHeading>{t(ui.languagesHeading)}</ColumnHeading>
          <ul className="card space-y-6 p-5 sm:p-6">
            {languages.map((l, i) => (
              <LanguageBar key={i} language={l} />
            ))}
          </ul>
        </Reveal>

        {/* Right: communication tools & skills */}
        <Reveal delay={100}>
          <ColumnHeading>{t(ui.commToolsHeading)}</ColumnHeading>
          <div className="space-y-4">
            {communication.map((group, i) => (
              <div key={i} className="card p-5 sm:p-6">
                <h4 className="mb-3 font-semibold text-navy-950 dark:text-white">{t(group.title)}</h4>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <li
                      key={j}
                      className="tag rounded-lg border border-navy-200 bg-navy-50 px-3 py-1 text-sm text-navy-700 dark:border-navy-700 dark:bg-navy-800/60 dark:text-navy-100"
                    >
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
