// Data dummy menu & paket Saera Catering

const img = (file) =>
  new URL(`../assets/${file}`, import.meta.url).href

export const categories = ['Semua', 'Nasi Kotak', 'Prasmanan', 'Snack Box']

export const menuItems = [
  {
    id: 'sego-rempah-komplit',
    name: 'Sego Rempah Komplit',
    category: 'Nasi Kotak',
    priceFrom: 18000,
    image: img('menu-sego-rempah.jpg'),
    description:
      'Nasi rempah dengan ayam suwir, sambal bawang, tempe kering, telur, dan lalapan.',
    minOrder: 20,
    spicyLevel: 'Sedang',
    recommendedFor: 'Acara kantor, syukuran keluarga'
  },
  {
    id: 'nasi-kotak-premium',
    name: 'Nasi Kotak Premium',
    category: 'Nasi Kotak',
    priceFrom: 25000,
    image: img('menu-nasi-kotak.jpg'),
    description:
      'Pilihan lauk ayam/ikan/daging, sayur, sambal, buah, dan air mineral.',
    minOrder: 25,
    spicyLevel: 'Opsional',
    recommendedFor: 'Rapat resmi, acara kampus'
  },
  {
    id: 'prasmanan-rumahan',
    name: 'Prasmanan Rumahan',
    category: 'Prasmanan',
    priceFrom: 35000,
    image: img('hero-nasi-bundle.jpg'),
    description:
      'Paket prasmanan simple dengan 3 lauk utama, 2 sayur, dan dessert.',
    minOrder: 50,
    spicyLevel: 'Beragam',
    recommendedFor: 'Hajatan, arisan besar'
  },
  {
    id: 'snack-box-manis-gurih',
    name: 'Snack Box Manis Gurih',
    category: 'Snack Box',
    priceFrom: 12000,
    image: img('menu-snack-box.jpg'),
    description:
      '3 jenis kue (manis & gurih) + air mineral dalam kemasan rapi.',
    minOrder: 30,
    spicyLevel: 'Tidak pedas',
    recommendedFor: 'Seminar, pengajian, rapat singkat'
  }
]

export const paketList = [
  {
    id: 'paket-meeting-kantor',
    name: 'Paket Meeting Kantor',
    priceFrom: 23000,
    description:
      'Nasi kotak + snack box, cocok untuk meeting dan pelatihan kantor.',
    minPax: 20,
    includes: ['Nasi kotak menu A/B', 'Snack box manis gurih', 'Air mineral']
  },
  {
    id: 'paket-syukuran-rumah',
    name: 'Paket Syukuran Rumahan',
    priceFrom: 33000,
    description:
      'Prasmanan rumahan dengan menu rumahan khas Jawa Timur.',
    minPax: 40,
    includes: ['3 lauk utama', '2 sayur', 'Kerupuk & sambal', 'Dessert']
  },
  {
    id: 'paket-event-kampus',
    name: 'Paket Event Kampus',
    priceFrom: 27000,
    description:
      'Spesial untuk acara kampus dan komunitas dengan budget pelajar.',
    minPax: 50,
    includes: ['Nasi kotak pilihan', 'Snack box', 'Free ongkir* area tertentu']
  }
]
