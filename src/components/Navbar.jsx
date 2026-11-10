import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import { profile, ui } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'

const NAV_IDS = ['about', 'experience', 'education', 'languages', 'skills', 'contact']

function LanguageSwitcher() {
  const { lang, setLang, t } = useApp()
  return (
    <div role="group" aria-label={t(ui.languageLabel)} className="flex rounded-full border border-navy-600 p-0.5 text-xs font-semibold">
      {['en', 'ru'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          lang={code}
          aria-label={code === 'en' ? 'English' : 'Русский'}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === code
              ? 'bg-accent text-navy-950'
              : 'text-navy-200 hover:text-white'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme, t } = useApp()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t(isDark ? ui.switchToLight : ui.switchToDark)}
      title={t(isDark ? ui.switchToLight : ui.switchToDark)}
      className="rounded-full p-2 text-navy-200 transition-colors hover:bg-navy-800 hover:text-white"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default function Navbar() {
  const { t } = useApp()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(['top', ...NAV_IDS])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = (id) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      active === id
        ? 'text-accent-light'
        : 'text-navy-200 hover:text-white'
    }`

  return (
    <header
      className={`site-chrome no-print fixed inset-x-0 top-0 z-50 border-b border-navy-800 bg-navy-900 transition-shadow duration-300 dark:border-navy-800/60 dark:bg-navy-975 ${
        scrolled || open ? 'shadow-lg shadow-navy-950/20' : ''
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight text-white">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-md bg-accent text-sm text-navy-950">
            BT
          </span>
          <span className="hidden sm:inline">{t(profile.name)}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center lg:flex">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)} aria-current={active === id ? 'true' : undefined}>
                {t(ui.nav[id])}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full p-2 text-navy-100 hover:bg-navy-800 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t(open ? ui.closeMenu : ui.openMenu)}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul id="mobile-menu" className="border-t border-navy-800 px-5 pb-4 pt-2 lg:hidden">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className={`block ${linkClass(id)} py-3 text-base`}>
                {t(ui.nav[id])}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
