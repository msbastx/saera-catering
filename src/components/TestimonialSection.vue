<template>
  <section class="bg-white">
    <div class="max-w-6xl mx-auto px-4 py-10">
      <h2 class="text-xl font-bold text-slate-800 mb-4">
        Apa Kata Pelanggan
      </h2>
      <div class="grid md:grid-cols-3 gap-4 text-sm">
        <figure
          v-for="t in testimonials"
          :key="t.name"
          class="bg-slate-50 rounded-2xl p-4 border border-slate-100"
        >
          <p class="text-yellow-500 mb-1">★★★★★</p>
          <blockquote class="text-slate-600 mb-2">
            “{{ t.text }}”
          </blockquote>
          <figcaption class="text-xs text-slate-500">
            {{ t.name }} · {{ t.role }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Rina, HRD Perusahaan X',
    role: 'Catering meeting bulanan',
    text: 'Rasanya konsisten enak, pengantaran selalu tepat waktu.'
  },
  {
    name: 'Fajar, Ketua Panitia BEM',
    role: 'Event kampus',
    text: 'Budget pelajar tapi presentasi dan rasa nggak murahan.'
  },
  {
    name: 'Bu Sri',
    role: 'Syukuran keluarga',
    text: 'Tamu banyak yang nanya pesan catering di mana.'
  }
]
</script>
