<template>
  <div class="bg-[#F7F7F7]">
    <section class="max-w-4xl mx-auto px-4 py-10" v-if="item">
      <div class="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
        <img
          :src="item.image"
          :alt="item.name"
          class="w-full h-56 md:h-72 object-cover"
        />
        <div class="p-6 md:p-8 space-y-4 text-sm">
          <div class="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-[#C02424]">
                {{ item.category }}
              </p>
              <h1 class="text-2xl font-bold text-slate-900">
                {{ item.name }}
              </h1>
            </div>
            <div class="text-right text-sm">
              <p class="text-slate-500">Mulai dari</p>
              <p class="text-xl font-bold text-[#C02424]">
                Rp {{ item.priceFrom.toLocaleString('id-ID') }}<span class="text-sm font-normal">/pax</span>
              </p>
              <p class="text-xs text-slate-500">
                Min. {{ item.minOrder }} pax
              </p>
            </div>
          </div>

          <p class="text-slate-600">
            {{ item.description }}
          </p>

          <div class="grid md:grid-cols-3 gap-4 text-xs">
            <div class="bg-[#FFF1E0] rounded-2xl p-3">
              <p class="font-semibold text-slate-800 mb-1">
                Level Pedas
              </p>
              <p class="text-slate-600">{{ item.spicyLevel }}</p>
            </div>
            <div class="bg-[#FFF1E0] rounded-2xl p-3">
              <p class="font-semibold text-slate-800 mb-1">
                Cocok Untuk
              </p>
              <p class="text-slate-600">{{ item.recommendedFor }}</p>
            </div>
            <div class="bg-[#FFF1E0] rounded-2xl p-3">
              <p class="font-semibold text-slate-800 mb-1">
                Catatan
              </p>
              <p class="text-slate-600">
                Menu dapat disesuaikan dengan permintaan (vegan, non-pedas,
                dll).
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3 items-center">
            <a
              :href="waLink"
              target="_blank"
              class="inline-flex px-5 py-2.5 rounded-full bg-[#C02424] text-white text-xs font-semibold shadow"
            >
              Pesan Menu Ini via WhatsApp
            </a>
            <RouterLink
              to="/menu"
              class="text-xs text-slate-500 underline"
            >
              ← Kembali ke daftar menu
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section v-else class="max-w-4xl mx-auto px-4 py-10">
      <p class="text-sm text-slate-600">
        Menu tidak ditemukan. <RouterLink to="/menu" class="text-[#C02424]">Kembali ke daftar menu.</RouterLink>
      </p>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { menuItems } from '../data/menuItems'

const route = useRoute()

const item = computed(() =>
  menuItems.find((m) => m.id === route.params.id)
)

const waLink = '#'
</script>
