<template>
  <section id="our-story" class="story-section">
    <div class="story-container">
      <div class="story-header">
        <div class="section-badge">
          <span class="badge-index">01</span>
          <span class="badge-divider">/</span>
          <span class="badge-text">Our Journey</span>
        </div>
        <h2 class="main-title">The Foundations of Academic Excellence</h2>
      </div>

      <div class="timeline-track">
        <div
          class="timeline-card"
          :class="{ 'is-active': activeEra === 1 }"
          @mouseenter="activeEra = 1"
        >
          <div class="card-minimized-label">
            <span class="era-number">2012</span>
            <span class="vertical-title">The Foundation</span>
          </div>
          <div class="card-expanded-content">
            <span class="content-number">2012</span>
            <h3 class="era-heading">Inception & Vision</h3>
            <p class="era-paragraph">
              XYZ Gate Academy opened its doors with a single early-learning cohort. Founded on the
              principle of character-driven education, our initial facility focused entirely on
              foundational literacy and early child development.
            </p>
          </div>
        </div>

        <div
          class="timeline-card"
          :class="{ 'is-active': activeEra === 2 }"
          @mouseenter="activeEra = 2"
        >
          <div class="card-minimized-label">
            <span class="era-number">2016</span>
            <span class="vertical-title">Expansion</span>
          </div>
          <div class="card-expanded-content">
            <span class="content-number">2016</span>
            <h3 class="era-heading">Secondary Expansion</h3>
            <p class="era-paragraph">
              Responding to community trust, we broke ground on our senior campus blocks. This
              milestone marked the launch of our fully accredited Secondary school slots,
              specialized science laboratories, and advanced art studios.
            </p>
          </div>
        </div>

        <div
          class="timeline-card"
          :class="{ 'is-active': activeEra === 3 }"
          @mouseenter="activeEra = 3"
        >
          <div class="card-minimized-label">
            <span class="era-number">2021</span>
            <span class="vertical-title">The STEM Shift</span>
          </div>
          <div class="card-expanded-content">
            <span class="content-number">2021</span>
            <h3 class="era-heading">The Tech & STEM Integration</h3>
            <p class="era-paragraph">
              We completely overhauled our academic curriculum to prioritize technological literacy.
              This era saw the installation of our high-performance computing labs, foundational
              coding workshops, and initial technical workshop tracks.
            </p>
          </div>
        </div>

        <div
          class="timeline-card"
          :class="{ 'is-active': activeEra === 4 }"
          @mouseenter="activeEra = 4"
        >
          <div class="card-minimized-label">
            <span class="era-number">2026</span>
            <span class="vertical-title">Modern Horizon</span>
          </div>
          <div class="card-expanded-content">
            <span class="content-number">2026</span>
            <h3 class="era-heading">A Global Standard</h3>
            <p class="era-paragraph">
              Today, XYZ Gate Academy stands as a premier hybrid ecosystem. Merging strict
              behavioral accountability with elite modern curriculum standards, we actively prepare
              students for both regional excellence and international examinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Set the second card active by default to replicate the presentation weight in image_904dfa.png
const activeEra = ref(2)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.story-section {
  background-color: var(--bg-primary);
  padding: 80px 24px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: background-color 0.3s ease;
  /* Extra scroll margin ensures the bar is fully visible when using hash links */
  scroll-margin-top: 100px;
}

.story-container {
  max-width: 1200px;
  margin: 0 auto;
}

.story-header {
  max-width: 700px;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.section-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
}

.badge-index {
  color: var(--text-main);
  opacity: 0.4;
}

.badge-divider {
  color: var(--accent);
}

.badge-text {
  color: var(--text-main);
  text-transform: uppercase;
}

.main-title {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.2;
  margin: 0;
  letter-spacing: -1.5px;
  transition: color 0.3s ease;
}

/* Accordion Multi-Card Layout Grid */
.timeline-track {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  min-height: 400px;
  width: 100%;
}

/* Base Style for All Timeline Pillars */
.timeline-card {
  position: relative;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 28px;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  transition:
    all 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.3s ease;
}

[data-theme='light'] .timeline-card {
  box-shadow: 0 4px 16px rgba(10, 10, 10, 0.01);
}

/* Minimized Label Element (Rotated text column) */
.card-minimized-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 40px 24px;
  width: 100%;
  box-sizing: border-box;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.era-number {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
}

.vertical-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-muted);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  white-space: nowrap;
}

/* Container for Detailed Content Blocks */
.card-expanded-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 0;
  pointer-events: none;
  transform: translateX(20px);
  transition:
    opacity 0.3s ease,
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.content-number {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 24px;
}

.era-heading {
  font-family: 'DM Sans', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 16px 0;
  letter-spacing: -0.5px;
}

.era-paragraph {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
  max-width: 440px;
}

/* Layout Math for Active Cards */
.timeline-card.is-active {
  background-color: var(--text-main);
  border-color: var(--text-main);
}

/* Light/Dark explicit color swaps for active focus state */
[data-theme='dark'] .timeline-card.is-active {
  background-color: #141414;
  border-color: var(--accent);
}

[data-theme='light'] .timeline-card.is-active {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
}

.timeline-card.is-active .card-minimized-label {
  opacity: 0;
}

.timeline-card.is-active .card-expanded-content {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(0);
  transition-delay: 0.1s;
}

/* Direct Text Inversions inside Focused Context Elements */
[data-theme='light'] .timeline-card.is-active .era-heading {
  color: #f5f5f5;
}

[data-theme='light'] .timeline-card.is-active .era-paragraph {
  color: rgba(245, 245, 245, 0.6);
}

/* Responsive Structural Adjustments */
@media (min-width: 769px) {
  /* Dynamic Flex Allocation Logic based on state */
  .timeline-track {
    display: flex;
  }

  .timeline-card {
    flex: 1;
  }

  .timeline-card.is-active {
    flex: 3;
  }

  .timeline-card:not(.is-active) .card-expanded-content {
    display: none;
  }
}

@media (max-width: 768px) {
  .story-section {
    padding: 80px 16px;
  }

  .timeline-track {
    grid-template-columns: 1fr;
    gap: 16px;
    min-height: auto;
  }

  .timeline-card {
    flex-direction: column;
    min-height: auto;
  }

  .card-minimized-label {
    display: none; /* Hide rotated elements entirely on narrow displays */
  }

  .card-expanded-content {
    position: relative;
    opacity: 1;
    pointer-events: auto;
    transform: none;
    padding: 32px 24px;
  }

  .timeline-card.is-active {
    background-color: var(--bg-surface);
    border-color: var(--accent);
  }

  [data-theme='light'] .timeline-card.is-active {
    background-color: #ffffff;
    border-color: var(--accent);
  }

  [data-theme='light'] .timeline-card.is-active .era-heading {
    color: var(--text-main);
  }

  [data-theme='light'] .timeline-card.is-active .era-paragraph {
    color: var(--text-muted);
  }
}
</style>
