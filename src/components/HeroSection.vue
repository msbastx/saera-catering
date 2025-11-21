<template>
  <section class="bg-[#FFF1E0]">
    <div
      class="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center"
      @mouseenter="pauseAutoPlay"
      @mouseleave="resumeAutoPlay"
    >
      <!-- Kiri: teks dinamis per slide -->
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-[#C02424] mb-2">
          Saera Catering · Sego Rempah
        </p>

        <p class="text-xs text-slate-500 mb-1">
          {{ currentSlide.badge }}
        </p>

        <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          {{ currentSlide.title }}
        </h1>

        <p class="text-slate-600 mb-6 text-sm md:text-base">
          {{ currentSlide.subtitle }}
        </p>

        <div class="flex flex-wrap gap-3 mb-6">
          <a
            :href="waLink"
            target="_blank"
            class="inline-flex items-center px-6 py-3 rounded-full bg-[#C02424] text-white font-semibold shadow-lg text-sm"
          >
            Pesan via WhatsApp
          </a>
          <RouterLink
            to="/menu"
            class="inline-flex items-center px-6 py-3 rounded-full border border-[#C02424] text-[#C02424] font-semibold text-sm bg-white"
          >
            Lihat Menu
          </RouterLink>
        </div>

        <!-- Dot indicator -->
        <div class="flex items-center gap-2">
          <button
            v-for="(slide, index) in slides"
            :key="slide.id"
            @click="goTo(index)"
            class="h-2.5 rounded-full transition-all"
            :class="
              index === currentIndex
                ? 'w-6 bg-[#C02424]'
                : 'w-2 bg-slate-300'
            "
          />
        </div>
      </div>

      <!-- Kanan: gambar + kontrol carousel -->
      <div class="flex justify-center">
        <div class="relative">
          <img
            :src="currentSlide.image"
            :alt="currentSlide.title"
            class="w-full max-w-md rounded-3xl shadow-2xl object-cover"
          />

          <!-- Logo kecil di pojok -->
          <img
            :src="logo"
            alt="Logo Saera"
            class="w-20 h-20 rounded-full shadow-lg bg-white p-2 absolute -top-6 -left-6 border border-[#C02424]"
          />

          <!-- Badge kecil di bawah -->
          <div
            class="absolute -bottom-4 right-4 bg-white/90 rounded-2xl px-4 py-3 shadow-lg text-xs"
          >
            <p class="font-semibold text-slate-800">
              {{ currentSlide.smallTitle }}
            </p>
            <p class="text-slate-500">
              {{ currentSlide.smallDesc }}
            </p>
          </div>

          <!-- Tombol prev/next -->
          <button
            class="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-sm"
            @click="prev"
          >
            ‹
          </button>
          <button
            class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-sm"
            @click="next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import logo from '../assets/saera-logo.jpg'
import heroImg1 from '../assets/hero-nasi-bundle.jpg'
import heroImg2 from '../assets/hero-nasi-box-1.jpg'
import heroImg3 from '../assets/hero-nasi-box-2.jpg'

const waLink = '#'

// Data slide hero
const slides = [
  {
    id: 1,
    badge: 'Nasi Kotak Harian',
    title: 'Sego Rempah Hangat untuk Setiap Acara',
    subtitle:
      'Dari nasi kotak harian hingga paket hajatan besar, Saera siap mengantarkan masakan rumahan penuh rempah ke meja tamu Anda.',
    image: heroImg1,
    smallTitle: 'Best Seller',
    smallDesc: '500+ box terjual setiap bulan'
  },
  {
    id: 2,
    badge: 'Paket Meeting & Event',
    title: 'Paket Meeting Kantor Tanpa Ribet',
    subtitle:
      'Kombinasi nasi kotak dan snack box yang praktis, pas untuk rapat, seminar, dan pelatihan kantor.',
    image: heroImg2,
    smallTitle: 'Paket Meeting',
    smallDesc: 'Minimal 20 pax, bisa custom menu'
  },
  {
    id: 3,
    badge: 'Prasmanan & Syukuran',
    title: 'Prasmanan Rumahan Rasa Hajatan Besar',
    subtitle:
      'Susunan menu prasmanan dengan cita rasa rumahan, cocok untuk syukuran, arisan, dan acara keluarga.',
    image: heroImg3,
    smallTitle: 'Prasmanan Rumahan',
    smallDesc: 'Free konsultasi menu & budget'
  }
]

const currentIndex = ref(0)
let timer = null

const currentSlide = computed(() => slides[currentIndex.value])

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.length) % slides.length
}

const goTo = (index) => {
  currentIndex.value = index
}

// autoplay
const startAutoPlay = () => {
  timer = setInterval(() => {
    next()
  }, 3000)
}

const stopAutoPlay = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

const pauseAutoPlay = () => {
  stopAutoPlay()
}

const resumeAutoPlay = () => {
  if (!timer) startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onBeforeUnmount(() => {
  stopAutoPlay()
})
</script>
