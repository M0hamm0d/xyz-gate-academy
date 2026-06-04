<template>
  <section class="testimonial-section">
    <div class="testimonial-container">
      <div class="text-column">
        <span class="badge">Testimonials</span>
        <h2 class="section-title">What Our Parents Say</h2>
        <p class="section-subtitle">
          Discover why families trust XYZ Gate Academy to guide their children through their
          formative academic and characters development journeys.
        </p>
      </div>

      <div class="marquee-column">
        <div class="marquee-window">
          <div class="marquee-track">
            <div class="testimonial-card">
              <div class="card-left">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                  alt="Sarah Alao"
                  class="avatar"
                />
              </div>
              <div class="card-right">
                <div class="parent-info">
                  <h3 class="parent-name">Mrs. Sarah Alao</h3>
                  <span class="child-level">Nursery & Primary Parent</span>
                </div>
                <p class="feedback-text">
                  The foundational care my children receive in the Nursery section is phenomenal.
                  They read fluently much earlier than expected!
                </p>
              </div>
              <span class="quote-mark">“</span>
            </div>

            <div class="testimonial-card active-card">
              <div class="card-left">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
                  alt="David Okafor"
                  class="avatar"
                />
              </div>
              <div class="card-right">
                <div class="parent-info">
                  <h3 class="parent-name">Mr. David Okafor</h3>
                  <span class="child-level">Senior Secondary Parent</span>
                </div>
                <p class="feedback-text">
                  SGA combines premium technical equipment with absolute discipline. My son's
                  performance in his advanced sciences has been stellar.
                </p>
              </div>
              <span class="quote-mark">“</span>
            </div>

            <div class="testimonial-card">
              <div class="card-left">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80"
                  alt="Amara Ibrahim"
                  class="avatar"
                />
              </div>
              <div class="card-right">
                <div class="parent-info">
                  <h3 class="parent-name">Dr. Amara Ibrahim</h3>
                  <span class="child-level">Junior Secondary Parent</span>
                </div>
                <p class="feedback-text">
                  The digital literacy programs and modern ICT facility exposed my daughter to core
                  programming principles early. Highly recommended.
                </p>
              </div>
              <span class="quote-mark">“</span>
            </div>

            <div class="testimonial-card">
              <div class="card-left">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                  alt="Sarah Alao"
                  class="avatar"
                />
              </div>
              <div class="card-right">
                <div class="parent-info">
                  <h3 class="parent-name">Mrs. Sarah Alao</h3>
                  <span class="child-level">Nursery & Primary Parent</span>
                </div>
                <p class="feedback-text">
                  The foundational care my children receive in the Nursery section is phenomenal.
                  They read fluently much earlier than expected!
                </p>
              </div>
              <span class="quote-mark">“</span>
            </div>

            <div class="testimonial-card active-card">
              <div class="card-left">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
                  alt="David Okafor"
                  class="avatar"
                />
              </div>
              <div class="card-right">
                <div class="parent-info">
                  <h3 class="parent-name">Mr. David Okafor</h3>
                  <span class="child-level">Senior Secondary Parent</span>
                </div>
                <p class="feedback-text">
                  SGA combines premium technical equipment with absolute discipline. My son's
                  performance in his advanced sciences has been stellar.
                </p>
              </div>
              <span class="quote-mark">“</span>
            </div>

            <div class="testimonial-card">
              <div class="card-left">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80"
                  alt="Amara Ibrahim"
                  class="avatar"
                />
              </div>
              <div class="card-right">
                <div class="parent-info">
                  <h3 class="parent-name">Dr. Amara Ibrahim</h3>
                  <span class="child-level">Junior Secondary Parent</span>
                </div>
                <p class="feedback-text">
                  The digital literacy programs and modern ICT facility exposed my daughter to core
                  programming principles early. Highly recommended.
                </p>
              </div>
              <span class="quote-mark">“</span>
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

.testimonial-section {
  background-color: var(--bg-primary);
  padding: 140px 24px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.testimonial-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: center;
}

.text-column {
  display: flex;
  flex-direction: column;
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
  margin-bottom: 24px;
  align-self: flex-start;
}

.section-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 24px 0;
  letter-spacing: -1.5px;
  line-height: 1.15;
  transition: color 0.3s ease;
}

.section-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0;
  max-width: 480px;
  transition: color 0.3s ease;
}

.marquee-column {
  position: relative;
  width: 100%;
}

.marquee-window {
  position: relative;
  height: 480px;
  overflow: hidden;
  width: 100%;
}

.marquee-window::before,
.marquee-window::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 3;
  pointer-events: none;
}

.marquee-window::before {
  top: 0;
  background: linear-gradient(180deg, var(--bg-primary) 0%, transparent 100%);
}

.marquee-window::after {
  bottom: 0;
  background: linear-gradient(0deg, var(--bg-primary) 0%, transparent 100%);
}

.marquee-track {
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: scrollVertical 22s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes scrollVertical {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

.testimonial-card {
  background-color: var(--bg-surface);
  border-radius: 20px;
  padding: 28px;
  display: flex;
  gap: 24px;
  border: 1px solid var(--border-subtle);
  position: relative;
  box-sizing: border-box;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

[data-theme='light'] .testimonial-card {
  box-shadow: 0 8px 24px rgba(10, 10, 10, 0.02);
}

.active-card {
  border-left: 4px solid var(--accent);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.card-left {
  flex-shrink: 0;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-subtle);
  filter: grayscale(10%) contrast(102%);
  transition: filter 0.3s ease;
}

[data-theme='light'] .avatar {
  filter: grayscale(0%) contrast(100%);
}

.card-right {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.parent-info {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
}

.parent-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
  transition: color 0.3s ease;
}

.child-level {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 500;
}

.feedback-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
  padding-right: 20px;
  transition: color 0.3s ease;
}

.quote-mark {
  position: absolute;
  top: 10px;
  right: 28px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 4rem;
  color: var(--accent-tint);
  line-height: 1;
  font-weight: 700;
  user-select: none;
}

@media (max-width: 992px) {
  .testimonial-container {
    grid-template-columns: 1fr;
    gap: 64px;
  }

  .section-title {
    font-size: 2.6rem;
  }
}

@media (max-width: 568px) {
  .testimonial-section {
    padding: 80px 16px;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .testimonial-card {
    flex-direction: column;
    gap: 16px;
    padding: 24px;
  }

  .avatar {
    width: 50px;
    height: 50px;
  }

  .quote-mark {
    top: auto;
    bottom: 12px;
    right: 20px;
    font-size: 3rem;
  }
}
</style>
