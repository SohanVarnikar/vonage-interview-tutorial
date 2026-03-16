<template>
  <div class="group relative">
    <div class="px-0 py-0 rounded-2xl min-w-48 shadow-xl cursor-pointer transition-all duration-300 bg-white border-2 border-blue-500 text-blue-800 hover:shadow-2xl focus:outline-none">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-2xl">
        <div class="flex-1">
          <span class="font-bold text-lg">Output</span>
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
        <div class="space-y-4">
          <!-- Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              v-model="nodeName"
              @input="updateNodeName"
              placeholder="Enter node name..."
              class="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
          
          <!-- Output Message -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Output Message</label>
            <textarea 
              v-model="outputMessage"
              @input="updateOutputMessage"
              placeholder="Enter output message..."
              rows="3"
              class="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none"
            ></textarea>
          </div>
          
          <!-- Format -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Format</label>
            <select 
              v-model="outputFormat"
              @change="updateOutputFormat"
              class="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="text">Text</option>
              <option value="html">HTML</option>
              <option value="json">JSON</option>
              <option value="xml">XML</option>
            </select>
          </div>
        </div>
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
import { ref, nextTick, watch } from 'vue'
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

const emit = defineEmits(['remove', 'update'])

// Node name and output fields
const nodeName = ref(props.data.name || '')
const outputMessage = ref(props.data.outputMessage || '')
const outputFormat = ref(props.data.outputFormat || 'text')

// Watch for prop changes to keep values in sync
watch(() => props.data.name, (newValue) => {
  nodeName.value = newValue || ''
}, { immediate: true })

watch(() => props.data.outputMessage, (newValue) => {
  outputMessage.value = newValue || ''
}, { immediate: true })

watch(() => props.data.outputFormat, (newValue) => {
  outputFormat.value = newValue || 'text'
}, { immediate: true })

// Update functions
const updateNodeName = () => {
  emit('update', { ...props.data, name: nodeName.value })
}

const updateOutputMessage = () => {
  emit('update', { ...props.data, outputMessage: outputMessage.value })
}

const updateOutputFormat = () => {
  emit('update', { ...props.data, outputFormat: outputFormat.value })
}
</script>

<style scoped>
/* Override VueFlow selection styling */
:deep(.vue-flow__node.selected),
:deep(.vue-flow__node:focus),
:deep(.vue-flow__node:focus-visible) {
  outline: none !important;
}
</style>