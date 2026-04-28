<template>
  <section id="services" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16 reveal" ref="headerRef">
        <p class="section-subtitle">Apa yang Kami Tawarkan</p>
        <h2 class="section-title">Layanan Kami</h2>
        <div class="w-16 h-1 bg-gold mx-auto mt-4 mb-6 rounded-full"></div>
        <p class="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
          Kami menyediakan solusi komprehensif untuk kebutuhan industri Anda dengan standar profesional tertinggi.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="reveal"
          :class="`reveal-delay-${index + 1}`"
        >
          <div class="bg-white rounded-2xl p-8 border border-gray-100 hover:border-navy/20 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl group h-full flex flex-col">
            <!-- Icon -->
            <div class="w-16 h-16 rounded-2xl bg-navy/5 group-hover:bg-navy flex items-center justify-center text-3xl mb-6 transition-all duration-300">
              <span class="group-hover:scale-110 transition-transform duration-300">{{ service.icon }}</span>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
              {{ service.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{{ service.description }}</p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-auto">
              <span
                v-for="tag in service.tags"
                :key="tag"
                class="text-xs px-3 py-1 bg-navy/5 text-navy/70 rounded-full font-medium group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors duration-300"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Bottom accent line -->
            <div class="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
              <span class="text-navy text-sm font-semibold group-hover:text-gold transition-colors">Pelajari Lebih →</span>
              <div class="w-8 h-0.5 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const services = [
  {
    icon: '🏭',
    title: 'General Trading',
    description: 'Penyediaan berbagai kebutuhan peralatan dan material industri dengan kualitas terjamin dan pengiriman tepat waktu.',
    tags: ['Mining Equipment', 'Gas & Oil Equipment', 'Steel', 'Machinery', 'Lifting & Rigging', 'Mooring', 'FIG Precast'],
  },
  {
    icon: '🏗️',
    title: 'Engineering & Contractor',
    description: 'Jasa engineering design, konsultasi, dan pelaksanaan konstruksi untuk berbagai jenis infrastruktur dan bangunan.',
    tags: ['Engineering Design', 'Consultant', 'Road Construction', 'Irrigation', 'Building', 'Bridge'],
  },
  {
    icon: '🚛',
    title: 'Logistik & Heavy Equipment',
    description: 'Layanan logistik terintegrasi dan penyewaan alat berat untuk kebutuhan industri dengan armada modern dan operator berpengalaman.',
    tags: ['Logistik Industri', 'Heavy Equipment Rent', 'Transportasi', 'Warehousing'],
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>
