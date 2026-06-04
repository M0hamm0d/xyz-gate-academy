<template>
  <section id="faq" class="faq-section">
    <div class="faq-container">
      <!-- Left Column: Editorial Info Panel -->
      <div class="faq-left-panel">
        <div class="section-badge">
          <span class="badge-dot"></span>
          <span class="badge-text">Frequently Asked Questions</span>
        </div>
        <h2 class="main-title">Admissions Help Desk</h2>
        <p class="section-subtitle">
          Have questions regarding the enrollment track, timelines, or structural policies? Explore
          our compiled baseline responses or connect directly with our desk.
        </p>

        <!-- Dynamic Help Center Redirect Box -->
        <div class="contact-prompt-box">
          <h4 class="prompt-heading">Still need clarification?</h4>
          <p class="prompt-desc">
            Our administrative registry staff is available Monday through Friday to address specific
            entry evaluation inquiries.
          </p>
          <a href="mailto:admissions@sterlinggate.edu.ng" class="btn-prompt-link">
            Contact Admissions Desk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right Column: Interactive Clean Accordion Engine -->
      <div class="faq-right-panel">
        <div
          v-for="(item, index) in faqCollection"
          :key="item.id"
          class="faq-accordion-card"
          :class="{ 'is-revealed': openFaqIndex === index }"
          @click="toggleFaqNode(index)"
        >
          <!-- Trigger Header Block -->
          <div class="faq-header-trigger">
            <h3 class="faq-question-text">{{ item.question }}</h3>
            <div class="faq-icon-bubble">
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

          <!-- Pure CSS Grid Animation Height Body Canvas -->
          <div class="faq-body-container">
            <div class="faq-body-content">
              <p class="faq-answer-paragraph">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openFaqIndex = ref(0)

const toggleFaqNode = (targetIndex) => {
  openFaqIndex.value = openFaqIndex.value === targetIndex ? null : targetIndex
}

// Real backend-ready admissions data array model
const faqCollection = ref([
  {
    id: 'faq-1',
    question: 'When does the admission application cycle open for enrollment?',
    answer:
      'Our official admission path opens in January of every academic year for entry into the subsequent September session. We highly recommend submitting profiles early as class seat allocations across Nursery, Primary, and Secondary blocks are strictly capped to maintain optimal monitoring ratios.',
  },
  {
    id: 'faq-2',
    question: 'Is the entrance examination compulsory for transfer applicants?',
    answer:
      'Yes. All prospective pupils entering Primary 2 up to Senior Secondary classes must sit a diagnostic entrance evaluation covering Quantitative Aptitude, English Studies, and Verbal Logic. This baseline assessment allows us to pinpoint specific developmental metrics before formal classroom entry.',
  },
  {
    id: 'faq-3',
    question: 'Does Sterling Gate Academy offer school fees installment payment options?',
    answer:
      'We operate a structured terminal billing system. While all core school fees are optimally processed before the first day of resume tracking each term, special considerations or multi-child structural concessions can be coordinated directly with our bursary department upon application.',
  },
  {
    id: 'faq-4',
    question: 'What documents are required to complete the submission profile online?',
    answer:
      'Parents must upload a certified clear copy of the child’s birth certificate, recent passport-style photo frames, and verified academic report cards from the preceding two terms of their previous school, alongside matching parental status identification.',
  },
  {
    id: 'faq-5',
    question: 'How are career tracks allocated in the Senior Secondary tier?',
    answer:
      'Streaming into Sciences, Commercial, or Arts tracks occurs at SSS 1. Path allocation is systematically guided by the student’s cumulative performances in the Junior Secondary BECE, combined with direct technical profiling conducted by our resident academic counselors.',
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.faq-section {
  background-color: var(--bg-primary);
  padding: 80px 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.faq-container {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 80px;
  align-items: start;
}

/* Left Panel Informational Sticky Area */
.faq-left-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (min-width: 993px) {
  .faq-left-panel {
    position: sticky;
    top: 140px; /* Locks elegantly alongside the accordion track during scroll tracking */
  }
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--accent-tint);
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 24px;
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
}

.section-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0 0 40px 0;
}

/* Side Action Prompt Block Card */
.contact-prompt-box {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 24px;
  padding: 32px;
  box-sizing: border-box;
  width: 100%;
}

.prompt-heading {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 8px 0;
}

.prompt-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0 0 24px 0;
}

.btn-prompt-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-prompt-link svg {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.btn-prompt-link:hover {
  gap: 12px;
}

.btn-prompt-link:hover svg {
  transform: translateX(2px);
}

/* Right Panel Accordion Structural Engine */
.faq-right-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.faq-accordion-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  padding: 28px 32px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease;
}

.faq-accordion-card:hover {
  border-color: var(--accent);
}

.faq-header-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.faq-question-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
  line-height: 1.4;
  letter-spacing: -0.2px;
}

.faq-icon-bubble {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-icon-bubble svg {
  width: 14px;
  height: 14px;
  transition: transform 0.4s ease;
}

/* Expanded Class State Layout Configuration changes */
.faq-accordion-card.is-revealed {
  border-color: var(--accent);
}

.faq-accordion-card.is-revealed .faq-icon-bubble {
  border-color: var(--accent);
  background-color: var(--accent-tint);
  color: var(--accent);
}

.faq-accordion-card.is-revealed .faq-icon-bubble svg {
  transform: rotate(135deg); /* Flips cleanly from a plus icon into a close icon */
}

/* Body Container Animation Mechanics */
.faq-body-container {
  display: grid;
  grid-template-rows: 0fr; /* CSS grid track height animation engine */
  transition: grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-accordion-card.is-revealed .faq-body-container {
  grid-template-rows: 1fr;
}

.faq-body-content {
  overflow: hidden;
}

.faq-answer-paragraph {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 16px 0 0 0;
  max-width: 680px;
}

/* Fluid responsive mapping rules */
@media (max-width: 992px) {
  .faq-container {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .faq-accordion-card {
    padding: 24px;
  }
}

@media (max-width: 600px) {
  .faq-section {
    padding: 80px 16px;
  }

  .faq-question-text {
    font-size: 1.1rem;
  }

  .faq-answer-paragraph {
    font-size: 0.95rem;
  }

  .contact-prompt-box {
    padding: 24px;
  }
}
</style>
