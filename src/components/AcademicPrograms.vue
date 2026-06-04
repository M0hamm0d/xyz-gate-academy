<!-- <template>
  <section class="programs-section">
    <div class="programs-container">
      <div class="programs-header">
        <h2 class="section-title">Academic Programmes</h2>
        <p class="section-subtitle">
          We offer a complete academic journey tailored to different developmental stages, combining
          structural discipline with a forward-thinking curriculum.
        </p>
      </div>

      <div class="cards-layout">
        <div class="program-card nursery-card">
          <div class="card-top">
            <div class="icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                />
                <path d="M12 6v12M6 12h12" />
              </svg>
            </div>
            <span class="age-badge">Ages 2–5</span>
          </div>
          <div class="card-bottom">
            <h3 class="program-title">Nursery School</h3>
            <p class="program-desc">
              Sensory learning, early literacy, numeracy foundations, and creative cognitive play
              blocks.
            </p>
            <a href="#" class="learn-more-btn">
              <span>Learn more</span>
              <span class="plus-icon">+</span>
            </a>
          </div>
        </div>

        <div class="program-card primary-card">
          <div class="card-top">
            <div class="icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <span class="age-badge">Ages 6–11</span>
          </div>
          <div class="card-bottom">
            <h3 class="program-title">Primary School</h3>
            <p class="program-desc">
              Core sciences, quantitative reasoning, foundational technology, and behavioral
              development.
            </p>
            <a href="#" class="learn-more-btn">
              <span>Learn more</span>
              <span class="plus-icon">+</span>
            </a>
          </div>
        </div>

        <div class="program-card junior-card">
          <div class="card-top">
            <div class="icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <span class="age-badge">Ages 12–14</span>
          </div>
          <div class="card-bottom">
            <h3 class="program-title">Junior Secondary</h3>
            <p class="program-desc">
              Introductory technical theory, critical research essays, basic algebra, and local
              linguistics.
            </p>
            <a href="#" class="learn-more-btn">
              <span>Learn more</span>
              <span class="plus-icon">+</span>
            </a>
          </div>
        </div>

        <div class="program-card senior-card">
          <div class="card-top">
            <div class="icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <span class="age-badge">Ages 15–18</span>
          </div>
          <div class="card-bottom">
            <h3 class="program-title">Senior Secondary</h3>
            <p class="program-desc">
              Advanced STEM specializations, humanities, digital arts, and complete WAEC/NECO drill
              profiles.
            </p>
            <a href="#" class="learn-more-btn">
              <span>Learn more</span>
              <span class="plus-icon">+</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap');

.programs-section {
  background-color: #0a0a0a;
  padding: 140px 24px;
  width: 100%;
  box-sizing: border-box;
}

.programs-container {
  max-width: 1200px;
  margin: 0 auto;
}

.programs-header {
  max-width: 600px;
  margin-bottom: 80px;
}

.section-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 3.2rem;
  font-weight: 700;
  color: #f5f5f5;
  margin: 0 0 24px 0;
  letter-spacing: -1.5px;
}

.section-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: rgba(245, 245, 245, 0.5);
  line-height: 1.6;
  margin: 0;
}

.cards-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  align-items: flex-end;
}

.program-card {
  background-color: #141414;
  border-radius: 32px;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(245, 245, 245, 0.02);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.nursery-card {
  height: 350px;
}

.primary-card {
  height: 390px;
  background-color: #00bfa6;
  border-color: #00bfa6;
}

.junior-card {
  height: 430px;
}

.senior-card {
  height: 470px;
}

.program-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(230, 250, 248, 0.03) 0%, transparent 70%);
  pointer-events: none;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(245, 245, 245, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(245, 245, 245, 0.6);
  transition: all 0.4s ease;
}

.icon-circle svg {
  width: 20px;
  height: 20px;
}

.age-badge {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(245, 245, 245, 0.4);
  background-color: rgba(245, 245, 245, 0.02);
  padding: 6px 14px;
  border-radius: 100px;
  border: 1px solid rgba(245, 245, 245, 0.04);
}

.card-bottom {
  display: flex;
  flex-direction: column;
}

.program-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #f5f5f5;
  margin: 0 0 12px 0;
  letter-spacing: -0.3px;
}

