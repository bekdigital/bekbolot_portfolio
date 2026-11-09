import { useApp } from '../context/AppContext'
import { sections, skills } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'

export default function Skills() {
  const { t } = useApp()
  return (
    <Section id="skills" eyebrow={sections.skills.eyebrow} title={sections.skills.title}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={i} delay={(i % 3) * 80} className="card p-6">
            <h3 className="mb-4 font-semibold text-navy-950 dark:text-white">{t(group.group)}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <li
                  key={j}
                  className="tag rounded-full border border-navy-200 bg-navy-50 px-3 py-1 text-sm text-navy-700 dark:border-navy-700 dark:bg-navy-800/60 dark:text-navy-100"
                >
                  {t(item)}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
