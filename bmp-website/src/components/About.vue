<template>
  <section id="about" class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Text -->
        <div class="reveal">
          <p class="section-subtitle">Siapa Kami</p>
          <h2 class="section-title">Tentang Kami</h2>
          <div class="w-16 h-1 bg-gold rounded-full mb-8"></div>

          <p class="text-gray-600 leading-relaxed mb-6">
            <strong class="text-navy">PT Binma Mitra Perkasa (BMP)</strong> perusahaan nasional yang bergerak di bidang kontraktor umum dan penyedia barang serta jasa. Didirikan dengan komitmen kuat untuk menjadi mitra strategis yang andal bagi berbagai sektor industri, kami hadir membawa nilai profesionalisme, inovasi berkelanjutan, dan standar kualitas tinggi dalam setiap aspek pekerjaan.
          </p>
          <p class="text-gray-600 leading-relaxed mb-8">
            Sebagai perusahaan yang terus berkembang, kami melayani kebutuhan konstruksi dan pengadaan barang di berbagai bidang strategis seperti pertambangan, minyak dan gas, industri manufaktur, serta pembangunan infrastruktur nasional. Dengan mengedepankan kepatuhan terhadap standar keselamatan kerja (HSE), integritas, dan efisiensi, kami percaya bahwa keberhasilan proyek klien adalah cerminan dari dedikasi dan kinerja kami.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-navy/20 hover:shadow-md transition-all duration-300"
            >
              <div class="text-3xl font-bold text-navy mb-1">
                <CounterNumber :target="stat.target" :suffix="stat.suffix" :startCount="startCount" />
              </div>
              <div class="text-gray-500 text-sm font-medium">{{ stat.label }}</div>
            </div>
          </div>

          <button
            @click="scrollTo('contact')"
            class="btn-primary"
          >
            Hubungi Kami →
          </button>
        </div>

        <!-- Right: Visual -->
        <div class="relative reveal reveal-delay-2">
          <!-- Main image -->
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              alt="Engineering work"
              class="w-full h-96 object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
            <div class="absolute bottom-6 left-6 text-white">
              <div class="text-sm font-medium opacity-80">Mitra Terpercaya Industri</div>
              <div class="text-lg font-bold">Indonesia</div>
            </div>
          </div>

          <!-- Floating card -->
          <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-gray-100 w-48">
            <div class="text-navy font-bold text-2xl">3+</div>
            <div class="text-gray-500 text-xs font-medium mt-1">Tahun Melayani<br/>Industri Indonesia</div>
            <div class="mt-3 flex gap-1">
              <div v-for="i in 5" :key="i" class="text-gold text-xs">★</div>
            </div>
          </div>

          <!-- Decorative -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-xl"></div>
          <div class="absolute -z-10 top-8 right-8 w-full h-full rounded-2xl border-2 border-navy/10"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CounterNumber from './CounterNumber.vue'

const startCount = ref(false)

const stats = [
  { target: 3, suffix: '+', label: 'Tahun Pengalaman' },
  { target: 100, suffix: '+', label: 'Proyek Selesai' },
  { target: 25, suffix: '+', label: 'Klien Aktif' },
  { target: 3, suffix: '', label: 'Bidang Layanan' },
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
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          if (!startCount.value) startCount.value = true
        }
      })
    },
    { threshold: 0.15 }
  )
  document.querySelectorAll('#about .reveal').forEach((el) => observer.observe(el))
})
</script>
