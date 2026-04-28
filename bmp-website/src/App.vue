<template>
  <div>
    <!-- Loading Screen -->
    <Transition name="loading">
      <div v-if="isLoading" class="fixed inset-0 z-[9999] bg-navy flex flex-col items-center justify-center">
        <div class="text-center">
          <div class="text-gold font-bold text-4xl tracking-widest mb-2">BMP</div>
          <div class="text-white text-sm font-light tracking-[0.3em] mb-8">BINMA MITRA PERKASA</div>
          <div class="w-48 h-1 bg-navy-light rounded-full overflow-hidden">
            <div class="loading-bar h-full rounded-full"></div>
          </div>
        </div>
      </div>
    </Transition>

    <RouterView />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1800)
})
</script>

<style scoped>
.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.5s ease;
}
.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}
</style>
