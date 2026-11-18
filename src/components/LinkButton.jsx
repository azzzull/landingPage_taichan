import { ChevronRight } from 'lucide-react'

const isExternalUrl = (url) => {
  if (!url || /x{4,}/i.test(url)) return false

  try {
    const { protocol } = new URL(url)
    return protocol === 'https:' || protocol === 'http:'
  } catch {
    return false
  }
}

export default function LinkButton({ label, url, icon: Icon, logo, variant = '' }) {
  const isAvailable = isExternalUrl(url)
  const className = `link-button${variant ? ` link-button--${variant}` : ''}`

  const content = (
    <>
      <span className="link-button__icon" aria-hidden="true">
        {logo ? (
          <span className={`brand-mark ${logo.className}`}>
            <img src={logo.src} alt="" />
          </span>
        ) : (
          <Icon size={21} strokeWidth={2.2} />
        )}
      </span>
      <span className="link-button__label">{label}</span>
      <span className="link-button__end" aria-hidden="true">
        <ChevronRight size={22} strokeWidth={2.4} />
      </span>
    </>
  )

  if (!isAvailable) {
    return (
      <button
        className={className}
        type="button"
        disabled
        aria-label={`${label} — belum tersedia`}
      >
        {content}
      </button>
    )
  }

  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (membuka tab baru)`}
    >
      {content}
    </a>
  )
}
