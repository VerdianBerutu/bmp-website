<template>
  <section id="why-us" class="py-24 bg-navy relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-navy-light/30 rounded-full blur-3xl"></div>
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <p class="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">Mengapa Memilih Kami</p>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Keunggulan Kami</h2>
        <div class="w-16 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="reveal"
          :class="`reveal-delay-${index + 1}`"
        >
          <div class="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-2xl p-8 text-center transition-all duration-400 hover:-translate-y-2 h-full">
            <!-- Icon -->
            <div class="w-16 h-16 mx-auto rounded-2xl bg-gold/10 group-hover:bg-gold flex items-center justify-center text-3xl mb-6 transition-all duration-300">
              {{ feature.icon }}
            </div>

            <h3 class="text-white font-bold text-lg mb-3 group-hover:text-gold transition-colors duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16 reveal">
        <p class="text-white/60 mb-6 text-base">Siap bekerja sama dengan kami?</p>
        <button
          @click="scrollTo('contact')"
          class="bg-gold hover:bg-gold-dark text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-1 text-base"
        >
          Mulai Konsultasi Sekarang →
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const features = [
  {
    icon: '🏆',
    title: 'Berpengalaman & Terpercaya',
    description: 'Lebih dari 10 tahun pengalaman melayani berbagai sektor industri di Indonesia dengan rekam jejak yang solid.',
  },
  {
    icon: '👷',
    title: 'Tim Profesional',
    description: 'Didukung oleh tim ahli berpengalaman di bidang engineering, trading, dan logistik yang kompeten dan berdedikasi.',
  },
  {
    icon: '⚙️',
    title: 'Peralatan Modern',
    description: 'Armada alat berat dan peralatan modern yang terawat dengan baik untuk memastikan kelancaran setiap proyek.',
  },
  {
    icon: '💰',
    title: 'Harga Kompetitif',
    description: 'Penawaran harga yang kompetitif tanpa mengorbankan kualitas, memberikan nilai terbaik untuk setiap investasi Anda.',
  },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('#why-us .reveal').forEach((el) => observer.observe(el))
})
</script>
