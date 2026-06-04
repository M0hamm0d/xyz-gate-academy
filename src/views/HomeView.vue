<script setup>
import AboutSection from '@/components/AboutSection.vue'
import AcademicPrograms from '@/components/AcademicPrograms.vue'
import CTASection from '@/components/CTASection.vue'
import OurFacilities from '@/components/OurFacilities.vue'
import TeachersSection from '@/components/TeachersSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'
import WhyChooseUs from '@/components/WhyChooseUs.vue'
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const scrollToNextSection = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}

const statsGrid = ref(null)
const displayNumbers = reactive({
  years: 0,
  teachers: 0,
  passRate: 0,
})

const targetNumbers = {
  years: 25,
  teachers: 120,
  passRate: 98,
}

let observer = null

const animateValue = (key, start, end, duration) => {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    displayNumbers[key] = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

const startCounting = () => {
  animateValue('years', 0, targetNumbers.years, 1500)
  animateValue('teachers', 0, targetNumbers.teachers, 1800)
  animateValue('passRate', 0, targetNumbers.passRate, 1500)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 },
  )

  if (statsGrid.value) {
    observer.observe(statsGrid.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section class="hero-container">
    <!-- Background Video Elements -->
    <div class="video-wrapper">
      <video autoplay loop muted playsinline class="hero-video">
        <source src="@/assets/videos/school.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="hero-overlay"></div>
    </div>

    <div class="hero-content">
      <h1 class="school-name">XYZ Gate Academy</h1>
      <p class="school-motto">"Nurturing Excellence, Building Futures"</p>

      <div class="cta-group">
        <button class="btn btn-primary">Apply for admission</button>
        <button class="btn btn-secondary">Take a virtual tour</button>
      </div>
    </div>

    <div class="scroll-indicator" @click="scrollToNextSection">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </div>
  </section>
  <section class="stats-section">
    <div class="stats-container">
      <div class="stats-header-block">
        <span class="badge">Performance stats</span>
        <h2 class="section-title">Proven Academic Excellence</h2>
        <p class="section-subtitle">
          Empowering students through rigorous training and modern technical workflows to build a
          sustainable global future.
        </p>
        <a href="#" class="demo-link">
          Explore our curriculum
          <svg
            class="arrow-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>

      <div class="bento-grid" ref="statsGrid">
        <div class="bento-card card-large">
          <div class="card-meta">
            <span class="card-icon-dot"></span>
            <span class="card-label">Years of excellence</span>
          </div>
          <div class="stat-number">
            {{ displayNumbers.years }}<span class="accent-suffix">+</span>
          </div>
          <p class="card-description">
            Established legacy delivering world-class technical education.
          </p>
        </div>

        <div class="bento-card card-small">
          <div class="card-meta">
            <span class="card-icon-dot"></span>
            <span class="card-label">Qualified teachers</span>
          </div>
          <div class="stat-number">
            {{ displayNumbers.teachers }}
          </div>
          <p class="card-description">Certified experts guiding student trajectories.</p>
        </div>

        <div class="bento-card card-small">
          <div class="card-meta">
            <span class="card-icon-dot"></span>
            <span class="card-label">WAEC pass rate</span>
          </div>
          <div class="stat-number">
            {{ displayNumbers.passRate }}<span class="accent-suffix">%</span>
          </div>
          <p class="card-description">
            Consistently leading regional academic performance benchmarks.
          </p>
        </div>
      </div>
    </div>
  </section>
  <AboutSection />
  <WhyChooseUs />
  <AcademicPrograms />
  <OurFacilities />
  <TeachersSection />
  <TestimonialSection />
  <CTASection />
</template>

<style scoped>
/* @import url links for the exact font pairings requested */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap');

/* Reset/Base context for hero full-screen layout */
.hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #0a0a0a; /* Primary Pure Jet Black fallback */
}

/* Full-screen video background handling */
.video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Overlay inspired by the deep tones in image_2e503c.png */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.6) 0%, rgba(20, 20, 20, 0.85) 100%);
}

/* Typography & Content Layout alignment */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  padding: 0 24px;
}

