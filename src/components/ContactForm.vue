<template>
  <div class="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
    <h2 class="text-xl font-semibold text-slate-800 mb-4">
      Form Permintaan Penawaran
    </h2>

    <form @submit.prevent="handleSubmit" class="space-y-4 text-sm">
      <div>
        <label class="block mb-1 font-medium text-slate-700">
          Nama Lengkap *
        </label>
        <input
          v-model="form.name"
          type="text"
          class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C02424]"
        />
      </div>

      <div>
        <label class="block mb-1 font-medium text-slate-700">
          Nomor WhatsApp *
        </label>
        <input
          v-model="form.whatsapp"
          type="tel"
          class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C02424]"
        />
      </div>

      <div>
        <label class="block mb-1 font-medium text-slate-700">
          Jenis Acara
        </label>
        <select
          v-model="form.eventType"
          class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C02424]"
        >
          <option value="">Pilih jenis acara</option>
          <option>Meeting Kantor</option>
          <option>Event Kampus</option>
          <option>Syukuran Keluarga</option>
          <option>Pernikahan / Tunangan</option>
          <option>Lainnya</option>
        </select>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-1 font-medium text-slate-700">
            Tanggal Acara
          </label>
          <input
            v-model="form.date"
            type="date"
            class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C02424]"
          />
        </div>
        <div>
          <label class="block mb-1 font-medium text-slate-700">
            Perkiraan Jumlah Tamu
          </label>
          <input
            v-model.number="form.guestCount"
            type="number"
            min="0"
            class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C02424]"
          />
        </div>
      </div>

      <div>
        <label class="block mb-1 font-medium text-slate-700">
          Pesan Tambahan
        </label>
        <textarea
          v-model="form.message"
          rows="3"
          class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C02424]"
        ></textarea>
      </div>

      <div class="flex items-start gap-2 text-xs">
        <input
          v-model="form.agree"
          type="checkbox"
          class="mt-1"
        />
        <span>
          Saya setuju data ini digunakan untuk keperluan penawaran oleh Saera
          Catering.
        </span>
      </div>

      <p v-if="error" class="text-xs text-red-600">
        {{ error }}
      </p>

      <button
        type="submit"
        class="inline-flex px-5 py-2.5 rounded-full bg-[#C02424] text-white text-xs font-semibold shadow disabled:opacity-60"
        :disabled="loading"
      >
        {{ loading ? 'Mengirim...' : 'Kirim Permintaan Penawaran' }}
      </button>
    </form>

    <ModalSuccess v-if="showSuccess" @close="showSuccess = false" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import ModalSuccess from './ModalSuccess.vue'

const form = reactive({
  name: '',
  whatsapp: '',
  eventType: '',
  date: '',
  guestCount: null,
  message: '',
  agree: false
})

const loading = ref(false)
const error = ref('')
const showSuccess = ref(false)

function handleSubmit() {
  error.value = ''

  if (!form.name || !form.whatsapp) {
    error.value = 'Nama dan nomor WhatsApp wajib diisi.'
    return
  }
  if (!form.agree) {
    error.value = 'Silakan centang persetujuan terlebih dahulu.'
    return
  }

  loading.value = true

  setTimeout(() => {
    loading.value = false
    showSuccess.value = true
    console.log('Form terkirim:', { ...form })
  }, 1000)
}
</script>
