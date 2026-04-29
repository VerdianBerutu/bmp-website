<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')"
    ></div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-navy-deeper/90 via-navy/80 to-navy-dark/85"></div>

    <!-- Decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl"></div>
      <div class="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-navy-light/20 blur-3xl"></div>
      <!-- Grid pattern -->
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px;"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8"
        :class="visible ? 'animate-fade-up' : 'opacity-0'"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
        General Trading · Contractor · Supplier
      </div>

      <!-- Main Title -->
      <h1
        class="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        :class="visible ? 'animate-fade-up' : 'opacity-0'"
        style="animation-delay: 0.15s"
      >
        PT <span class="text-gold">BINMA</span><br />
        <span class="text-gold">MITRA</span> PERKASA
      </h1>

      <!-- Subtitle -->
      <p
        class="text-xl sm:text-2xl text-white/70 font-light tracking-wide mb-6"
        :class="visible ? 'animate-fade-up' : 'opacity-0'"
        style="animation-delay: 0.3s"
      >
        General Trading, Contractor &amp; Supplier
      </p>

      <!-- Description -->
      <p
        class="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        :class="visible ? 'animate-fade-up' : 'opacity-0'"
        style="animation-delay: 0.45s"
      >
        Solusi terpercaya untuk kebutuhan trading, konstruksi, dan logistik industri.
        Berpengalaman lebih dari satu dekade melayani kebutuhan industri Indonesia.
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        :class="visible ? 'animate-fade-up' : 'opacity-0'"
        style="animation-delay: 0.6s"
      >
        <button @click="scrollTo('services')" class="btn-primary text-base w-full sm:w-auto">
          Layanan Kami
          <span class="ml-2">→</span>
        </button>
        <button @click="scrollTo('contact')" class="btn-outline text-base w-full sm:w-auto">
          Hubungi Kami
        </button>
      </div>

      <!-- Stats strip -->
      <div
        class="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
        :class="visible ? 'animate-fade-up' : 'opacity-0'"
        style="animation-delay: 0.75s"
      >
        <div v-for="stat in stats" :key="stat.label" class="text-center border-r border-white/10 last:border-0 px-4">
          <div class="text-gold font-bold text-3xl">{{ stat.value }}</div>
          <div class="text-white/50 text-xs mt-1 font-medium tracking-wide">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
      <div class="text-xs tracking-widest">SCROLL</div>
      <div class="w-px h-8 bg-white/20"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)

const stats = [
  { value: '3+', label: 'Tahun Pengalaman' },
  { value: '100+', label: 'Proyek Selesai' },
  { value: '25+', label: 'Klien Aktif' },
  { value: '3', label: 'Bidang Layanan' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

onMounted(() => {
  setTimeout(() => { visible.value = true }, 1900)
})
</script>

<style scoped>
.animate-fade-up {
  animation: fadeUp 0.8s ease both;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(35px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
