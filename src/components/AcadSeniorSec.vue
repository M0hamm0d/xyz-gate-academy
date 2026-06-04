<template>
  <section id="senior-secondary" class="sss-section">
    <div class="sss-container">
      <!-- Premium Spatial Section Header -->
      <div class="sss-header">
        <div class="stage-badge">
          <span class="badge-glow"></span>
          <span class="badge-text">Terminal Key Stage 4 (SSS 1-3)</span>
        </div>
        <h2 class="main-title">Senior Secondary School</h2>
        <p class="section-subtitle">
          Elite career-path streaming tailored to maximize performance outcomes in the West African
          Senior School Certificate Examination (WASSCE) and NECO frameworks.
        </p>
      </div>

      <!-- Immersive Matrix Track Canvas Wrapper -->
      <div class="matrix-window">
        <div class="matrix-track-board">
          <!-- Loop through Career Stream Arrays -->
          <div
            v-for="(stream, idx) in sssCurriculum"
            :key="stream.id"
            class="stream-matrix-card"
            :class="{ 'is-focused': activeStreamIdx === idx }"
            @mouseenter="activeStreamIdx = idx"
          >
            <!-- Background Identity Watermark Label -->
            <div class="watermark-number">0{{ idx + 1 }}</div>

            <!-- Header Block Layout -->
            <div class="stream-header-block">
              <span class="stream-tag">{{ stream.tag }}</span>
              <h3 class="stream-headline">{{ stream.title }}</h3>
              <p class="stream-paragraph">{{ stream.desc }}</p>
            </div>

            <!-- Core Subjects Matrix Grid List -->
            <div class="stream-details-panel">
              <h4 class="panel-label">Core Examination Subjects</h4>
              <div class="subjects-matrix">
                <div v-for="subject in stream.subjects" :key="subject" class="matrix-pill-item">
                  <div class="pill-bullet"></div>
                  <span class="pill-text">{{ subject }}</span>
                </div>
              </div>

              <!-- Compulsory Examination Anchors Footer -->
              <div class="compulsory-footer">
                <span class="footer-label">Cross-Cutting Core Enforcements:</span>
                <p class="footer-tags">
                  English Language • Mathematics • Civic Education • Data Processing
                </p>
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

const activeStreamIdx = ref(0) // Default stream focus tracking matrix initialized to Science

// Real backend-ready Nigerian NERDC & WAEC aligned data structures array
const sssCurriculum = ref([
  {
    id: 'sss-stream-1',
    tag: 'STEM Tier',
    title: 'Pure & Applied Sciences',
    desc: 'Intensive empirical testing modules, structural laboratory mechanics, and mathematics foundations configured for medical, computing, and engineering pathways.',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Further Mathematics', 'Agricultural Science'],
  },
  {
    id: 'sss-stream-2',
    tag: 'Business Tier',
    title: 'Commercial Studies',
    desc: 'Focusing on mercantile management analytics, financial accounting audits, macroeconomics data tracking, and institutional asset deployment structures.',
    subjects: ['Financial Accounting', 'Commerce', 'Economics', 'Business Methods', 'Marketing'],
  },
  {
    id: 'sss-stream-3',
    tag: 'Literary Tier',
    title: 'Humanities & Arts',
    desc: 'Cultivating advanced socio-historical critique, classical legal history, creative media critique, and multi-syntax local language prose analysis.',
    subjects: [
      'Literature-in-English',
      'Government / History',
      'Christian / Islamic Religious Studies',
      'Nigerian Languages',
    ],
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.sss-section {
  background-color: var(--bg-primary);
  padding: 80px 24px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: background-color 0.3s ease;
  scroll-margin-top: 100px;
}

.sss-container {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

/* Premium Spatial Header Setup */
.sss-header {
  max-width: 800px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stage-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--accent-tint);
  padding: 8px 16px;
  border-radius: 100px;
  margin-bottom: 28px;
}

.badge-glow {
  width: 8px;
  height: 8px;
  background-color: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 12px var(--accent);
}

.badge-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.main-title {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(2.4rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.15;
  margin: 0 0 24px 0;
  letter-spacing: -1.8px;
  transition: color 0.3s ease;
}

.section-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0;
  transition: color 0.3s ease;
}

/* Immersive Matrix Grid Board Mechanics */
.matrix-window {
  width: 100%;
}

.matrix-track-board {
  display: flex;
  gap: 24px;
  width: 100%;
  min-height: 520px;
}

/* Core Column Component Frame Styling */
.stream-matrix-card {
  flex: 1; /* Elastic sizing column calculation element layout basic rule */
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 32px;
  padding: 48px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    flex 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s ease,
    background-color 0.3s ease;
  cursor: pointer;
}

[data-theme='light'] .stream-matrix-card {
  box-shadow: 0 10px 32px rgba(10, 10, 10, 0.015);
}

/* Giant Subtle Card Vector Background Index Watermark */
.watermark-number {
  position: absolute;
  top: -20px;
  right: -10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14rem;
  font-weight: 700;
  color: var(--text-main);
  opacity: 0.02;
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

/* Dynamic Width Sizing Inversion States */
.stream-matrix-card.is-focused {
  flex: 2.2; /* Expands focused career lane cleanly on user viewport hover tracking */
  border-color: var(--accent);
  background-color: var(--bg-surface);
}

/* Default state for unexpanded elements details container masking */
.stream-details-panel {
  opacity: 0;
  transform: translateY(15px);
  pointer-events: none;
  transition:
    opacity 0.3s ease,
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  height: 0;
  overflow: hidden;
}

/* Reveal panel data only inside focused stream card block dimensions */
.stream-matrix-card.is-focused .stream-details-panel {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  height: auto;
  margin-top: 40px;
  border-top: 1px solid var(--border-subtle);
  padding-top: 32px;
  transition-delay: 0.15s;
}

/* Card Header Components */
.stream-header-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 460px;
}

.stream-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 16px;
}

.stream-headline {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 16px 0;
  letter-spacing: -0.6px;
  transition: color 0.3s ease;
}

.stream-paragraph {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

/* Interior Core Focus Target Matrix Array Grid */
.panel-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-main);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 20px 0;
}

.subjects-matrix {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.matrix-pill-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  padding: 12px 20px;
  border-radius: 16px;
}

.pill-bullet {
  width: 6px;
  height: 6px;
  background-color: var(--accent);
  border-radius: 50%;
}

.pill-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-main);
}

/* Fixed Base Core Footer Blocks */
.compulsory-footer {
  margin-top: 32px;
  border-top: 1px dashed var(--border-subtle);
  padding-top: 20px;
}

.footer-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 6px;
}

.footer-tags {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0;
  font-weight: 500;
}

/* Responsive Structural Breakdown Rules Engine for Tablets & Mobile Viewports */
@media (max-width: 992px) {
  .matrix-track-board {
    flex-direction: column;
    min-height: auto;
    gap: 16px;
  }

  .stream-matrix-card {
    flex: none !important; /* Disables flex width engine matching rules to fall back to block columns */
    width: 100%;
    padding: 32px 24px;
    border-radius: 24px;
  }

  .stream-details-panel {
    opacity: 1 !important;
    transform: none !important;
    height: auto !important;
    overflow: visible !important;
    margin-top: 32px;
    border-top: 1px solid var(--border-subtle);
    padding-top: 24px;
  }

  .subjects-matrix {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .watermark-number {
    display: none; /* Strip vector noise footprint on compact views */
  }
}

@media (max-width: 600px) {
  .sss-section {
    padding: 80px 16px;
  }

  .sss-header {
    margin-bottom: 48px;
  }
}
</style>
