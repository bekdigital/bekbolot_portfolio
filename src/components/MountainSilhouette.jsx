/**
 * A faint, layered silhouette of the Tian Shan / Ala-Too range.
 * Purely decorative, so it is hidden from screen readers.
 */
export default function MountainSilhouette({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* far range */}
      <path
        className="fill-navy-200/50 dark:fill-navy-800/60"
        d="M0 210 L90 160 L150 185 L240 110 L300 150 L370 95 L430 140 L520 70 L600 135 L680 100 L760 150 L850 80 L930 130 L1010 60 L1090 125 L1170 95 L1250 140 L1330 105 L1440 150 L1440 320 L0 320 Z"
      />
      {/* snow caps on the far range */}
      <path
        className="fill-white/70 dark:fill-navy-600/40"
        d="M505 82 L520 70 L540 90 L528 88 L518 96 Z M995 72 L1010 60 L1030 80 L1017 78 L1006 86 Z M838 92 L850 80 L866 96 L855 95 Z"
      />
      {/* near range */}
      <path
        className="fill-navy-50 dark:fill-navy-900"
        d="M0 260 L110 215 L200 245 L320 190 L420 235 L540 175 L650 230 L760 200 L880 250 L990 195 L1100 240 L1220 205 L1340 245 L1440 220 L1440 320 L0 320 Z"
      />
    </svg>
  )
}
