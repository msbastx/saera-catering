<template>
  <section class="bg-white">
    <div
      class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm"
    >
      <div
        v-for="item in highlights"
        :key="item.title"
        class="bg-[#FFF1E0] border border-[#F3D4BE] rounded-2xl p-5 shadow-sm"
      >
        <p class="text-2xl mb-2">{{ item.emoji }}</p>
        <h3 class="font-semibold text-slate-800 mb-1">
          {{ item.title }}
        </h3>
        <p class="text-slate-600">
          {{ item.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const highlights = [
  {
    emoji: '🍛',
    title: 'Rasa Otentik Nusantara',
    text: 'Bumbu rempah khas keluarga yang diolah fresh setiap hari.'
  },
  {
    emoji: '📦',
    title: 'Porsi Melimpah',
    text: 'Porsi mengenyangkan dengan lauk variatif tanpa pelit isian.'
  },
  {
    emoji: '⏰',
    title: 'Tepat Waktu',
    text: 'Pengantaran on-time untuk menjaga kualitas dan kepercayaan.'
  }
]
</script>
