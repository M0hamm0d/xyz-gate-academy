<template>
  <section class="cta-section">
    <div class="cta-container">
      <div class="badge-wrapper">
        <div class="status-badge">
          <span class="status-dot"></span>
          <span class="badge-text">Admissions Open</span>
        </div>
      </div>

      <h2 class="cta-title">Give your child the education they deserve</h2>

      <p class="cta-subtitle">
        Applications for the 2025/2026 academic session close December 31st. Secure a space in our
        upcoming Nursery, Primary, or Secondary cohorts today.
      </p>

      <div class="action-wrapper">
        <a href="#" class="premium-cta-btn">
          <span>Start your application</span>
          <svg
            class="arrow-icon"
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
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap');

.cta-section {
  background-color: var(--bg-primary);
  padding: 160px 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--accent-tint) 0%, transparent 70%);
  pointer-events: none;
  z-index: 1;
}

.cta-container {
  max-width: 840px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.badge-wrapper {
  margin-bottom: 32px;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--bg-surface);
  border: 1px dashed var(--border-subtle);
  padding: 8px 20px;
  border-radius: 100px;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

[data-theme='light'] .status-badge {
  border-style: solid;
  box-shadow: 0 4px 12px rgba(10, 10, 10, 0.02);
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(0, 191, 166, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 191, 166, 0.5);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(0, 191, 166, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 191, 166, 0);
  }
}

.badge-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-main);
  opacity: 0.8;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.cta-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.15;
  margin: 0 0 24px 0;
  letter-spacing: -2px;
  max-width: 760px;
  transition: color 0.3s ease;
}

.cta-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.15rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 48px 0;
  max-width: 580px;
  transition: color 0.3s ease;
}

.action-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.premium-cta-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: #0a0a0a;
  background-color: var(--accent);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 18px 40px;
  border-radius: 100px;
  box-shadow:
    0 0 0 0 rgba(0, 191, 166, 0.2),
    0 4px 20px rgba(0, 191, 166, 0.15);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid var(--accent);
}

.arrow-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.premium-cta-btn:hover {
  background-color: transparent;
  color: var(--accent);
  box-shadow:
    0 0 30px rgba(0, 191, 166, 0.35),
    0 0 0 4px var(--accent-tint);
  transform: translateY(-2px);
}

.premium-cta-btn:hover .arrow-icon {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .cta-section {
    padding: 100px 16px;
  }

  .cta-title {
    font-size: 2.8rem;
    letter-spacing: -1px;
  }

  .cta-subtitle {
    font-size: 1rem;
    margin-bottom: 36px;
  }

  .premium-cta-btn {
    width: 100%;
    max-width: 320px;
    justify-content: center;
    padding: 16px 32px;
  }
}
</style>
