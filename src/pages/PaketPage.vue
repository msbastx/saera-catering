<template>
  <div class="bg-[#F7F7F7]">
    <section class="max-w-6xl mx-auto px-4 py-10">
      <header class="mb-6">
        <h1 class="text-2xl font-bold text-slate-900 mb-1">
          Paket & Event
        </h1>
        <p class="text-sm text-slate-600">
          Paket hemat untuk meeting, event kampus, hingga syukuran keluarga.
        </p>
      </header>

      <div class="grid md:grid-cols-3 gap-5">
        <PaketCard
          v-for="paket in paketList"
          :key="paket.id"
          :paket="paket"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import PaketCard from '../components/PaketCard.vue'
import { paketList } from '../data/menuItems'
</script>
