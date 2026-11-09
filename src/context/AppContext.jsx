import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext(null)

/** Reads a saved value from localStorage (safe if storage is blocked). */
function readSaved(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* ignore */
  }
}

/**
 * Holds the current language ('en' | 'ru') and colour theme ('light' | 'dark').
 * The theme is also set before React loads (see the script in index.html)
 * so the page never flashes the wrong colours.
 */
export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => readSaved('lang', 'en'))
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.lang = lang
    save('lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    save('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  /**
   * t() picks the right language from a { en, ru } object.
   * Plain strings are returned as they are.
   */
  const t = (value) => {
    if (value == null) return ''
    if (typeof value === 'string') return value
    return value[lang] ?? value.en ?? ''
  }

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
