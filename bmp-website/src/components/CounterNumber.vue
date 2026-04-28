<template>
  <span>{{ displayed }}{{ suffix }}</span>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  target: { type: Number, required: true },
  suffix: { type: String, default: '' },
  startCount: { type: Boolean, default: false },
})

const displayed = ref(0)

watch(() => props.startCount, (val) => {
  if (val) {
    const duration = 2000
    const step = props.target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= props.target) {
        displayed.value = props.target
        clearInterval(timer)
      } else {
        displayed.value = Math.floor(current)
      }
    }, 16)
  }
})
</script>
