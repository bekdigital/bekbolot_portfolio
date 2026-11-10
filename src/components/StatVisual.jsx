// Pictures shown at the top of the "My career in numbers" cards.
// Each card in content.js chooses one with `visual: '...'`.
// A card can also use its own photo with `image: '/numbers/army.jpg'`.
import { FlagEU, FlagFrance, FlagGermany, FlagKyrgyzstan, FlagTurkiye } from './Flags'

const band = 'relative flex h-24 items-center justify-center overflow-hidden'

/** Blue peacekeeper helmet (drawing). */
function BlueHelmet({ className }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
      <path d="M14 58 Q14 14 60 14 Q106 14 106 58 Z" fill="#4B92DB" />
      <path d="M30 26 Q60 10 92 26" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="4" strokeLinecap="round" />
      <rect x="6" y="56" width="108" height="10" rx="5" fill="#1F66B0" />
      <text x="60" y="47" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff" fontFamily="Inter, sans-serif">
        UN
      </text>
    </svg>
  )
}

/** Simple building with columns (embassy). */
function Embassy({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
      <path d="M6 24 L32 8 L58 24 Z" />
      <path d="M12 28 V50 M22 28 V50 M32 28 V50 M42 28 V50 M52 28 V50" />
      <path d="M4 56 H60" strokeWidth="4" />
    </svg>
  )
}

/** Faint globe lines used on the UN card. */
function GlobeLines({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="50" cy="50" r="46" />
      <ellipse cx="50" cy="50" rx="20" ry="46" />
      <ellipse cx="50" cy="50" rx="36" ry="46" />
      <path d="M4 50 H96 M10 28 H90 M10 72 H90" />
    </svg>
  )
}

const GREETINGS = [
  { text: 'Hello', lang: 'en' },
  { text: 'Привет', lang: 'ru' },
  { text: 'Merhaba', lang: 'tr' },
  { text: 'Салам', lang: 'ky' },
  { text: 'Hallo', lang: 'de' },
  { text: 'Bonjour', lang: 'fr' },
]

export default function StatVisual({ visual, image, imageAlt = '' }) {
  if (image) {
    return (
      <div className={band}>
        <img src={image} alt={imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      </div>
    )
  }

  switch (visual) {
    case 'army':
      return (
        <div className={`${band} gap-2 bg-gradient-to-br from-[#3d4a2c] to-[#5b6b3a] sm:gap-4`}>
          <FlagKyrgyzstan className="h-9 w-auto sm:h-10" title="Flag of Kyrgyzstan" />
          {/* Flag of the Armed Forces: "Долг · Честь · Отечество" (Duty · Honour · Fatherland) */}
          <img
            src="/numbers/armed-forces-flag.png"
            alt="Flag of the Armed Forces of the Kyrgyz Republic"
            width="349"
            height="216"
            className="h-9 w-auto rounded-sm shadow-sm ring-1 ring-black/10 sm:h-10"
          />
        </div>
      )
    case 'un':
      return (
        <div className={`${band} text-white`}>
          <GlobeLines className="absolute -right-6 -top-8 h-40 w-40 text-white/20" />
          <span className="relative whitespace-nowrap rounded-md border border-white/40 px-1.5 py-1 text-[10px] font-semibold sm:px-3 sm:text-sm sm:tracking-wider">
            UNSMIS · UNAMID · UNDP
          </span>
        </div>
      )
    case 'diplomatic':
      return (
        <div className={`${band} gap-2 bg-navy-100 px-2 sm:gap-4 text-navy-600 dark:bg-navy-800 dark:text-navy-200`}>
          <FlagEU className="h-8 w-auto sm:h-11" title="Flag of the European Union" />
          <Embassy className="h-8 w-8 shrink-0 sm:h-11 sm:w-11" />
          <span className="whitespace-nowrap rounded-md bg-white px-1.5 py-1 text-[10px] font-semibold sm:px-2 sm:text-xs text-navy-700 shadow-sm dark:bg-navy-900 dark:text-navy-100">
            World Bank
          </span>
        </div>
      )
    case 'peacekeeping':
      return (
        <div className={`${band} bg-gradient-to-br from-sky-100 to-sky-200 dark:from-navy-800 dark:to-navy-700`}>
          <BlueHelmet className="h-16 w-auto drop-shadow" />
        </div>
      )
    case 'languages':
      return (
        <div className={`${band} flex-wrap content-center gap-1.5 bg-navy-100 px-4 dark:bg-navy-800`} aria-hidden="true">
          {GREETINGS.map((g, i) => (
            <span
              key={g.lang}
              lang={g.lang}
              className={`rounded-2xl px-2.5 py-1 text-xs font-semibold shadow-sm ${
                i % 2 === 0
                  ? 'rounded-bl-sm bg-white text-navy-700 dark:bg-navy-900 dark:text-navy-100'
                  : 'rounded-br-sm bg-accent text-white dark:text-navy-950'
              }`}
            >
              {g.text}
            </span>
          ))}
        </div>
      )
    case 'flags':
      return (
        <div className={`${band} gap-1.5 bg-navy-100 px-2 dark:bg-navy-800 sm:gap-3`}>
          <FlagKyrgyzstan className="h-8 w-auto sm:h-9" />
          <FlagTurkiye className="h-8 w-auto sm:h-9" />
          <FlagGermany className="h-8 w-auto sm:h-9" />
          <FlagFrance className="h-8 w-auto sm:h-9" />
        </div>
      )
    default:
      return null
  }
}
