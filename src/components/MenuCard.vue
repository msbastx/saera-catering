<template>
  <article
    class="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
  >
    <img
      :src="item.image"
      :alt="item.name"
      class="h-40 w-full object-cover"
    />
    <div class="p-4 flex-1 flex flex-col">
      <p class="text-xs uppercase tracking-[0.2em] text-[#C02424] mb-1">
        {{ item.category }}
      </p>
      <h3 class="font-semibold text-slate-800 text-base mb-1">
        {{ item.name }}
      </h3>
      <p class="text-sm text-slate-500 mb-2">
        Mulai dari
        <span class="font-semibold text-[#C02424]">
          Rp {{ item.priceFrom.toLocaleString('id-ID') }}
        </span>
        /pax
      </p>
      <p class="text-xs text-slate-500 line-clamp-2 mb-4">
        {{ item.description }}
      </p>

      <div class="mt-auto flex items-center justify-between text-xs">
        <RouterLink
          :to="`/menu/${item.id}`"
          class="px-3 py-2 rounded-full border border-[#C02424] text-[#C02424] font-semibold"
        >
          Lihat Detail
        </RouterLink>
        <span class="text-slate-400">
          Min. {{ item.minOrder }} pax
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
