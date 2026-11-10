import { useApp } from '../context/AppContext'
import { experience, stats, ui } from '../data/content'
import StatVisual from './StatVisual'
import Reveal from './Reveal'

/** Start/end of a job as dates. "MM/YYYY" means the 1st of that month; no end means today. */
function jobRange(job) {
  const fromMonth = (v) => {
    const [m, y] = v.split('/').map(Number)
    return new Date(y, m - 1, 1)
  }
  const start = job.exactStart ? new Date(job.exactStart) : fromMonth(job.start)
  const end = job.exactEnd ? new Date(job.exactEnd) : job.end ? fromMonth(job.end) : new Date()
  return [start, end]
}

/** Total time of all jobs tagged `tag`, as { years, months }. */
function totalTime(tag) {
  const days = experience
    .filter((job) => job.tags?.includes(tag))
    .reduce((sum, job) => {
      const [start, end] = jobRange(job)
      return sum + (end - start) / 86400000
    }, 0)
  const totalMonths = Math.round(days / 30.44)
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 }
}

/** "4 yrs 10 mos" / "4 г. 10 мес." */
function formatTime({ years, months }, lang) {
  const parts = []
  if (lang === 'ru') {
    if (years) parts.push(`${years} г.`)
    if (months) parts.push(`${months} мес.`)
  } else {
    if (years) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`)
    if (months) parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`)
  }
  return parts.join(' ')
}

/** "My career in numbers": key-number cards with pictures. */
export default function CareerNumbers() {
  const { t, lang } = useApp()
  return (
    <div>
        {/* Key numbers */}
        <h3 className="flex items-center gap-3 text-xl font-semibold text-navy-950 dark:text-white">
          <span aria-hidden="true" className="h-6 w-1 rounded-full bg-accent" />
          {t(ui.inNumbers)}
        </h3>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {stats.map((s, i) => {
            const isUN = s.visual === 'un'
            return (
              <Reveal
                as="li"
                key={i}
                delay={(i % 3) * 80}
                className={`card overflow-hidden ${s.wide ? 'col-span-2 lg:col-span-1' : ''} ${
                  isUN ? 'border-transparent !bg-[#009EDB] dark:!bg-[#0077B6]' : ''
                } ${s.portrait ? 'flex' : ''}`}
              >
                {/* Optional personal photo on the left, full card height */}
                {s.portrait && (
                  <img
                    src={s.portrait}
                    alt={t(s.portraitAlt)}
                    width="480"
                    height="640"
                    loading="lazy"
                    className="w-32 shrink-0 object-cover object-top sm:w-36"
                  />
                )}
                <div className="min-w-0 flex-1">
                <StatVisual visual={s.visual} image={s.image} imageAlt={t(s.label)} />
                <div className="p-4 sm:p-5">
                  <p
                    className={`text-xl font-bold tracking-tight sm:text-3xl ${
                      isUN ? 'text-white' : 'text-accent-dark dark:text-accent-light'
                    }`}
                  >
                    {s.sumOf ? formatTime(totalTime(s.sumOf), lang) : t(s.value)}
                  </p>
                  <p className={`mt-2 text-sm leading-snug ${isUN ? 'text-white/90' : 'text-navy-600 dark:text-navy-200'}`}>
                    {t(s.label)}
                  </p>
                  {s.list && (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {s.list.map((item, j) => (
                        <li
                          key={j}
                          className="rounded-full border border-navy-200 bg-navy-50 px-2.5 py-0.5 text-xs text-navy-700 dark:border-navy-700 dark:bg-navy-800/60 dark:text-navy-100"
                        >
                          {t(item)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                </div>
              </Reveal>
            )
          })}
        </ul>
    </div>
  )
}
