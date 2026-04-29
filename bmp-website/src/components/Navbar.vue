<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-navy shadow-2xl py-3' : 'bg-navy/95 backdrop-blur-sm py-4'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
<img 
  src="/logo2.png" 
  alt="BMP Logo" 
  class="h-14 w-auto group-hover:scale-105 transition-transform duration-300 brightness-0 invert"
/>
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="item in menuItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click.prevent="scrollTo(item.id)"
            class="text-white/80 hover:text-gold text-sm font-medium transition-colors duration-200 relative group"
          >
            {{ item.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#contact"
            @click.prevent="scrollTo('contact')"
            class="bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Hubungi Kami
          </a>
        </div>

        <!-- Hamburger -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <div class="w-5 space-y-1.5">
            <span class="block h-0.5 bg-white transition-all duration-300" :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"></span>
            <span class="block h-0.5 bg-white transition-all duration-300" :class="mobileOpen ? 'opacity-0' : ''"></span>
            <span class="block h-0.5 bg-white transition-all duration-300" :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="mobile-menu">
        <div v-if="mobileOpen" class="md:hidden mt-4 pb-4 border-t border-white/10">
          <div class="flex flex-col gap-1 pt-4">
            <a
              v-for="item in menuItems"
              :key="item.id"
              :href="`#${item.id}`"
              @click.prevent="scrollTo(item.id); mobileOpen = false"
              class="text-white/80 hover:text-gold hover:bg-white/5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            >
              {{ item.label }}
            </a>
            <a
              href="#contact"
              @click.prevent="scrollTo('contact'); mobileOpen = false"
              class="bg-gold text-white px-4 py-2.5 rounded-lg text-sm font-semibold mt-2 text-center"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why-us', label: 'Keunggulan' },
  { id: 'contact', label: 'Contact' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
