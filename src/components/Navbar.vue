<template>
  <header class="bg-white shadow sticky top-0 z-50">
    <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-3">
        <img
          :src="logo"
          alt="Saera Catering"
          class="w-10 h-10 rounded-full border border-[#C02424]"
        />
        <div class="leading-tight">
          <p class="font-extrabold text-xl text-[#C02424]">Saera Catering</p>
          <p class="text-xs text-slate-500 uppercase tracking-[0.2em]">
            Sego Rempah
          </p>
        </div>
      </RouterLink>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="hover:text-[#C02424]"
            active-class="text-[#C02424]"
          >
            {{ link.label }}
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="px-4 py-2 rounded-full bg-[#C02424] text-white text-xs shadow"
          >
            Pesan Sekarang
          </RouterLink>
        </li>
      </ul>

      <!-- Mobile button -->
      <button
        class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300"
        @click="isOpen = !isOpen"
      >
        <span class="sr-only">Toggle menu</span>
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div
      v-if="isOpen"
      class="md:hidden border-t border-slate-200 bg-white"
    >
      <ul class="max-w-6xl mx-auto px-4 py-3 space-y-2 text-sm">
        <li
          v-for="link in links"
          :key="link.to"
          @click="isOpen = false"
        >
          <RouterLink
            :to="link.to"
            class="block py-1"
            active-class="text-[#C02424]"
          >
            {{ link.label }}
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="inline-flex px-4 py-2 rounded-full bg-[#C02424] text-white text-xs shadow mt-1"
            @click="isOpen = false"
          >
            Pesan Sekarang
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logoUrl from '../assets/saera-logo.jpg'

const isOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact Us' }
]

const logo = logoUrl
</script>
