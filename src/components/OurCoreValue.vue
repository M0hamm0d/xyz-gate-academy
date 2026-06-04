<template>
  <section id="mission-vision" class="mv-section">
    <div class="mv-container">
      <!-- Section Header -->
      <div class="mv-header">
        <div class="section-badge">
          <span class="badge-dot"></span>
          <span class="badge-text">Our Core Identity</span>
        </div>
        <h2 class="main-title">Purpose & Directives</h2>
        <p class="section-subtitle">
          The structural values guiding our administrative policies and daily academic standard
          metrics.
        </p>
      </div>

      <!-- Clean Grid with Mobile-Only Horizontal Scroll -->
      <div class="scroll-wrapper">
        <div class="identity-grid">
          <!-- Card 01: Mission -->
          <div class="identity-card">
            <span class="card-label">MISSION</span>
            <p class="card-desc">
              To provide a rigorously balanced academic training atmosphere that integrates
              technical expertise, disciplined structural accountability, and critical reasoning
              frameworks.
            </p>
          </div>

          <!-- Card 02: Vision -->
          <div class="identity-card">
            <span class="card-label">VISION</span>
            <p class="card-desc">
              To grow into the definitive regional benchmark for premium foundational education,
              recognized globally for producing elite ethical leaders equipped for high-performance
              tracks.
            </p>
          </div>

          <!-- Card 03: Motto -->
          <div class="identity-card motto-card">
            <span class="card-label">MOTTO</span>
            <div class="motto-content">
              <p class="large-motto-text">Knowledge, Character, and Sovereign Excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&family=DM+Sans:wght@400;500;700&display=swap');

.mv-section {
  background-color: var(--bg-primary);
  padding: 120px 24px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  scroll-margin-top: 100px;
}

.mv-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Header Setup */
.mv-header {
  max-width: 600px;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  font-size: clamp(2.4rem, 5vw, 3.2rem);
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
  line-height: 1.6;
  margin: 0;
  transition: color 0.3s ease;
}

/* Scroll wrapper layout handling */
.scroll-wrapper {
  width: 100%;
}

/* Flat, balanced 3-column bento configuration */
.identity-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
}

/* Premium Minimalist Card Base Style */
.identity-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 24px;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 240px;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

[data-theme='light'] .identity-card {
  box-shadow: 0 8px 24px rgba(10, 10, 10, 0.02);
}

.card-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-main);
  opacity: 0.8;
  letter-spacing: 1.5px;
  margin-bottom: 28px;
  text-transform: uppercase;
}

.card-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
  transition: color 0.3s ease;
}

/* Motto Card Custom Typography Setup */
.motto-card {
  justify-content: space-between;
}

.motto-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.large-motto-text {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 600;
  font-size: clamp(1.6rem, 2.5vw, 2.1rem);
  color: var(--accent);
  line-height: 1.35;
  margin: 0;
}

/* Subtle Interactive States */
.identity-card:hover {
  border-color: var(--accent);
}

/* Responsive Mobile Carousel Layout rules */
@media (max-width: 992px) {
  .scroll-wrapper {
    overflow-x: auto;
    overflow-y: hidden;
    padding: 10px 0 20px;
    -webkit-overflow-scrolling: touch;
  }

  .scroll-wrapper::-webkit-scrollbar {
    display: none; /* Keep it perfectly seamless */
  }

  .identity-grid {
    display: flex;
    gap: 16px;
    width: max-content;
    padding: 0 4px;
  }

  .identity-card {
    width: 300px;
    min-height: 250px;
    padding: 32px;
    border-radius: 20px;
  }

  .card-label {
    margin-bottom: 20px;
  }
}

@media (max-width: 600px) {
  .mv-section {
    padding: 80px 16px;
  }

  .mv-header {
    margin-bottom: 40px;
  }
}
</style>
