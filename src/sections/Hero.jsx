import { useApp } from '../context/AppContext'
import { profile, ui } from '../data/content'
import MountainSilhouette from '../components/MountainSilhouette'
import { DownloadIcon, MailIcon, PinIcon } from '../components/Icons'

export default function Hero() {
  const { t } = useApp()
  return (
    <section id="top" aria-labelledby="hero-heading" className="site-chrome relative overflow-hidden bg-navy-950 pt-28 sm:pt-36">
      {/* Background photo with a navy shade so the text stays readable */}
      {profile.heroBackground && (
        <>
          <img
            src={profile.heroBackground}
            alt={t(profile.heroBackgroundAlt)}
            className="no-print absolute inset-0 h-full w-full object-cover object-[75%_30%]"
          />
          <div
            aria-hidden="true"
            className="no-print absolute inset-0 bg-navy-950/80 sm:bg-transparent sm:bg-gradient-to-r sm:from-navy-950 sm:via-navy-950/85 sm:to-navy-950/25"
          />
        </>
      )}

      <div className="relative mx-auto max-w-content px-5 pb-40 sm:px-8 sm:pb-52">
        <div className="hero-fade max-w-2xl">
          {/* Small round portrait */}
          <img
            src={profile.photo}
            alt={t(profile.photoAlt)}
            width="96"
            height="96"
            className="mb-6 h-20 w-20 rounded-full border-2 border-white/80 object-cover shadow-lg sm:h-24 sm:w-24"
          />
          <p className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-100">
            <PinIcon width={16} height={16} className="text-accent-light" />
            {t(profile.location)}
          </p>
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t(profile.name)}
          </h1>
          <p className="mt-4 text-xl font-medium text-accent-light sm:text-2xl">{t(profile.title)}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">{t(profile.summary)}</p>

          <div className="no-print mt-8 flex flex-wrap gap-3">
            <a href={profile.cvFile} download className="btn bg-accent text-navy-950 hover:bg-accent-light">
              <DownloadIcon width={18} height={18} />
              {t(ui.downloadCv)}
            </a>
            <a href="#contact" className="btn border border-white/60 text-white hover:border-white hover:bg-white/10">
              <MailIcon width={18} height={18} />
              {t(ui.contactMe)}
            </a>
          </div>
          {/* Shown only when printing */}
          <p className="print-only mt-4 text-sm">{profile.email}</p>
        </div>
      </div>

      <MountainSilhouette className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full sm:h-48" />
    </section>
  )
}
