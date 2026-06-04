<template>
  <section class="why-choose-us">
    <div class="section-container">
      <div class="image-column">
        <div class="main-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80"
            alt="Students in a bright modern classroom at XYZ Gate Academy"
            class="hero-img"
          />
          <div class="decorative-accent-wrapper">
            <svg
              class="corner-accent"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 100V40C0 17.9086 17.9086 0 40 0H100" stroke="#00BFA6" stroke-width="3" />
            </svg>
          </div>
        </div>
      </div>

      <div class="content-column">
        <span class="badge">Why Choose Us?</span>

        <h2 class="main-title">
          When You <span class="highlight-pill">Need</span> The Best For Their
          <span class="highlight-pill">Future</span>
        </h2>

        <p class="description-text">
          At XYZ Gate Academy, we blend academic discipline with modern workflows to create an
          environment where children thrive across their Nursery, Primary, and Secondary years.
        </p>

        <div class="reasons-grid">
          <div class="reason-item">
            <div class="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div class="reason-text">
              <h4 class="reason-heading">Small class sizes</h4>
              <p class="reason-description">Max 25 students per class for personal attention</p>
            </div>
          </div>

          <div class="reason-item">
            <div class="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <div class="reason-text">
              <h4 class="reason-heading">Certified teachers</h4>
              <p class="reason-description">All staff are TRCN-registered and degree-qualified</p>
            </div>
          </div>

          <div class="reason-item">
            <div class="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div class="reason-text">
              <h4 class="reason-heading">Safe & secure campus</h4>
              <p class="reason-description">24/7 security, CCTV, and controlled entry points</p>
            </div>
          </div>

          <div class="reason-item">
            <div class="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div class="reason-text">
              <h4 class="reason-heading">Outstanding results</h4>
              <p class="reason-description">Top-ranked school in Lagos 3 years running</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap');

.why-choose-us {
  background-color: var(--bg-primary);
  padding: 140px 24px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 80px;
  align-items: center;
}

.image-column {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.main-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 440px;
  aspect-ratio: 4 / 5;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 120px;
  border-bottom-right-radius: 120px;
  border-top-right-radius: 24px;
  border-bottom-left-radius: 24px;
  filter: grayscale(10%) contrast(102%);
  transition: filter 0.3s ease;
}

[data-theme='light'] .hero-img {
  filter: grayscale(0%) contrast(100%);
}

.decorative-accent-wrapper {
  position: absolute;
  bottom: -20px;
  left: -20px;
  width: 100px;
  height: 100px;
  pointer-events: none;
}

.corner-accent {
  width: 100%;
  height: 100%;
}

.content-column {
  display: flex;
  flex-direction: column;
}

.badge {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.badge::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: var(--accent);
  border-radius: 2px;
}

.main-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.25;
  margin: 0 0 28px 0;
  letter-spacing: -1px;
  transition: color 0.3s ease;
}

.highlight-pill {
  display: inline-block;
  background-color: var(--accent);
  color: #0a0a0a;
  padding: 2px 16px;
  border-radius: 12px;
  font-weight: 700;
}

.description-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0 0 48px 0;
  max-width: 540px;
  transition: color 0.3s ease;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 32px;
}

.reason-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.icon-box {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-box svg {
  width: 100%;
  height: 100%;
}

.reason-text {
  display: flex;
  flex-direction: column;
}

.reason-heading {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 6px 0;
  transition: color 0.3s ease;
}

.reason-description {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
  transition: color 0.3s ease;
}

@media (max-width: 992px) {
  .section-container {
    grid-template-columns: 1fr;
    gap: 64px;
  }

  .main-title {
    font-size: 2.6rem;
  }

  .image-column {
    order: -1;
  }
}

@media (max-width: 600px) {
  .why-choose-us {
    padding: 80px 16px;
  }

  .reasons-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .main-title {
    font-size: 2.2rem;
  }

  .main-image-wrapper {
    max-width: 320px;
  }
}
</style>
