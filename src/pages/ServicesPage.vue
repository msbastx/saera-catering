<template>
  <div class="bg-[#F7F7F7]">
    <section class="max-w-6xl mx-auto px-4 py-10">
      <header class="mb-6">
        <h1 class="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
          Layanan Saera Catering
        </h1>
        <p class="text-sm text-slate-600">
          Pilih jenis layanan sesuai kebutuhan acara Anda. Klik detail untuk
          melihat informasi lengkap dan rekomendasi penggunaannya.
        </p>
      </header>

      <div class="grid md:grid-cols-2 gap-5">
        <article
          v-for="service in services"
          :key="service.id"
          class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row"
        >
          <img
            :src="service.image"
            :alt="service.name"
            class="w-full md:w-40 h-40 object-cover"
          />
          <div class="p-4 flex-1 flex flex-col">
            <h2 class="font-semibold text-slate-800 text-base mb-1">
              {{ service.name }}
            </h2>
            <p class="text-xs text-slate-500 mb-2">
              Mulai dari
              <span class="font-semibold text-[#C02424]">
                Rp {{ service.priceFrom.toLocaleString('id-ID') }}
              </span>
              /pax
            </p>
            <p class="text-sm text-slate-600 mb-3 line-clamp-2">
              {{ service.shortDesc }}
            </p>
            <RouterLink
              :to="`/services/${service.id}`"
              class="mt-auto inline-flex w-max px-4 py-2 rounded-full border border-[#C02424] text-[#C02424] text-xs font-semibold"
            >
              Lihat Detail Layanan
            </RouterLink>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { services } from '../data/services'
</script>
