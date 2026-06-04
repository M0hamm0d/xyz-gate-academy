<template>
  <section id="junior-secondary" class="jss-section">
    <div class="jss-container">
      <div class="jss-left-panel">
        <div class="stage-badge">
          <span class="badge-index">03</span>
          <span class="badge-text">Key Stage 3 (JSS 1-3)</span>
        </div>
        <h2 class="main-headline">Junior Secondary</h2>
        <p class="section-paragraph">
          A rigorous three-year transition period focusing on core cognitive integration, advanced
          sciences, and prevocational studies—fully structured to ensure maximum performance in the
          National and State BECE.
        </p>

        <div class="feature-accent-box">
          <h4 class="accent-title">BECE Preparation Track</h4>
          <p class="accent-desc">
            Continuous mock assessments, standardized practical evaluations, and specialized
            revision cohorts starting from JSS 3.
          </p>
        </div>
      </div>

      <div class="jss-right-panel">
        <div v-for="track in jssCurriculum" :key="track.id" class="curriculum-track-card">
          <div class="card-header-row">
            <div class="icon-frame">
              <svg
                v-if="track.type === 'science'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 4.5h20c0-1-1-3.25-2.5-4.5" />
                <path d="M12 2v14M9 5h6M8 9h8" />
              </svg>
              <svg
                v-else-if="track.type === 'vocational'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                />
              </svg>
              <svg
                v-else
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
            <h3 class="track-title">{{ track.title }}</h3>
          </div>

          <p class="track-description">{{ track.desc }}</p>

          <ul class="subject-sublist">
            <li v-for="sub in track.subjects" :key="sub" class="sublist-item">
              <span class="bullet-dot"></span>
              <span class="subject-name">{{ sub }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Real backend-ready JSS data array aligned with standard NERDC models
const jssCurriculum = ref([
  {
    id: 'jss-1',
    type: 'science',
    title: 'Sciences & Mathematical Logic',
    desc: 'Laying advanced empirical foundations to prepare students for distinct core senior science streams.',
    subjects: ['Mathematics', 'Basic Science', 'Computer Studies / ICT', 'Agricultural Science'],
  },
  {
    id: 'jss-2',
    type: 'vocational',
    title: 'Pre-Vocational & Technical Studies',
    desc: 'Cultivating practical workshop habits, structural design basic rules, and enterprise fundamentals.',
    subjects: ['Basic Technology', 'Home Economics', 'Business Studies'],
  },
  {
    id: 'jss-3',
    type: 'humanities',
    title: 'Humanities & Cultural Expression',
    desc: 'Broadening social awareness, civic responsibility, and deep multilingual syntax comprehension.',
    subjects: [
      'English Studies',
      'Social Studies',
      'Civic Education',
      'Nigerian Languages (Yoruba/Igbo/Hausa)',
    ],
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.jss-section {
  background-color: var(--bg-primary);
  padding: 80px 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease;
  scroll-margin-top: 100px;
}

.jss-container {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 80px;
  align-items: start;
}

/* Left Summary Column Rules */
.jss-left-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (min-width: 993px) {
  .jss-left-panel {
    position: sticky;
    top: 140px;
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

.badge-index {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
}

.badge-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.main-headline {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(2.2rem, 4.5vw, 3rem);
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.15;
  margin: 0 0 20px 0;
  letter-spacing: -1.5px;
  transition: color 0.3s ease;
}

.section-paragraph {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0 0 40px 0;
  transition: color 0.3s ease;
}

.feature-accent-box {
  background-color: var(--bg-surface);
  border-left: 3px solid var(--accent);
  border-top: 1px solid var(--border-subtle);
  border-right: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  border-radius: 0 16px 16px 0;
  padding: 24px;
  box-sizing: border-box;
  width: 100%;
}

.accent-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 8px 0;
}

.accent-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

/* Right Tracks Grid Architecture */
.jss-right-panel {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}

.curriculum-track-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 24px;
  padding: 40px;
  box-sizing: border-box;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

[data-theme='light'] .curriculum-track-card {
  box-shadow: 0 8px 24px rgba(10, 10, 10, 0.01);
}

.curriculum-track-card:hover {
  border-color: var(--accent);
}

.card-header-row {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.icon-frame {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-color: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.icon-frame svg {
  width: 20px;
  height: 20px;
}

.track-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
  letter-spacing: -0.4px;
}

.track-description {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.98rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 28px 0;
}

/* Sub-subjects Unordered Token Tracks */
.subject-sublist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  border-top: 1px solid var(--border-subtle);
  padding-top: 24px;
}

.sublist-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bullet-dot {
  width: 6px;
  height: 6px;
  background-color: var(--border-subtle);
  border-radius: 50%;
  flex-shrink: 0;
  transition: background-color 0.3s ease;
}

.curriculum-track-card:hover .bullet-dot {
  background-color: var(--accent);
}

.subject-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-main);
}

/* Dynamic System Responsive Media Triggers */
@media (max-width: 992px) {
  .jss-container {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 600px) {
  .jss-section {
    padding: 80px 16px;
  }

  .curriculum-track-card {
    padding: 32px 24px;
    border-radius: 20px;
  }

  .subject-sublist {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .card-header-row {
    gap: 16px;
  }

  .track-title {
    font-size: 1.2rem;
  }
}
</style>
