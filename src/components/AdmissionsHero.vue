<template>
  <section class="admissions-hero-section">
    <div class="admissions-hero-container">
      <!-- Full-Width Media Card acting as the Background Canvas -->
      <div class="admissions-banner-card">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e0b842255eaf?auto=format&fit=crop&w=1600&q=80"
          alt="Sterling Gate Academy Campus Entry and Modern Architecture"
          class="banner-bg-media"
        />

        <!-- Premium Contrast Protective Layer (Strict Dark Scrim) -->
        <div class="dark-scrim-layer"></div>

        <!-- Central Structural Typography Panel -->
        <div class="banner-core-content">
          <span class="hero-context-tag">Join Our Community</span>
          <h1 class="admissions-main-title">
            Admissions <span class="title-accent">Process</span>
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&display=swap');

.admissions-hero-section {
  background-color: var(--bg-primary);
  /* Top padding drops the layout cleanly below your floating header navbar */
  padding: 140px 24px 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.admissions-hero-container {
  max-width: 1200px;
  width: 100%;
}

.admissions-banner-card {
  width: 100%;
  height: 280px; /* Elevated height for a prominent, welcoming enrollment landing anchor */
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--border-subtle);
  background-color: var(--bg-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

[data-theme='light'] .admissions-banner-card {
  box-shadow: 0 12px 32px rgba(10, 10, 10, 0.03);
}

.banner-bg-media {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
  z-index: 1;
}

.dark-scrim-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* High-contrast scrim ensures text pops on both light/dark theme toggles */
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.5) 0%, rgba(10, 10, 10, 0.75) 100%);
  z-index: 2;
}

.banner-core-content {
  position: relative;
  z-index: 3;
  padding: 0 40px;
  text-align: center;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.hero-context-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent); /* Electric Teal brand token */
  text-transform: uppercase;
  letter-spacing: 2px;
}

.admissions-main-title {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(2.2rem, 5.5vw, 3.5rem);
  font-weight: 700;
  color: #f5f5f5; /* Crisp absolute white token over dark overlay */
  margin: 0;
  letter-spacing: -1.8px;
  line-height: 1.15;
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
}

.title-accent {
  font-weight: 400;
  color: rgba(245, 245, 245, 0.7); /* Subtle design weight contrast */
}

/* Responsive breakpoint handling */
@media (max-width: 768px) {
  .admissions-hero-section {
    padding: 110px 16px 32px;
  }

  .admissions-banner-card {
    height: 200px;
    border-radius: 20px;
  }

  .banner-core-content {
    padding: 0 20px;
  }
}
</style>
