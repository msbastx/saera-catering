<template>
  <article
    class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col"
  >
    <h3 class="font-semibold text-slate-800 text-lg mb-1">
      {{ paket.name }}
    </h3>
    <p class="text-sm text-slate-500 mb-2">
      Mulai dari
      <span class="font-semibold text-[#C02424]">
        Rp {{ paket.priceFrom.toLocaleString('id-ID') }}
      </span>
      /pax · Min. {{ paket.minPax }} pax
    </p>
    <ul class="text-sm text-slate-600 list-disc list-inside mb-4 space-y-1">
      <li v-for="item in paket.includes" :key="item">
        {{ item }}
      </li>
    </ul>
    <button
      class="mt-auto inline-flex px-4 py-2 rounded-full bg-[#C02424] text-white text-xs font-semibold self-start"
    >
      Konsultasi Paket
    </button>
  </article>
</template>

<script setup>
const props = defineProps({
  paket: {
    type: Object,
    required: true
  }
})
</script>
