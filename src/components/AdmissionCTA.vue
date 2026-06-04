<template>
  <section class="admissions-cta-section">
    <!-- Left Decorative Accent Lines -->
    <div class="corner-lines left-lines">
      <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-50,0 Q30,100 -50,200" stroke="var(--accent)" stroke-width="0.5" opacity="0.15" />
        <path d="M-30,0 Q50,100 -30,200" stroke="var(--accent)" stroke-width="0.5" opacity="0.25" />
        <path d="M-10,0 Q70,100 -10,200" stroke="var(--accent)" stroke-width="0.5" opacity="0.1" />
      </svg>
    </div>

    <!-- Right Decorative Accent Lines -->
    <div class="corner-lines right-lines">
      <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M150,0 Q70,100 150,200" stroke="var(--accent)" stroke-width="0.5" opacity="0.15" />
        <path d="M130,0 Q50,100 130,200" stroke="var(--accent)" stroke-width="0.5" opacity="0.25" />
        <path d="M110,0 Q30,100 110,200" stroke="var(--accent)" stroke-width="0.5" opacity="0.1" />
      </svg>
    </div>

    <!-- Central Content Area -->
    <div class="cta-inner-container">
      <h2 class="cta-heading-text">Begin your child’s journey today.</h2>

      <p class="cta-supporting-text">
        Secure a place for the upcoming academic term. Download our enrollment form, plan a
        personalized tour of our modern campus facilities, or submit an application profile directly
        through our student registry portal.
      </p>

      <!-- Balanced Dual Action Row -->
      <div class="cta-actions-row">
        <a href="#portal" class="cta-action-btn btn-teal-filled">
          Start an application
          <svg
            class="arrow-icon"
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

        <a href="#visit" class="cta-action-btn btn-teal-outlined">
          Book a school visit
          <svg
            class="arrow-icon"
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

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.admissions-cta-section {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  padding: 120px 24px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

/* Vector background line accents */
.corner-lines {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 180px;
  pointer-events: none;
  z-index: 1;
}

.left-lines {
  left: 0;
}

.right-lines {
  right: 0;
}

.corner-lines svg {
  width: 100%;
  height: 100%;
}

.cta-inner-container {
  max-width: 720px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.cta-heading-text {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.15;
  margin: 0 0 20px 0;
  letter-spacing: -1.5px;
  transition: color 0.3s ease;
}

.cta-supporting-text {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0 0 44px 0;
  max-width: 580px;
  transition: color 0.3s ease;
}

.cta-actions-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
}

/* Button Blueprint styles */
.cta-action-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  padding: 16px 36px;
  border-radius: 100px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.arrow-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

/* Solid Core Accent Callout Button style */
.btn-teal-filled {
  background-color: var(--accent);
  color: #0a0a0a; /* Clean dark text contrast over bright brand teal button background */
  border: 1px solid var(--accent);
  box-shadow: 0 4px 20px var(--accent-tint);
}

.btn-teal-filled:hover {
  background-color: transparent;
  color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--accent-tint);
}

/* Outlined Complementary Action Button style */
.btn-teal-outlined {
  background-color: transparent;
  color: var(--text-main);
  border: 1px solid var(--border-subtle);
}

.btn-teal-outlined:hover {
  border-color: var(--accent);
  color: var(--accent);
  background-color: var(--accent-tint);
  transform: translateY(-2px);
}

.cta-action-btn:hover .arrow-icon {
  transform: translateX(4px);
}

/* Mobile Responsiveness Viewport Adjustments */
@media (max-width: 768px) {
  .admissions-cta-section {
    padding: 100px 16px;
  }

  .corner-lines {
    width: 100px;
  }

  .cta-supporting-text {
    margin-bottom: 36px;
  }

  .cta-actions-row {
    flex-direction: column;
    gap: 12px;
  }

  .cta-action-btn {
    width: 100%;
    max-width: 320px;
    justify-content: center;
    padding: 14px 28px;
  }
}
</style>
