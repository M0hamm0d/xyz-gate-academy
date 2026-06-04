<!-- <template>
  <div class="about-divider-block">
    <div class="divider-container">
      <div class="campus-photo-box">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
          alt="University Campus"
          class="campus-img"
        />
        <div class="dark-tint-layer"></div>
      </div>

      <h2 class="sub-heading-text">About XYZ Gate Academy</h2>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.about-divider-block {
  background-color: var(--bg-primary);
  padding: 64px 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.divider-container {
  max-width: 800px; /* Constrained elegant column width */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.campus-photo-box {
  width: 100%;
  height: 60px; /* Slim, architectural ribbon aesthetic */
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--border-subtle);
  background-color: var(--bg-surface);
  margin-bottom: 32px;
  transition: border-color 0.3s ease;
}

.campus-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
  filter: contrast(102%) brightness(90%);
  transition: filter 0.3s ease;
}

[data-theme='light'] .campus-img {
  filter: contrast(100%) brightness(95%);
}

.dark-tint-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Creates the strict dark overlay look requested */
  background: rgba(10, 10, 10, 0.45);
  pointer-events: none;
}

.sub-heading-text {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
  letter-spacing: -0.8px;
  transition: color 0.3s ease;
}

/* Responsive optimization for mobile devices */
@media (max-width: 768px) {
  .about-divider-block {
    padding: 48px 16px;
  }

  .campus-photo-box {
    height: 45px;
    margin-bottom: 24px;
    border-radius: 12px;
  }
}
</style> -->
<template>
  <div class="about-banner-block">
    <div class="banner-container">
      <div class="campus-hero-banner">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
          alt="University Campus"
          class="banner-bg-img"
        />

        <div class="dark-tint-layer"></div>

        <div class="banner-content">
          <h2 class="sub-heading-text">About XYZ Gate Academy</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.about-banner-block {
  background-color: var(--bg-primary);
  padding: 164px 24px 64px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.banner-container {
  max-width: 1200px; /* Aligns perfectly with your main page grids */
  width: 100%;
}

.campus-hero-banner {
  width: 100%;
  height: 220px;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--border-subtle);
  background-color: var(--bg-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

[data-theme='light'] .campus-hero-banner {
  box-shadow: 0 8px 24px rgba(10, 10, 10, 0.02);
}

.banner-bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
  z-index: 1;
}

.dark-tint-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Strict elegant scrim overlay ensuring high text readability */
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.65) 100%);
  z-index: 2;
  transition: background 0.3s ease;
}

[data-theme='light'] .dark-tint-layer {
  /* Slightly adjusted to keep light mode feeling fresh while protecting the text contrast */
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.45) 0%, rgba(10, 10, 10, 0.6) 100%);
}

.banner-content {
  position: relative;
  z-index: 3; /* Safely lifts text above the background filters */
  padding: 0 32px;
  text-align: center;
}

.sub-heading-text {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  font-weight: 700;
  color: #f5f5f5; /* Set to absolute light token for rich contrast against dark background photo */
  margin: 0;
  letter-spacing: -1px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Premium sub-pixel reading protection */
}

/* Fluid mobile adjustment rules */
@media (max-width: 768px) {
  .about-banner-block {
    padding: 48px 16px;
  }

  .campus-hero-banner {
    height: 160px;
    border-radius: 20px;
  }

  .banner-content {
    padding: 0 20px;
  }
}
</style>
