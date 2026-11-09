import { useApp } from '../context/AppContext'
import { profile, ui } from '../data/content'
import MountainSilhouette from '../components/MountainSilhouette'
import { DownloadIcon, MailIcon, PinIcon } from '../components/Icons'

export default function Hero() {
  const { t } = useApp()
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* soft accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl dark:bg-accent/15"
      />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-5 pb-40 sm:px-8 sm:pb-52 md:grid-cols-[1fr_auto]">
        <div className="hero-fade max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 dark:text-navy-200">
            <PinIcon width={16} height={16} className="text-accent-dark dark:text-accent-light" />
            {t(profile.location)}
          </p>
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-navy-950 dark:text-white sm:text-5xl lg:text-6xl">
            {t(profile.name)}
          </h1>
          <p className="mt-4 text-xl font-medium text-accent-dark dark:text-accent-light sm:text-2xl">{t(profile.title)}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600 dark:text-navy-200">{t(profile.summary)}</p>

          <div className="no-print mt-8 flex flex-wrap gap-3">
            <a href={profile.cvFile} download className="btn btn-primary">
              <DownloadIcon width={18} height={18} />
              {t(ui.downloadCv)}
            </a>
            <a href="#contact" className="btn btn-secondary">
              <MailIcon width={18} height={18} />
              {t(ui.contactMe)}
            </a>
          </div>
          {/* Shown only when printing */}
          <p className="print-only mt-4 text-sm">{profile.email}</p>
        </div>

        <div className="hero-fade order-first md:order-none" style={{ animationDelay: "150ms" }}>
          <div className="relative h-36 w-36 sm:h-52 sm:w-52 lg:h-64 lg:w-64">
            <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-full border-2 border-accent/40" />
            <img
              src={profile.photo}
              alt={t(profile.photoAlt)}
              width="256"
              height="256"
              className="relative h-full w-full rounded-full border-4 border-white object-cover shadow-xl dark:border-navy-800"
            />
          </div>
        </div>
      </div>

      <MountainSilhouette className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full sm:h-48" />
    </section>
  )
}
