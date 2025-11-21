<template>
  <div>
    <HeroSection />
    <HighlightSection />

    <section class="bg-[#F7F7F7]">
      <div class="max-w-6xl mx-auto px-4 py-10">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-slate-800">
            Menu Andalan Saera
          </h2>
          <RouterLink
            to="/menu"
            class="text-xs text-[#C02424] font-semibold"
          >
            Lihat semua menu →
          </RouterLink>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <MenuCard
            v-for="item in featured"
            :key="item.id"
            :item="item"
          />
        </div>
      </div>
    </section>

    <TestimonialSection />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import HighlightSection from '../components/HighlightSection.vue'
import MenuCard from '../components/MenuCard.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import { menuItems } from '../data/menuItems.js'

const featured = menuItems.slice(0, 3)
</script>
