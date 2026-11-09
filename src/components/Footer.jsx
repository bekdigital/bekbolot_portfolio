import { useApp } from '../context/AppContext'
import { profile, ui } from '../data/content'
import { ArrowUpIcon } from './Icons'

export default function Footer() {
  const { t } = useApp()
  return (
    <footer className="border-t border-navy-100 py-8 dark:border-navy-800">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-5 text-sm text-navy-600 dark:text-navy-300 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {t(profile.name)}. {t(ui.rights)}
        </p>
        <a href="#top" className="no-print inline-flex items-center gap-1.5 hover:text-accent-dark dark:hover:text-accent-light">
          <ArrowUpIcon width={16} height={16} />
          {t(ui.backToTop)}
        </a>
      </div>
    </footer>
  )
}
