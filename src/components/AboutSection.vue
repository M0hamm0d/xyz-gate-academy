<template>
  <section class="about-section">
    <div class="about-container">
      <div class="about-header">
        <span class="badge">About XYZ Gate Academy</span>
        <h2 class="section-title">Nurturing Leaders of Tomorrow</h2>
        <p class="section-subtitle">
          A premium educational institution offering an immersive, tech-forward, and rigorous
          curriculum across Nursery, Primary, and Secondary pathways to foster exceptional global
          talent.
        </p>
      </div>

      <div class="about-bento-layout">
        <div class="layout-column-left">
          <div class="card-main-image">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              alt="Students collaborating with modern computers"
              class="grid-img"
            />
          </div>
          <div class="card-horizontal-stats">
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">University Placement</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">1:25</span>
              <span class="stat-label">Teacher-Student Ratio</span>
            </div>
          </div>
        </div>

        <div class="layout-column-middle">
          <div class="card-text-top">
            <h3 class="card-heading">Early & Primary Years</h3>
            <p class="card-paragraph">
              Our Nursery foundation focuses on cognitive growth, while our Primary tier integrates
              basic computing and analytical blocks to build concrete lifelong critical thinking
              skills.
            </p>
          </div>
          <div class="card-image-bottom">
            <img
              src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&w=600&q=80"
              alt="Student utilizing digital tablet"
              class="grid-img"
            />
          </div>
        </div>

        <div class="layout-column-right">
          <div class="card-image-top">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
              alt="Active student learning space"
              class="grid-img"
            />
          </div>
          <div class="card-text-bottom">
            <h3 class="card-heading">Advanced Secondary</h3>
            <p class="card-paragraph">
              A deeply disciplined environment handling rigorous sciences, arts, and competitive
              external exam preparation to ground young adults for smooth global transits.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap');

.about-section {
  background-color: var(--bg-primary);
  padding: 80px 24px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 64px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  background-color: var(--accent-tint);
  padding: 6px 14px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 600;
  color: var(--text-main);
  margin: 0 0 16px 0;
  letter-spacing: -0.5px;
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

.about-bento-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.9fr 0.9fr;
  gap: 24px;
}

.layout-column-left,
.layout-column-middle,
.layout-column-right {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card-main-image {
  flex-grow: 1;
  height: 340px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border-subtle);
}

.card-horizontal-stats {
  background-color: var(--bg-surface);
  border-radius: 24px;
  padding: 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid var(--border-subtle);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

[data-theme='light'] .card-horizontal-stats {
  box-shadow: 0 8px 24px rgba(10, 10, 10, 0.02);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-family: 'DM Sans', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--accent);
}

.stat-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.card-text-top,
.card-text-bottom {
  background-color: var(--bg-surface);
  border-radius: 24px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--border-subtle);
  height: 220px;
  box-sizing: border-box;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

[data-theme='light'] .card-text-top,
[data-theme='light'] .card-text-bottom {
  box-shadow: 0 8px 24px rgba(10, 10, 10, 0.02);
}

.card-image-bottom,
.card-image-top {
  flex-grow: 1;
  height: 260px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border-subtle);
}

.grid-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(15%) contrast(102%);
  transition:
    transform 0.5s ease,
    filter 0.3s ease;
}

[data-theme='light'] .grid-img {
  filter: grayscale(5%) contrast(100%);
}

.card-main-image:hover .grid-img,
.card-image-bottom:hover .grid-img,
.card-image-top:hover .grid-img {
  transform: scale(1.03);
}

.card-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-main);
  margin: 0 0 12px 0;
  transition: color 0.3s ease;
}

.card-paragraph {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
  transition: color 0.3s ease;
}

@media (max-width: 992px) {
  .about-bento-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .card-main-image,
  .card-image-bottom,
  .card-image-top {
    height: 280px;
  }

  .card-text-top,
  .card-text-bottom {
    height: auto;
  }

  .layout-column-middle {
    order: 2;
  }

  .layout-column-right {
    order: 3;
  }
}

@media (max-width: 568px) {
  .about-section {
    padding: 80px 16px;
  }

  .section-title {
    font-size: 2.6rem;
  }

  .card-horizontal-stats {
    flex-direction: column;
    gap: 24px;
    padding: 24px;
  }

  .card-text-top,
  .card-text-bottom {
    padding: 32px 24px;
  }
}
</style>
