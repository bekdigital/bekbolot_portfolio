import { useApp } from '../context/AppContext'
import { profile, ui } from '../data/content'
import { ArrowUpIcon, LinkedInIcon, MailIcon, TelegramIcon } from './Icons'

export default function Footer() {
  const { t } = useApp()
  return (
    <footer className="site-chrome border-t-4 border-accent bg-navy-900 text-navy-200 dark:bg-navy-975">
      <div className="mx-auto max-w-content px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">{t(profile.name)}</p>
            <p className="mt-1 text-sm">{t(profile.title)}</p>
            <p className="text-sm">{t(profile.location)}</p>
          </div>
          <ul className="no-print flex items-center gap-3">
            <li>
              <a
                href={`mailto:${profile.email}`}
                aria-label={profile.email}
                className="grid h-10 w-10 place-items-center rounded-full border border-navy-600 transition-colors hover:border-accent hover:text-white"
              >
                <MailIcon width={18} height={18} />
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-navy-600 transition-colors hover:border-accent hover:text-white"
              >
                <LinkedInIcon width={18} height={18} />
              </a>
            </li>
            {profile.telegram && (
              <li>
                <a
                  href={`https://t.me/${profile.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="grid h-10 w-10 place-items-center rounded-full border border-navy-600 transition-colors hover:border-accent hover:text-white"
                >
                  <TelegramIcon width={18} height={18} />
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-navy-700/70 pt-6 text-sm sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t(profile.name)}. {t(ui.rights)}
          </p>
          <a href="#top" className="no-print inline-flex items-center gap-1.5 hover:text-white">
            <ArrowUpIcon width={16} height={16} />
            {t(ui.backToTop)}
          </a>
        </div>
      </div>
    </footer>
  )
}
