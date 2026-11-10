import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { SKILLS_VISIBLE, sections, skills, ui } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { ChevronIcon } from '../components/Icons'

const tagClass =
  'tag rounded-lg border border-navy-200 bg-navy-50 px-3 py-1 text-sm text-navy-700 dark:border-navy-700 dark:bg-navy-800/60 dark:text-navy-100'

/** One skills group: title, the first few skills and a "Show all" button for the rest. */
function SkillGroup({ group, index }) {
  const { t } = useApp()
  const [open, setOpen] = useState(false)
  const visible = group.items.slice(0, SKILLS_VISIBLE)
  const more = group.items.slice(SKILLS_VISIBLE)
  const moreId = `skills-more-${index}`

  return (
    <Reveal delay={(index % 3) * 80} className="card flex flex-col p-5 sm:p-6">
      <h3 className="mb-4 font-semibold text-navy-950 dark:text-white">{t(group.group)}</h3>
      <ul className="flex flex-wrap gap-2">
        {visible.map((item, j) => (
          <li key={j} className={tagClass}>
            {t(item)}
          </li>
        ))}
      </ul>
      {more.length > 0 && (
        <>
          <ul id={moreId} hidden={!open} className="expand-panel mt-2 flex flex-wrap gap-2">
            {more.map((item, j) => (
              <li key={j} className={tagClass}>
                {t(item)}
              </li>
            ))}
          </ul>
          <div className="no-print mt-auto pt-3">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={moreId}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-accent-dark hover:bg-accent/10 dark:text-accent-light"
            >
              {open ? t(ui.showFewerCourses) : `${t(ui.showAllCourses)} (${group.items.length})`}
              <span className="sr-only">: {t(group.group)}</span>
              <ChevronIcon width={16} height={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </>
      )}
    </Reveal>
  )
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow={sections.skills.eyebrow} title={sections.skills.title} className="section-alt">
      <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <SkillGroup key={i} group={group} index={i} />
        ))}
      </div>
    </Section>
  )
}
