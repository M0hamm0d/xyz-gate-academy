<template>
  <section class="academics-hero-section">
    <div class="academics-hero-container">
      <div class="academics-banner-card">
        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80"
          alt="Sterling Gate Academy Learning Environment"
          class="banner-bg-media"
        />

        <div class="dark-scrim-layer"></div>

        <div class="banner-core-content">
          <h1 class="academics-main-title">Academics At XYZ Gate Academy</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap');

.academics-hero-section {
  background-color: var(--bg-primary);
  /* Top padding ensures the banner drops cleanly below your floating navigation header */
  padding: 140px 24px 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.academics-hero-container {
  max-width: 1200px;
  width: 100%;
}

.academics-banner-card {
  width: 100%;
  height: 260px; /* Enhanced height for a prominent route anchor experience */
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

[data-theme='light'] .academics-banner-card {
  box-shadow: 0 12px 32px rgba(10, 10, 10, 0.03);
}

.banner-bg-media {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 50%;
  z-index: 1;
}

.dark-scrim-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Strict multi-gradient overlay providing an uncompromised structural read background */
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.45) 0%, rgba(10, 10, 10, 0.7) 100%);
  z-index: 2;
  transition: background 0.3s ease;
}

[data-theme='light'] .dark-scrim-layer {
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.5) 0%, rgba(10, 10, 10, 0.65) 100%);
}

.banner-core-content {
  position: relative;
  z-index: 3; /* Lifts the headings cleanly above the physical background filters */
  padding: 0 40px;
  text-align: center;
  max-width: 900px;
}

.academics-main-title {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: #f5f5f5; /* Set to absolute light token for rich contrast against dark background photo */
  margin: 0;
  letter-spacing: -1.5px;
  line-height: 1.15;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35); /* Premium sub-pixel reading protection */
}

/* Fluid design scaling handles for responsive viewports */
@media (max-width: 768px) {
  .academics-hero-section {
    padding: 110px 16px 32px;
  }

  .academics-banner-card {
    height: 180px;
    border-radius: 20px;
  }

  .banner-core-content {
    padding: 0 20px;
  }
}
</style>