/* Headings: Cormorant Garamond */
.school-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 4rem;
  font-weight: 600;
  color: #f5f5f5; /* Light Grey text contrast */
  margin-bottom: 16px;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

/* Motto: Elegant Serif Text matching image_2e50f6.png style */
.school-motto {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.75rem;
  color: #e6faf8; /* Subtle Teal Tint for hierarchy */
  margin-bottom: 40px;
}

/* Buttons and Accents Groups using Body Font: DM Sans */
.cta-group {
  font-family: 'DM Sans', sans-serif;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.btn {
  font-size: 1rem;
  font-weight: 500;
  padding: 14px 32px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

/* Electric Teal Primary CTA */
.btn-primary {
  background-color: #00bfa6;
  color: #0a0a0a;
  border: 1px solid #00bfa6;
}

.btn-primary:hover {
  background-color: transparent;
  color: #00bfa6;
  box-shadow: 0 0 15px rgba(0, 191, 166, 0.4);
}

/* Transparent Outline Secondary CTA from wireframe */
.btn-secondary {
  background-color: transparent;
  color: #f5f5f5;
  border: 1px solid #f5f5f5;
}

.btn-secondary:hover {
  background-color: rgba(245, 245, 245, 0.1);
  border-color: #00bfa6;
  color: #00bfa6;
}

/* Downward indicator arrow matching wireframe properties */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  cursor: pointer;
  animation: bounce 2s infinite;
}

.scroll-indicator svg {
  width: 32px;
  height: 32px;
  stroke: #00bfa6; /* Vibrant Electric Teal Accent */
}

/* CSS Keyframes for subtle motion interaction */
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translate(-50%, 0);
  }
  40% {
    transform: translate(-50%, -10px);
  }
  60% {
    transform: translate(-50%, -5px);
  }
}

/* Responsive adjustments for mobile/tablet screen optimization */
@media (max-width: 768px) {
  .school-name {
    font-size: 2.5rem;
  }
  .school-motto {
    font-size: 1.35rem;
  }
  .cta-group {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }
  .btn {
    width: 100%;
    max-width: 280px;
  }
}

/* Additional styling for the stats section */

.stats-section {
  background-color: var(--bg-primary);
  padding: 120px 24px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 64px;
  align-items: center;
}

.stats-header-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.badge {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  background-color: var(--accent-tint);
  padding: 6px 14px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 24px;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 600;
  color: var(--text-main);
  line-height: 1.15;
  margin: 0 0 20px 0;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;
}

.section-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 32px 0;
  max-width: 440px;
  transition: color 0.3s ease;
}

.demo-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.2s ease;
}

.demo-link:hover {
  opacity: 0.85;
}

.arrow-icon {
  width: 14px;
  height: 14px;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.bento-card {
  background-color: var(--bg-surface);
  border-radius: 24px;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--border-subtle);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

[data-theme='light'] .bento-card {
  box-shadow: 0 8px 24px rgba(10, 10, 10, 0.02);
}

.card-large {
  grid-column: span 2;
  min-height: 220px;
}

.card-small {
  grid-column: span 1;
  min-height: 240px;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
}

.card-icon-dot {
  width: 8px;
  height: 8px;
  background-color: var(--accent);
  border-radius: 50%;
}

.card-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-main);
  opacity: 0.8;
  transition: color 0.3s ease;
}

.stat-number {
  font-family: 'DM Sans', sans-serif;
  font-size: 4.5rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1;
  margin-bottom: 12px;
  letter-spacing: -2px;
  transition: color 0.3s ease;
}

.accent-suffix {
  color: var(--accent);
  margin-left: 2px;
}

.card-description {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
  transition: color 0.3s ease;
}

@media (max-width: 992px) {
  .stats-container {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .section-title {
    font-size: 2.8rem;
  }
}

@media (max-width: 568px) {
  .stats-section {
    padding: 80px 16px;
  }

  .bento-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card-large,
  .card-small {
    grid-column: span 1;
    padding: 32px;
    min-height: auto;
  }

  .stat-number {
    font-size: 3.5rem;
  }
}
</style>
