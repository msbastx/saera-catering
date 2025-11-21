<template>
  <div class="bg-[#F7F7F7]">
    <section class="max-w-6xl mx-auto px-4 py-10">
      <header class="mb-6">
        <h1 class="text-2xl font-bold text-slate-900 mb-1">
          Menu Saera Catering
        </h1>
        <p class="text-sm text-slate-600">
          Pilih kategori sesuai kebutuhan acara Anda, kemudian klik
          <strong>Lihat Detail</strong> untuk informasi lengkap.
        </p>
      </header>

      <MenuGrid
        :items="filteredItems"
        :categories="categories"
        v-model:category="selectedCategory"
      />
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import MenuGrid from '../components/MenuGrid.vue'
import { menuItems, categories } from '../data/menuItems'

const selectedCategory = ref('Semua')

const filteredItems = computed(() => {
  if (selectedCategory.value === 'Semua') return menuItems
  return menuItems.filter(
    (item) => item.category === selectedCategory.value
  )
})
</script>
