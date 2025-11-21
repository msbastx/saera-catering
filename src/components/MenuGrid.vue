<template>
  <div class="space-y-6">
    <!-- Filter kategori -->
    <div class="flex flex-wrap gap-2 text-xs">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="$emit('update:category', cat)"
        class="px-3 py-1.5 rounded-full border text-xs font-medium"
        :class="
          cat === modelValue
            ? 'bg-[#C02424] text-white border-[#C02424]'
            : 'bg-white text-slate-700 border-slate-200'
        "
      >
        {{ cat }}
      </button>
    </div>

    <!-- Grid menu -->
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      v-if="items.length"
    >
      <MenuCard v-for="item in items" :key="item.id" :item="item" />
    </div>

    <p v-else class="text-sm text-slate-500">
      Belum ada menu untuk kategori ini.
    </p>
  </div>
</template>

<script setup>
import MenuCard from './MenuCard.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  categories: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})

defineEmits(['update:category'])
</script>
