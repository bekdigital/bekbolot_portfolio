import { useApp } from '../context/AppContext'
import { projects, sections, ui } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { ExternalIcon } from '../components/Icons'

export default function Projects() {
  const { t } = useApp()
  return (
    <Section id="projects" eyebrow={sections.projects.eyebrow} title={sections.projects.title}>
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal as="li" key={i} delay={(i % 2) * 80} className="card flex flex-col overflow-hidden">
            {p.image ? (
              <img src={p.image} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
            ) : (
              <div
                aria-hidden="true"
                className="no-print grid h-28 w-full place-items-center bg-gradient-to-br from-navy-100 to-navy-200 text-4xl font-bold text-navy-400 dark:from-navy-800 dark:to-navy-900 dark:text-navy-600"
              >
                {t(p.title).charAt(0)}
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm font-medium text-accent-dark dark:text-accent-light">{t(p.type)}</p>
              <h3 className="mt-1 text-lg font-semibold text-navy-950 dark:text-white">{t(p.title)}</h3>
              <p className="mt-2 flex-1 text-navy-600 dark:text-navy-200">{t(p.description)}</p>
              <div className="mt-5">
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-accent-dark hover:underline dark:text-accent-light"
                  >
                    {t(ui.visit)} <span className="sr-only">{t(p.title)}</span>
                    <ExternalIcon width={16} height={16} />
                  </a>
                ) : (
                  <span className="text-sm italic text-navy-500 dark:text-navy-300">{t(ui.comingSoon)}</span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
