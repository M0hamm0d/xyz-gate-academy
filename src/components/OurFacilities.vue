<template>
  <section class="facilities-section">
    <div class="facilities-container">
      <div class="facilities-header">
        <span class="badge">Our Campus</span>
        <h2 class="section-title">World-Class Facilities</h2>
        <p class="section-subtitle">
          Explore the physical spaces designed to give students at XYZ Gate Academy a premium,
          immersive academic and extracurricular experience.
        </p>
      </div>

      <div class="facilities-bento-grid">
        <div class="bento-card card-tall">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
            alt="XYZ Gate Academy ICT Lab"
            class="facility-img"
          />
          <div class="card-overlay">
            <div class="meta-wrap">
              <span class="facility-tag">Technology</span>
              <h3 class="facility-name">Modern ICT Lab</h3>
            </div>
            <p class="facility-desc">
              High-speed workstations equipped for programming, digital design, and technical
              engineering tools.
            </p>
          </div>
        </div>

        <div class="bento-card card-wide">
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
            alt="Science Laboratory"
            class="facility-img"
          />
          <div class="card-overlay">
            <div class="meta-wrap">
              <span class="facility-tag">Research</span>
              <h3 class="facility-name">Advanced Science Lab</h3>
            </div>
            <p class="facility-desc">
              Fully optimized chemistry, physics, and biology workspaces designed for practical
              experimentation.
            </p>
          </div>
        </div>

        <div class="bento-card card-square">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
            alt="School Library"
            class="facility-img"
          />
          <div class="card-overlay">
            <div class="meta-wrap">
              <span class="facility-tag">Academics</span>
              <h3 class="facility-name">The Academy Library</h3>
            </div>
            <p class="facility-desc">
              A deep, expansive collection of physical resources and digital research indices.
            </p>
          </div>
        </div>

        <div class="bento-card card-square">
          <!-- <img
            src="https://images.unsplash.com/photo-1577416416832-57f3deee241b?auto=format&fit=crop&w=600&q=80"
            alt="Assembly Hall"
            class="facility-img"
          /> -->
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80"
            alt="Assembly Hall"
            class="facility-img"
          />
          <div class="card-overlay">
            <div class="meta-wrap">
              <span class="facility-tag">Community</span>
              <h3 class="facility-name">Multipurpose Assembly Hall</h3>
            </div>
            <p class="facility-desc">
              A centralized hub for leadership keynotes, student showcases, and cultural events.
            </p>
          </div>
        </div>

        <div class="bento-card card-wide-bottom">
          <img
            src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80"
            alt="Sports Field"
            class="facility-img"
          />
          <div class="card-overlay">
            <div class="meta-wrap">
              <span class="facility-tag">Athletics</span>
              <h3 class="facility-name">Sports Complex & Field</h3>
            </div>
            <p class="facility-desc">
              Professional standard surfaces for track, football training, and physical development.
            </p>
          </div>
        </div>

        <div class="bento-card card-tall-right">
          <img
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
            alt="Hostel and Dormitories"
            class="facility-img"
          />
          <div class="card-overlay">
            <div class="meta-wrap">
              <span class="facility-tag">Living</span>
              <h3 class="facility-name">Executive Dormitories</h3>
            </div>
            <p class="facility-desc">
              Safe, highly disciplined, and structured boarding spaces managed 24/7 by residence
              caretakers.
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

.facilities-section {
  background-color: var(--bg-primary);
  padding: 120px 24px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

.facilities-container {
  max-width: 1200px;
  margin: 0 auto;
}

.facilities-header {
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

.facilities-bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 240px;
  gap: 24px;
}

.bento-card {
  position: relative;
  background-color: var(--bg-surface);
  border-radius: 32px;
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.card-tall {
  grid-column: span 1;
  grid-row: span 2;
}

.card-wide {
  grid-column: span 2;
  grid-row: span 1;
}

.card-square {
  grid-column: span 1;
  grid-row: span 1;
}

.card-wide-bottom {
  grid-column: span 2;
  grid-row: span 1;
}

.card-tall-right {
  grid-column: span 1;
  grid-row: span 2;
  grid-row-start: 2;
  grid-column-start: 3;
}

.facility-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(10%) contrast(105%);
  transition:
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.3s ease;
}

[data-theme='light'] .facility-img {
  filter: grayscale(0%) contrast(100%);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.1) 0%, rgba(10, 10, 10, 0.8) 100%);
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  transition: background 0.4s ease;
}

[data-theme='light'] .card-overlay {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0.85) 100%);
}

.meta-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  transform: translateY(40px);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.facility-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.facility-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #f5f5f5; /* Keep bright for readability against image overlays */
  margin: 0;
}

.facility-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: rgba(245, 245, 245, 0.7); /* Keep bright for readability against image overlays */
  line-height: 1.5;
  margin: 12px 0 0 0;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.4s ease,
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.bento-card:hover {
  border-color: var(--accent);
}

.bento-card:hover .facility-img {
  transform: scale(1.04);
}

.bento-card:hover .card-overlay {
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.3) 0%, #0a0a0a 100%);
}

[data-theme='light'] .bento-card:hover .card-overlay {
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, #0a0a0a 100%);
}

.bento-card:hover .meta-wrap {
  transform: translateY(0);
}

.bento-card:hover .facility-desc {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.05s;
}

@media (max-width: 1024px) {
  .facilities-bento-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 260px;
  }

  .card-tall {
    grid-column: span 1;
    grid-row: span 2;
  }

  .card-wide {
    grid-column: span 2;
  }

  .card-square {
    grid-column: span 1;
  }

  .card-wide-bottom {
    grid-column: span 2;
  }

  .card-tall-right {
    grid-column: span 1;
    grid-row: span 2;
    grid-row-start: auto;
    grid-column-start: auto;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.8rem;
  }

  .facilities-bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 280px;
    gap: 16px;
  }

  .card-tall,
  .card-wide,
  .card-square,
  .card-wide-bottom,
  .card-tall-right {
    grid-column: span 1;
    grid-row: span 1;
    border-radius: 24px;
  }

  .meta-wrap {
    transform: translateY(0);
  }

  .facility-desc {
    opacity: 1;
    transform: translateY(0);
  }

  .card-overlay {
    padding: 24px;
  }
}
</style>