.program-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: rgba(245, 245, 245, 0.4);
  line-height: 1.5;
  margin: 0 0 28px 0;
}

.learn-more-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #f5f5f5;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: color 0.3s ease;
}

.plus-icon {
  font-size: 1.2rem;
  color: rgba(245, 245, 245, 0.3);
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.program-card:not(.primary-card):hover {
  transform: translateY(-8px);
  border-color: rgba(245, 245, 245, 0.08);
  background-color: #1a1a1a;
}

.program-card:not(.primary-card):hover .icon-circle {
  color: #00bfa6;
  background-color: rgba(0, 191, 166, 0.08);
}

.program-card:not(.primary-card):hover .learn-more-btn {
  color: #00bfa6;
}

.program-card:not(.primary-card):hover .plus-icon {
  transform: rotate(90deg);
  color: #00bfa6;
}

.primary-card::after {
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
}

.primary-card .icon-circle {
  background-color: rgba(10, 10, 10, 0.15);
  color: #0a0a0a;
}

.primary-card .age-badge {
  color: rgba(10, 10, 10, 0.6);
  background-color: rgba(10, 10, 10, 0.05);
  border-color: rgba(10, 10, 10, 0.08);
}

.primary-card .program-title {
  color: #0a0a0a;
}

.primary-card .program-desc {
  color: rgba(10, 10, 10, 0.65);
}

.primary-card .learn-more-btn {
  color: #0a0a0a;
}

.primary-card .plus-icon {
  color: #0a0a0a;
}

.primary-card:hover {
  transform: translateY(-8px);
  background-color: #00d1b5;
  border-color: #00d1b5;
}

.primary-card:hover .icon-circle {
  color: #f5f5f5;
  background-color: #0a0a0a;
}

@media (max-width: 1024px) {
  .cards-layout {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    align-items: stretch;
  }

  .nursery-card,
  .primary-card,
  .junior-card,
  .senior-card {
    height: 340px;
  }
}

@media (max-width: 600px) {
  .programs-section {
    padding: 80px 16px;
  }

  .section-title {
    font-size: 2.4rem;
  }

  .cards-layout {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .nursery-card,
  .primary-card,
  .junior-card,
  .senior-card {
    height: auto;
    min-height: 260px;
  }
}
</style> -->
<template>
  <section class="programs-section">
    <div class="programs-container">
      <div class="programs-header">
        <h2 class="section-title">Academic Programmes</h2>
        <p class="section-subtitle">
          We offer a complete academic journey tailored to different developmental stages, combining
          structural discipline with a forward-thinking curriculum.
        </p>
      </div>

      <div class="cards-layout" ref="cardsContainer">
        <div class="program-card card-nursery sequential-rise">
          <div class="card-top">
            <div class="icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                />
                <path d="M12 6v12M6 12h12" />
              </svg>
            </div>
            <span class="age-badge">Ages 2–5</span>
          </div>
          <div class="card-bottom">
            <h3 class="program-title">Nursery School</h3>
            <p class="program-desc">
              Sensory learning, early literacy, numeracy foundations, and creative cognitive play
              blocks.
            </p>
            <a href="#" class="learn-more-btn">
              <span>Learn more</span>
              <span class="plus-icon">+</span>
            </a>
          </div>
        </div>

        <div class="program-card card-primary sequential-rise">
          <div class="card-top">
            <div class="icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <span class="age-badge">Ages 6–11</span>
          </div>
          <div class="card-bottom">
            <h3 class="program-title">Primary School</h3>
            <p class="program-desc">
              Core sciences, quantitative reasoning, foundational technology, and behavioral
              development.
            </p>
            <a href="#" class="learn-more-btn">
              <span>Learn more</span>
              <span class="plus-icon">+</span>
            </a>
          </div>
        </div>

        <div class="program-card card-junior sequential-rise">
          <div class="card-top">
            <div class="icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <span class="age-badge">Ages 12–14</span>
          </div>
          <div class="card-bottom">
            <h3 class="program-title">Junior Secondary</h3>
            <p class="program-desc">
              Introductory technical theory, critical research essays, basic algebra, and local
              linguistics.
            </p>
            <a href="#" class="learn-more-btn">
              <span>Learn more</span>
              <span class="plus-icon">+</span>
            </a>
          </div>
        </div>

        <div class="program-card card-senior sequential-rise">
          <div class="card-top">
            <div class="icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <span class="age-badge">Ages 15–18</span>
          </div>
          <div class="card-bottom">
            <h3 class="program-title">Senior Secondary</h3>
            <p class="program-desc">
              Advanced STEM specializations, humanities, digital arts, and complete WAEC/NECO drill
              profiles.
            </p>
            <a href="#" class="learn-more-btn">
              <span>Learn more</span>
              <span class="plus-icon">+</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cardsContainer = ref(null)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('start-rise-animation')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )

  if (cardsContainer.value) {
    observer.observe(cardsContainer.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap');

.programs-section {
  background-color: var(--bg-primary);
  padding: 140px 24px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

.programs-container {
  max-width: 1200px;
  margin: 0 auto;
}

.programs-header {
  max-width: 600px;
  margin-bottom: 80px;
}

.section-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 24px 0;
  letter-spacing: -1.5px;
  transition: color 0.3s ease;
}

.section-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
  transition: color 0.3s ease;
}

.cards-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  align-items: flex-end;
}

.program-card {
  background-color: var(--bg-surface);
  border-radius: 32px;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--border-subtle);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  opacity: 0;
  transform: translateY(60px);
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.3s ease,
    background-color 0.3s ease;
}

