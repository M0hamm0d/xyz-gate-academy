<template>
  <section id="nursery" class="nursery-section">
    <div class="nursery-container">
      <!-- Left Column: Editorial Sticky Header -->
      <div class="nursery-sticky-header">
        <div class="stage-badge">
          <span class="stage-num">01</span>
          <span class="stage-title">Early Years Foundation</span>
        </div>
        <h2 class="section-headline">Nursery Section</h2>
        <p class="section-intro">
          A premium, sensory-rich atmosphere designed to cultivate early cognitive pathways,
          linguistic structures, and fine motor coordination in a highly structured, caring
          environment.
        </p>
      </div>

      <!-- Right Column: Asymmetric Apple-Style Bento Grid -->
      <div class="nursery-bento-grid">
        <!-- Large Core Focus Card -->
        <div class="bento-card col-span-2 primary-focus-card">
          <div class="card-text-panel">
            <span class="pillar-tag">Core Methodology</span>
            <h3 class="card-title">Play-Based, Structure-Driven Learning</h3>
            <p class="card-body-text">
              We seamlessly merge independent spatial discovery with foundational curriculum
              milestones. Our early years pupils build early mathematical concepts and phonetic
              confidence through intentional, sensory-rich engagement.
            </p>
          </div>
          <div class="card-media-panel">
            <img
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80"
              alt="Premium educational learning materials"
              class="bento-media"
            />
          </div>
        </div>

        <!-- Metric Card 1: Ratio -->
        <div class="bento-card stat-card">
          <div class="stat-inner">
            <span class="stat-number">1:5</span>
            <h4 class="stat-label">Pupil-to-Teacher Ratio</h4>
            <p class="stat-desc">
              Ensuring uncompromised individual monitoring, emotional support, and progress safety
              tracking.
            </p>
          </div>
        </div>

        <!-- Metric Card 2: Age Scope -->
        <div class="bento-card stat-card">
          <div class="stat-inner">
            <span class="stat-number">2-5</span>
            <h4 class="stat-label">Age Cohort Range</h4>
            <p class="stat-desc">
              Targeted developmental tracks tailored carefully to specific brain and fine motor
              growth stages.
            </p>
          </div>
        </div>

        <!-- Full-Width Dynamic Pillars List Card -->
        <div class="bento-card col-span-2 framework-card">
          <span class="pillar-tag">Academic Framework</span>
          <h3 class="card-title-small">Key Developmental Pillars</h3>

          <div class="pillars-list">
            <div v-for="pillar in developmentalPillars" :key="pillar.title" class="pillar-item">
              <div class="pillar-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="pillar-content">
                <h4 class="pillar-name">{{ pillar.title }}</h4>
                <p class="pillar-desc">{{ pillar.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Real backend-ready array for key programmatic curriculum pillars
const developmentalPillars = ref([
  {
    title: 'Phonics & Early Literacy',
    desc: 'Synthetic phonics introduction using global auditory tracking to decode letter-sound relationships confidently.',
  },
  {
    title: 'Quantitative Logic',
    desc: 'Introduction to spatial awareness, basic matching sequences, numbers, and weight attributes via tactile items.',
  },
  {
    title: 'Motor Skills & Coordination',
    desc: 'Targeted indoor/outdoor physical movement routines aimed at stabilizing pencil grips and fundamental balance structures.',
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.nursery-section {
  background-color: var(--bg-primary);
  padding: 80px 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease;
  /* Extra scroll margin to clear floating header correctly */
  scroll-margin-top: 100px;
}

.nursery-container {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 64px;
}

/* Left Sticky Column Architecture */
.nursery-sticky-header {
  position: relative;
  height: max-content;
}

@media (min-width: 993px) {
  .nursery-sticky-header {
    position: sticky;
    top: 140px; /* Locks beautifully beside grid components as you scroll past */
  }
}

.stage-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--accent-tint);
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 24px;
}

.stage-num {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent);
}

.stage-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.section-headline {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.15;
  margin: 0 0 20px 0;
  letter-spacing: -1.5px;
  transition: color 0.3s ease;
}

.section-intro {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0;
  transition: color 0.3s ease;
}

/* Right Asymmetric Apple Bento Grid Engine */
.nursery-bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
}

.col-span-2 {
  grid-column: span 2;
}

/* Individual Card Base Frame */
.bento-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 28px;
  padding: 40px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;
}

[data-theme='light'] .bento-card {
  box-shadow: 0 8px 30px rgba(10, 10, 10, 0.02);
}

.bento-card:hover {
  border-color: var(--accent);
}

.pillar-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
  display: block;
}

.card-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.25;
  margin: 0 0 16px 0;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;
}

.card-title-small {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 32px 0;
  letter-spacing: -0.3px;
}

.card-body-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

/* Splitting text/media sections on large primary layout elements */
.primary-focus-card {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 32px;
  padding-right: 0;
  padding-bottom: 0;
  align-items: end;
}

.card-text-panel {
  padding-bottom: 40px;
}

.card-media-panel {
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  overflow: hidden;
  border-left: 1px solid var(--border-subtle);
  border-top: 1px solid var(--border-subtle);
}

.bento-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(95%) contrast(101%);
}

/* Stat Metrics Design Structures */
.stat-card {
  justify-content: center;
  min-height: 220px;
}

.stat-inner {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-family: 'DM Sans', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1;
  margin-bottom: 12px;
  letter-spacing: -1.5px;
}

.stat-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 8px 0;
}

.stat-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

/* Framework List Matrix Alignment rules */
.pillars-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.pillar-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.pillar-icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: var(--accent-tint);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.pillar-icon svg {
  width: 14px;
  height: 14px;
}

.pillar-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 4px 0;
}

.pillar-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

/* Dynamic Media Queries Responsive Breakdown Architecture */
@media (max-width: 1100px) {
  .nursery-container {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .nursery-bento-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .col-span-2 {
    grid-column: span 1;
  }

  .bento-card {
    padding: 32px 24px;
    border-radius: 20px;
  }

  .primary-focus-card {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
  }

  .card-text-panel {
    padding-bottom: 0;
  }

  .card-media-panel {
    height: 180px;
    border-radius: 14px;
    border: 1px solid var(--border-subtle);
  }

  .stat-card {
    min-height: auto;
  }

  .stat-number {
    font-size: 3rem;
  }
}

@media (max-width: 600px) {
  .nursery-section {
    padding: 80px 16px;
  }
}
</style>
