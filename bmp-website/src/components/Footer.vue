<template>
  <footer class="bg-navy-deeper text-white">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-bold text-white text-sm">
              BMP
            </div>
            <div>
              <div class="font-bold text-base">BINMA MITRA PERKASA</div>
              <div class="text-gold text-[10px] tracking-[0.15em]">GENERAL TRADING · CONTRACTOR · SUPPLIER</div>
            </div>
          </div>
          <p class="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
            Solusi terpercaya untuk kebutuhan General Trading, Engineering & Contractor,
            serta Logistik & Heavy Equipment Rental di seluruh Indonesia.
          </p>
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              class="w-9 h-9 bg-white/5 hover:bg-gold border border-white/10 hover:border-gold rounded-lg flex items-center justify-center text-xs text-white/60 hover:text-white transition-all duration-300"
            >{{ social.icon }}</a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-sm mb-5 text-white uppercase tracking-wider">Navigasi</h4>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.label">
              <a
                :href="link.href"
                @click.prevent="scrollTo(link.id)"
                class="text-white/50 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
              >
                <span class="text-gold/50">›</span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold text-sm mb-5 text-white uppercase tracking-wider">Layanan</h4>
          <ul class="space-y-3">
            <li v-for="service in serviceLinks" :key="service">
              <span class="text-white/50 text-sm flex items-center gap-2">
                <span class="text-gold/50">›</span>
                {{ service }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-white/30 text-xs text-center sm:text-left">
          © 2026 PT Binma Mitra Perkasa. All rights reserved.
        </p>
        <p class="text-white/20 text-xs">
          General Trading · Engineering & Contractor · Logistik & Heavy Equipment
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  { name: 'LinkedIn', icon: 'in', href: '#' },
  { name: 'Instagram', icon: '📸', href: '#' },
  { name: 'Email', icon: '✉️', href: 'mailto:info@binmamitraperkasa.com' },
]

const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'Tentang Kami', href: '#about' },
  { id: 'services', label: 'Layanan', href: '#services' },
  { id: 'why-us', label: 'Keunggulan', href: '#why-us' },
  { id: 'contact', label: 'Kontak', href: '#contact' },
]

const serviceLinks = [
  'General Trading',
  'Engineering & Contractor',
  'Logistik & Heavy Equipment',
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>
