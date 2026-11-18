import { useEffect, useState } from 'react'
import { ArrowLeft, Minus, Plus, X } from 'lucide-react'

export default function GalleryView({ gallery }) {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [zoom, setZoom] = useState(1)
  const selectedImage = selectedIndex === null ? null : gallery.images[selectedIndex]
  const previewWidth = 92 * zoom

  useEffect(() => {
    if (!selectedImage) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null)
    }

    document.body.classList.add('modal-open')
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedImage])

  const openPreview = (index) => {
    setZoom(1)
    setSelectedIndex(index)
  }

  return (
    <main className="gallery-page">
      <a className="gallery-back" href="/" aria-label="Kembali ke semua link">
        <ArrowLeft size={19} strokeWidth={2.4} aria-hidden="true" />
        Kembali ke link
      </a>

      <h1>{gallery.title}</h1>
      <div className="gallery-images">
        {gallery.images.map((imageUrl, index) => (
          <button
            key={imageUrl}
            className="gallery-image-trigger"
            type="button"
            onClick={() => openPreview(index)}
            aria-label={`Preview ${gallery.title} — gambar ${index + 1}`}
          >
            <img
              src={imageUrl}
              alt={`${gallery.title} — gambar ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${gallery.title}`}
        >
          <div className="image-modal__toolbar">
            <span>{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              onClick={() => setZoom((value) => Math.max(1, value - 0.2))}
              disabled={zoom <= 1}
              aria-label="Perkecil gambar"
            >
              <Minus size={19} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setZoom((value) => Math.min(1.75, value + 0.2))}
              disabled={zoom >= 1.75}
              aria-label="Perbesar gambar"
            >
              <Plus size={19} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Tutup preview"
            >
              <X size={21} aria-hidden="true" />
            </button>
          </div>

          <div className="image-modal__stage" onClick={() => setSelectedIndex(null)}>
            <div
              className="image-modal__frame"
              style={{
                width: `${previewWidth}%`,
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedImage} alt={`Preview ${gallery.title}`} />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
