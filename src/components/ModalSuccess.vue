<template>
  <div
    class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl">
      <h3 class="text-lg font-semibold text-slate-800 mb-2">
        Terima kasih! 🎉
      </h3>
      <p class="text-sm text-slate-600 mb-4">
        Permintaan penawaran sudah kami terima. Tim Saera akan menghubungi
        Anda via WhatsApp maksimal 1×24 jam.
      </p>
      <button
        class="px-4 py-2 rounded-full bg-[#C02424] text-white text-xs font-semibold"
        @click="$emit('close')"
      >
        Tutup
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>