.card-nursery {
  height: 360px;
}

.card-primary {
  height: 410px;
}

.card-junior {
  height: 460px;
}

.card-senior {
  height: 510px;
}

.start-rise-animation .sequential-rise {
  opacity: 1;
  transform: translateY(0);
}

.start-rise-animation .sequential-rise:nth-child(1) {
  transition:
    opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s,
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s,
    border-color 0.3s ease,
    background-color 0.3s ease;
}

.start-rise-animation .sequential-rise:nth-child(2) {
  transition:
    opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s,
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s,
    border-color 0.3s ease,
    background-color 0.3s ease;
}

.start-rise-animation .sequential-rise:nth-child(3) {
  transition:
    opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s,
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s,
    border-color 0.3s ease,
    background-color 0.3s ease;
}

.start-rise-animation .sequential-rise:nth-child(4) {
  transition:
    opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s,
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s,
    border-color 0.3s ease,
    background-color 0.3s ease;
}

.program-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, var(--accent-tint) 0%, transparent 70%);
  pointer-events: none;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: all 0.4s ease;
}

.icon-circle svg {
  width: 20px;
  height: 20px;
}

.age-badge {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-muted);
  background-color: var(--border-subtle);
  padding: 6px 14px;
  border-radius: 100px;
  border: 1px solid var(--border-subtle);
}

.card-bottom {
  display: flex;
  flex-direction: column;
}

.program-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 12px 0;
  letter-spacing: -0.3px;
  transition: color 0.3s ease;
}

.program-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0 0 28px 0;
  transition: color 0.3s ease;
}

.learn-more-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-main);
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: color 0.3s ease;
}

.plus-icon {
  font-size: 1.2rem;
  color: var(--text-muted);
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.program-card:hover {
  transform: translateY(-8px) !important;
  border-color: var(--accent);
}

[data-theme='dark'] .program-card:hover {
  background-color: #1a1a1a;
}

[data-theme='light'] .program-card:hover {
  background-color: #ffffff;
  box-shadow: 0 12px 30px rgba(10, 10, 10, 0.04);
}

.program-card:hover .icon-circle {
  color: var(--accent);
  background-color: var(--accent-tint);
}

.program-card:hover .learn-more-btn {
  color: var(--accent);
}

.program-card:hover .plus-icon {
  transform: rotate(90deg);
  color: var(--accent);
}

@media (max-width: 1024px) {
  .cards-layout {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    align-items: flex-end;
  }

  .card-nursery {
    height: 340px;
  }

  .card-primary {
    height: 370px;
  }

  .card-junior {
    height: 400px;
  }

  .card-senior {
    height: 430px;
  }
}

@media (max-width: 600px) {
  .programs-section {
    padding: 80px 16px;
  }

  .section-title {
    font-size: 2.4rem;
  }

  .cards-layout {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card-nursery,
  .card-primary,
  .card-junior,
  .card-senior {
    height: auto;
    min-height: 260px;
  }
}
</style>
