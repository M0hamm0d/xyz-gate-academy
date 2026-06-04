<template>
  <section id="how-to-apply" class="apply-section">
    <div class="apply-container">
      <!-- Section Header -->
      <div class="apply-header">
        <h2 class="main-title">How to apply — step by step</h2>
        <p class="section-subtitle">
          A numbered step process showing the full application journey from start to finish.
        </p>
      </div>

      <!-- Stepper Track Window -->
      <div class="stepper-window">
        <div class="steps-track">
          <!-- Continuous Horizontal Connecting Line Framework -->
          <div class="connecting-line-track"></div>

          <!-- Individual Step Nodes Map -->
          <div
            v-for="(step, idx) in applicationJourney"
            :key="step.id"
            class="step-node-card"
            :class="{ 'is-active': activeStep === idx }"
            @mouseenter="activeStep = idx"
          >
            <!-- Step Badge Marker Node sitting exactly on top of the line -->
            <div class="node-marker-wrapper">
              <div class="number-badge-node">
                <span class="node-num">{{ idx + 1 }}</span>
              </div>
            </div>

            <!-- Content Card Panel -->
            <div class="step-content-box">
              <span class="duration-tag">{{ step.estimatedTime }}</span>
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Footer Trigger Callout -->
      <div class="apply-footer-action">
        <a href="#portal" class="btn-primary-action">
          Apply Now
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
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeStep = ref(0) // Tracks hovered position state

// Real backend-ready workflow data array containing step details
const applicationJourney = ref([
  {
    id: 'step-1',
    title: 'Download form',
    desc: 'Get the admission form online or from the administrative office.',
    estimatedTime: 'Takes 5 mins',
  },
  {
    id: 'step-2',
    title: 'Fill & submit',
    desc: 'Complete all sections carefully and attach required documents.',
    estimatedTime: '1 - 2 days',
  },
  {
    id: 'step-3',
    title: 'Entrance test',
    desc: 'Child sits a short assessment testing core logic across English & Maths.',
    estimatedTime: 'Scheduled date',
  },
  {
    id: 'step-4',
    title: 'Interview',
    desc: 'Brief interactive parent & child interview session with the principal.',
    estimatedTime: '30 mins session',
  },
  {
    id: 'step-5',
    title: 'Offer letter',
    desc: 'Receive formal acceptance letters and process payment to secure your place.',
    estimatedTime: 'Final step',
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.apply-section {
  background-color: var(--bg-primary);
  padding: 80px 24px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.apply-container {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.apply-header {
  max-width: 700px;
  margin-bottom: 80px;
}

.main-title {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.2;
  margin: 0 0 16px 0;
  letter-spacing: -1px;
}

.section-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

/* Stepper Window Architecture matching image_e1c967.jpg */
.stepper-window {
  width: 100%;
  position: relative;
}

@media (max-width: 1100px) {
  .stepper-window {
    overflow-x: auto;
    padding: 20px 4px 40px;
    -webkit-overflow-scrolling: touch;
  }
  .stepper-window::-webkit-scrollbar {
    display: none; /* Hide scrolling bars to keep layout clean */
  }
}

.steps-track {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  min-width: 1100px; /* Locks geometry on desktop fields */
}

/* Structural Continuous Line Indicator Vector */
.connecting-line-track {
  position: absolute;
  top: 24px; /* Centers vector perfectly right through the numeric badges */
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--border-subtle);
  z-index: 1;
}

/* Card Nodes Block Structure */
.step-node-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  position: relative;
  z-index: 2;
  cursor: pointer;
}

.node-marker-wrapper {
  margin-bottom: 28px;
  background-color: var(--bg-primary); /* Masks line track directly beneath the bubble */
  padding: 0 12px;
  transition: background-color 0.3s ease;
}

.number-badge-node {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--bg-surface);
  border: 2px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.node-num {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-muted);
  transition: color 0.3s ease;
}

/* Structural Active Hover States */
.step-node-card:hover .number-badge-node,
.step-node-card.is-active .number-badge-node {
  background-color: var(--accent); /* Electric Teal Brand Action */
  border-color: var(--accent);
  transform: scale(1.05);
  box-shadow: 0 0 16px var(--accent-tint);
}

.step-node-card:hover .node-num,
.step-node-card.is-active .node-num {
  color: #0a0a0a; /* Keeps digit readable over bright focus color */
}

/* Content Details Presentation Box */
.step-content-box {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.duration-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.step-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 10px 0;
  letter-spacing: -0.3px;
}

.step-description {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

/* Action Execution Base Layout Row */
.apply-footer-action {
  display: flex;
  justify-content: center;
  margin-top: 72px;
  width: 100%;
}

.btn-primary-action {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  background-color: var(--text-main);
  color: var(--bg-primary);
  border: 1px solid var(--text-main);
  padding: 16px 40px;
  border-radius: 100px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

[data-theme='light'] .btn-primary-action {
  background-color: #0a0a0a;
  color: #f5f5f5;
  border-color: #0a0a0a;
  box-shadow: 0 8px 24px rgba(10, 10, 10, 0.03);
}

.btn-primary-action svg {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.btn-primary-action:hover {
  background-color: transparent;
  color: var(--text-main);
  transform: translateY(-2px);
}

[data-theme='light'] .btn-primary-action:hover {
  color: #0a0a0a;
}

.btn-primary-action:hover stroke {
  color: var(--accent);
}

.btn-primary-action:hover svg {
  transform: translateX(4px);
}

/* Mobile responsive stacking rules for viewport integrity */
@media (max-width: 768px) {
  .apply-section {
    padding: 80px 16px;
  }

  .apply-header {
    margin-bottom: 48px;
  }
}
</style>
