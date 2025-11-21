<template>
  <div class="bg-[#F7F7F7]">
    <section class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
      <div class="space-y-4 text-sm">
        <h1 class="text-2xl font-bold text-slate-900 mb-2">
          Hubungi Saera Catering
        </h1>
        <p class="text-slate-600">
          Ceritakan kebutuhan acara Anda, mulai dari tanggal, jumlah tamu,
          hingga budget. Tim kami akan membantu menyusun menu yang paling
          pas.
        </p>

        <div class="bg-white rounded-2xl shadow-sm p-4 border border-slate-100">
          <h2 class="font-semibold text-slate-800 mb-2">Kontak Cepat</h2>
          <p>WhatsApp: 08xx-xxxx-xxxx</p>
          <p>Email: saera.catering@example.com</p>
          <p class="mt-2 text-xs text-slate-500">
            Jam operasional: 08.00 – 20.00 WITA
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-4 border border-slate-100">
          <h2 class="font-semibold text-slate-800 mb-2">Lokasi Dapur</h2>
          <p class="text-xs text-slate-600 mb-2">
            Jl. Contoh Alamat No. 123, Balikpapan – Kalimantan Timur
          </p>
          <div class="h-40 rounded-xl bg-slate-200 flex items-center justify-center text-xs text-slate-600">
            [Placeholder Peta / Embed Maps]
          </div>
        </div>
      </div>

      <ContactForm />
    </section>
  </div>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>
