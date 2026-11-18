import menuImage from '../assets/menu.jpg'
import packageMenuImage from '../assets/menupaket.jpg'

// Tambahkan foto promo baru ke src/assets/promo/ dengan urutan nama, misalnya
// 01-promo-ramadan.jpg, 02-promo-weekend.jpg. Semua file akan muncul otomatis
// setelah project dibuild dan dideploy ulang.
const promoModules = import.meta.glob(
  '../assets/promo/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default', query: '?url' },
)

const promoImages = Object.entries(promoModules)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([, imageUrl]) => imageUrl)

export const galleries = {
  menu: {
    title: 'Menu Kami',
    images: [menuImage, packageMenuImage],
  },
  promo: {
    title: 'Promo Kami',
    images: promoImages,
  },
}

export const getGalleryUrl = (galleryId) =>
  galleries[galleryId]?.images.length ? `/?gallery=${galleryId}` : ''

export const getGalleryFromSearch = (search) => {
  const galleryId = new URLSearchParams(search).get('gallery')
  const gallery = galleries[galleryId]

  return gallery?.images.length ? gallery : null
}
