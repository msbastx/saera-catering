// src/data/services.js

const img = (file) =>
  new URL(`../assets/${file}`, import.meta.url).href

export const services = [
  {
    id: 'nasi-box',
    name: 'Nasi Box Harian',
    shortDesc: 'Cocok untuk rapat, pengajian, dan acara kantor skala kecil.',
    image: img('hero-nasi-bundle.jpg'), // atau gambar lain
    priceFrom: 18000,
    highlight: ['Min. 20 pax', 'Bisa pilih lauk', 'Free sambal & kerupuk'],
    useCases: 'Meeting kantor, pengajian, syukuran kecil, kegiatan sekolah.'
  },
  {
    id: 'prasmanan',
    name: 'Paket Prasmanan',
    shortDesc: 'Setup buffet lengkap untuk acara keluarga dan hajatan.',
    image: img('hero-nasi-bundle.jpg'),
    priceFrom: 35000,
    highlight: ['3 lauk utama', '2 sayur', 'Dessert sederhana'],
    useCases: 'Pernikahan sederhana, aqiqah, arisan besar, syukuran.'
  },
  {
    id: 'meeting-package',
    name: 'Paket Meeting & Seminar',
    shortDesc: 'Kombinasi nasi box dan snack box untuk agenda seharian.',
    image: img('hero-nasi-box-1.jpg'),
    priceFrom: 27000,
    highlight: ['Nasi box + snack box', 'Disesuaikan jadwal sesi'],
    useCases: 'Pelatihan, seminar, workshop, kegiatan kampus.'
  },
  {
    id: 'snack-box',
    name: 'Snack Box',
    shortDesc: 'Isi 3–4 kue manis/gurih, cocok untuk acara singkat.',
    image: img('hero-nasi-box-2.jpg'),
    priceFrom: 12000,
    highlight: ['3–4 macam snack', 'Min. 30 box'],
    useCases: 'Rapat singkat, open house, pengajian, kegiatan komunitas.'
  }
]
