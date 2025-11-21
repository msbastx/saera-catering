<template>
  <section class="bg-[#FFF1E0]">
    <div
      class="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center"
    >
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-[#C02424] mb-2">
          Saera Catering · Sego Rempah
        </p>
        <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Sego Rempah Hangat untuk Setiap Acara
        </h1>
        <p class="text-slate-600 mb-6">
          Dari nasi kotak harian hingga paket hajatan besar, Saera siap
          mengantarkan masakan rumahan penuh rempah ke meja tamu Anda.
        </p>
        <div class="flex flex-wrap gap-3">
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
      </div>

      <div class="flex justify-center">
        <div class="relative">
          <img
            :src="heroImg"
            alt="Nasi rempah Saera"
            class="w-full max-w-md rounded-3xl shadow-2xl object-cover"
          />
          <img
            :src="logo"
            alt="Logo Saera"
            class="w-20 h-20 rounded-full shadow-lg bg-white p-2 absolute -top-6 -left-6 border border-[#C02424]"
          />
          <div
            class="absolute -bottom-4 right-4 bg-white/90 rounded-2xl px-4 py-3 shadow-lg text-xs"
          >
            <p class="font-semibold text-slate-800">
              5.0 ⭐ dari 150+ pelanggan
            </p>
            <p class="text-slate-500">Catering langganan kantor & kampus</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import logo from '../assets/saera-logo.jpg'
import heroImg from '../assets/hero-nasi-bundle.jpg'

const waLink = '#'
</script>
