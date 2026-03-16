<template>
  <div class="group relative">
    <div class="px-0 py-0 rounded-2xl min-w-48 shadow-xl cursor-pointer transition-all duration-300 bg-white border-2 border-blue-500 text-blue-800 hover:shadow-2xl focus:outline-none">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-2xl">
        <div class="flex-1">
          <span class="font-bold text-lg">End</span>
        </div>
        <button 
          @click="$emit('remove', id)"
          class="w-6 h-6 text-red-500 hover:text-red-700 flex items-center justify-center rounded-full hover:bg-red-50 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4" aria-hidden="true">
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </button>
      </div>
      
      <!-- Content Body -->
      <div class="px-4 py-3">
        <div class="text-blue-600 text-sm">Journey complete</div>
      </div>
    </div>
    <Handle 
      type="target" 
      position="left" 
      class="w-4 h-4 bg-gray-600 border-2 border-white rounded-full shadow-lg transition-all duration-200 hover:scale-125" 
      style="left: -8px; top: 50%; transform: translateY(-50%); position: absolute;"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Handle } from '@vue-flow/core'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  },
  id: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['remove'])
</script>

<style scoped>
/* Override VueFlow selection styling */
:deep(.vue-flow__node.selected),
:deep(.vue-flow__node:focus),
:deep(.vue-flow__node.selected:focus) {
  outline: none !important;
  box-shadow: none !important;
}
</style>

