import { useApp } from '../context/AppContext'
import Reveal from './Reveal'

/** Standard page section with an eyebrow label and a heading. */
export default function Section({ id, eyebrow, title, intro, children, className = '' }) {
  const { t } = useApp()
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className={`section scroll-mt-20 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal className="mb-10 max-w-3xl sm:mb-12">
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-dark dark:text-accent-light">
              {t(eyebrow)}
            </p>
          )}
          <h2 id={headingId} className="text-3xl font-semibold tracking-tight text-navy-950 dark:text-white sm:text-4xl">
            {t(title)}
          </h2>
          {intro && <p className="mt-4 text-base leading-relaxed sm:text-lg text-navy-600 dark:text-navy-200">{t(intro)}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
