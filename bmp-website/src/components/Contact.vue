<template>
  <section id="contact" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <p class="section-subtitle">Ayo Berkolaborasi</p>
        <h2 class="section-title">Hubungi Kami</h2>
        <div class="w-16 h-1 bg-gold mx-auto mt-4 mb-6 rounded-full"></div>
        <p class="text-gray-500 max-w-xl mx-auto">
          Siap membantu kebutuhan industri Anda. Hubungi kami sekarang untuk konsultasi gratis.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <!-- Contact Info -->
        <div class="lg:col-span-2 reveal">
          <div class="space-y-6">
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 hover:border-navy/20 hover:shadow-md transition-all duration-300"
            >
              <div class="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {{ info.icon }}
              </div>
              <div>
                <div class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{{ info.label }}</div>
                <div class="text-navy font-semibold text-sm">{{ info.value }}</div>
                <div v-if="info.sub" class="text-gray-400 text-xs mt-0.5">{{ info.sub }}</div>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="mt-8">
            <p class="text-sm font-semibold text-gray-500 mb-4">Ikuti Kami</p>
            <div class="flex gap-3">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.href"
                class="w-10 h-10 bg-white border border-gray-200 hover:border-navy hover:bg-navy hover:text-white text-gray-500 rounded-xl flex items-center justify-center text-sm transition-all duration-300"
                :title="social.name"
              >
                {{ social.icon }}
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-3 reveal reveal-delay-2">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 class="text-navy font-bold text-lg mb-6">Kirim Pesan</h3>

            <div v-if="submitted" class="text-center py-12">
              <div class="text-5xl mb-4">✅</div>
              <h4 class="text-navy font-bold text-xl mb-2">Pesan Terkirim!</h4>
              <p class="text-gray-500 text-sm">Terima kasih, tim kami akan menghubungi Anda segera.</p>
              <button @click="submitted = false" class="mt-6 text-gold text-sm font-medium hover:underline">
                Kirim pesan lain →
              </button>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="John Doe"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nama Perusahaan</label>
                <input
                  v-model="form.company"
                  type="text"
                  placeholder="PT. Nama Perusahaan"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                <select
                  v-model="form.subject"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all text-sm bg-white"
                >
                  <option value="">Pilih layanan yang diminati</option>
                  <option>General Trading</option>
                  <option>Engineering & Contractor</option>
                  <option>Logistik & Heavy Equipment Rent</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Pesan *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  placeholder="Ceritakan kebutuhan Anda..."
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all text-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                :disabled="loading"
                class="w-full bg-navy hover:bg-navy-light text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span v-if="loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span>{{ loading ? 'Mengirim...' : 'Kirim Pesan' }}</span>
                <span v-if="!loading">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const loading = ref(false)
const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
})

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'binmabmp@gmail.com', sub: 'Respon dalam 24 jam' },
  { icon: '📱', label: 'WhatsApp', value: '+62 858 2409 2027', sub: 'Senin - Jumat, 08.00 - 17.00' },
  { icon: '📍', label: 'Lokasi', value: 'Indonesia', sub: 'Beroperasi di seluruh Indonesia' },
]

const socials = [
  { name: 'LinkedIn', icon: 'in', href: '#' },
  { name: 'Instagram', icon: '📸', href: '#' },
  { name: 'Email', icon: '✉️', href: 'mailto:info@binmamitraperkasa.com' },
]

const handleSubmit = async () => {
  loading.value = true

  const nomorWA = '6285824092027'
  const pesan = `*Pesan dari Website BMP*
--------------------------------
Nama      : ${form.name}
Email     : ${form.email}
Perusahaan: ${form.company}
Subjek    : ${form.subject}
--------------------------------
Pesan:
${form.message}
--------------------------------`

  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`

  loading.value = false
  window.open(url, '_blank')
  submitted.value = true
  Object.keys(form).forEach(k => form[k] = '')
}


onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('#contact .reveal').forEach(el => observer.observe(el))
})
</script>
