<template>
  <section id="primary" class="primary-section">
    <div class="primary-container">
      <!-- Section Header -->
      <div class="primary-header">
        <div class="stage-badge">
          <span class="badge-dot"></span>
          <span class="stage-text">Key Stage 1 & 2</span>
        </div>
        <h2 class="main-title">Primary School Section</h2>
        <p class="section-subtitle">
          Bridging foundational curiosity with structured academic depth. Our primary curriculum
          builds advanced literacy, empirical mathematical reasoning, and technological fluency.
        </p>
      </div>

      <!-- Editorial Split Layout System -->
      <div class="split-layout-engine">
        <!-- Left Side: Core Metric Canvas Block -->
        <div class="metric-focus-box">
          <span class="context-tag">Academic Target</span>
          <h3 class="focus-heading">Building Intellectual Autonomy</h3>
          <p class="focus-desc">
            Our primary tier focuses on cultivating deep analytical habits. Students do not just
            memorize formulas; they explore the logic beneath them through collaborative project
            blocks and specialized laboratory practice.
          </p>

          <div class="quick-specs-row">
            <div class="spec-item">
              <span class="spec-val">6-11</span>
              <span class="spec-lbl">Age Spectrum</span>
            </div>
            <div class="spec-item">
              <span class="spec-val">100%</span>
              <span class="spec-lbl">Continuous Assessment</span>
            </div>
          </div>
        </div>

        <!-- Right Side: Interactive Editorial Curriculum Accordion -->
        <div class="curriculum-accordion-list">
          <span class="context-tag">Curriculum Focus Areas</span>

          <div
            v-for="(subject, index) in primarySubjects"
            :key="subject.id"
            class="accordion-item"
            :class="{ 'is-expanded': activeSubjectIndex === index }"
            @mouseenter="activeSubjectIndex = index"
          >
            <!-- Fixed Visible Header Row -->
            <div class="accordion-header">
              <div class="header-left">
                <span class="row-index">0{{ index + 1 }}</span>
                <h4 class="subject-title">{{ subject.title }}</h4>
              </div>
              <div class="toggle-indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>

            <!-- Animated Reveal Body Panel -->
            <div class="accordion-body">
              <div class="body-inner-content">
                <p class="subject-desc">{{ subject.desc }}</p>
                <div class="topics-pills-wrap">
                  <span v-for="topic in subject.focusTopics" :key="topic" class="topic-pill">
                    {{ topic }}
                  </span>
                </div>
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

const activeSubjectIndex = ref(0) // Default focus to the first subject row

// Structured real database data structure model for clean API binding later
const primarySubjects = ref([
  {
    id: 'pri-sub-1',
    title: 'Mathematical Mastery',
    desc: 'Focusing on problem-solving operations, introductory fraction models, spatial geometry, and quantitative data collection methods.',
    focusTopics: [
      'Fractions & Ratios',
      'Spatial Geometry',
      'Data Handling',
      'Mental Math Optimization',
    ],
  },
  {
    id: 'pri-sub-2',
    title: 'Scientific Inquiry & Tech',
    desc: 'Pupils transition from observing nature to formulating empirical experiments, handling environmental variables, and writing computational logic block code.',
    focusTopics: [
      'Experimental Design',
      'Environmental Systems',
      'Block Coding Basics',
      'Applied Mechanics',
    ],
  },
  {
    id: 'pri-sub-3',
    title: 'Language & Critical Reading',
    desc: 'Advanced comprehension techniques, structural creative essay writing, public rhetoric drills, and regular engagement with canonical classical literature.',
    focusTopics: [
      'Creative Composition',
      'Classical Literature',
      'Rhetorical Speech',
      'Advanced Grammar',
    ],
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.primary-section {
  background-color: var(--bg-primary);
  padding: 80px 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease;
  scroll-margin-top: 100px;
}

.primary-container {
  max-width: 1200px;
  width: 100%;
}

/* Header Typography Setup */
.primary-header {
  max-width: 760px;
  margin-bottom: 72px;
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

.stage-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background-color: var(--accent);
  border-radius: 50%;
}

.badge-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.main-title {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(2.2rem, 4.5vw, 3rem);
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.15;
  margin: 0 0 20px 0;
  letter-spacing: -1.5px;
  transition: color 0.3s ease;
}

.section-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0;
  transition: color 0.3s ease;
}

/* Split Engineering System */
.split-layout-engine {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 64px;
  align-items: start;
}

/* Left Side: Solid Monolithic Focus Box */
.metric-focus-box {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 28px;
  padding: 48px;
  box-sizing: border-box;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

[data-theme='light'] .metric-focus-box {
  box-shadow: 0 8px 30px rgba(10, 10, 10, 0.01);
}

.context-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 24px;
  display: block;
}

.focus-heading {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.25;
  margin: 0 0 16px 0;
  letter-spacing: -0.5px;
}

.focus-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 40px 0;
}

.quick-specs-row {
  display: flex;
  gap: 40px;
  border-top: 1px solid var(--border-subtle);
  padding-top: 32px;
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.spec-val {
  font-family: 'DM Sans', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1;
}

.spec-lbl {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Right Side: Accordion Mechanics */
.curriculum-accordion-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.accordion-item {
  border-bottom: 1px solid var(--border-subtle);
  padding: 24px 0;
  transition: border-color 0.3s ease;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.row-index {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent);
  opacity: 0.8;
}

.subject-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
  letter-spacing: -0.3px;
  transition: color 0.3s ease;
}

.toggle-indicator {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.toggle-indicator svg {
  width: 14px;
  height: 14px;
  transition: transform 0.4s ease;
}

/* Opened Dynamic Class States */
.accordion-item.is-expanded {
  border-color: var(--accent);
}

.accordion-item.is-expanded .subject-title {
  color: var(--text-main);
}

.accordion-item.is-expanded .toggle-indicator {
  border-color: var(--accent);
  background-color: var(--accent-tint);
  color: var(--accent);
}

.accordion-item.is-expanded .toggle-indicator svg {
  transform: rotate(135deg); /* Flips plus sign neatly into a close sign */
}

/* Body Panel Transitions */
.accordion-body {
  display: grid;
  grid-template-rows: 0fr; /* CSS grid track trick for pure CSS height animation rendering */
  transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.accordion-item.is-expanded .accordion-body {
  grid-template-rows: 1fr;
}

.body-inner-content {
  overflow: hidden;
  padding-left: 48px; /* Perfectly realigned to step clear of the index values column */
}

.subject-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.98rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 16px 0 20px 0;
}

.topics-pills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.topic-pill {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  padding: 6px 14px;
  border-radius: 100px;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.accordion-item.is-expanded .topic-pill {
  border-color: var(--border-subtle);
}

/* Fluid Adaptive Media Scaling Layer */
@media (max-width: 992px) {
  .split-layout-engine {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 600px) {
  .primary-section {
    padding: 80px 16px;
  }

  .primary-header {
    margin-bottom: 48px;
  }

  .metric-focus-box {
    padding: 32px 24px;
    border-radius: 20px;
  }

  .header-left {
    gap: 16px;
  }

  .subject-title {
    font-size: 1.15rem;
  }

  .body-inner-content {
    padding-left: 36px;
  }

  .quick-specs-row {
    gap: 24px;
  }

  .spec-val {
    font-size: 1.8rem;
  }
}
</style>
