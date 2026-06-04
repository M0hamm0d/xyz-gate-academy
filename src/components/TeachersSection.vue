<template>
  <section class="faculty-section">
    <div class="faculty-container">
      <div class="faculty-header">
        <div class="header-left">
          <span class="badge">Meet the team</span>
          <h2 class="section-title">Faculty Spotlight</h2>
        </div>
        <a href="#" class="view-all-link">
          <span>Meet all our teachers</span>
          <svg
            class="arrow-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      <div class="faculty-grid">
        <div class="faculty-card">
          <div class="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
              alt="Mr. Adebayo O."
              class="faculty-img"
            />
            <div class="card-accent-border"></div>
          </div>
          <div class="profile-details">
            <div class="meta-row">
              <span class="subject-tag">Sciences</span>
              <span class="qualification">M.Sc Physics</span>
            </div>
            <h3 class="faculty-name">Mr. Adebayo O.</h3>
            <p class="role-title">Head of Sciences Department</p>
          </div>
        </div>

        <div class="faculty-card">
          <div class="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
              alt="Mrs. Okonkwo C."
              class="faculty-img"
            />
            <div class="card-accent-border"></div>
          </div>
          <div class="profile-details">
            <div class="meta-row">
              <span class="subject-tag">Languages</span>
              <span class="qualification">B.Ed TESOL</span>
            </div>
            <h3 class="faculty-name">Mrs. Okonkwo C.</h3>
            <p class="role-title">Head of English Department</p>
          </div>
        </div>

        <div class="faculty-card">
          <div class="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
              alt="Mr. Ibrahim S."
              class="faculty-img"
            />
            <div class="card-accent-border"></div>
          </div>
          <div class="profile-details">
            <div class="meta-row">
              <span class="subject-tag">Mathematics</span>
              <span class="qualification">M.Sc Statistics</span>
            </div>
            <h3 class="faculty-name">Mr. Ibrahim S.</h3>
            <p class="role-title">Head of Mathematics Department</p>
          </div>
        </div>
      </div>

      <div class="mobile-footer">
        <a href="#" class="view-all-link-mobile">
          <span>Meet all our teachers</span>
          <svg
            class="arrow-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
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

.faculty-section {
  background-color: var(--bg-primary);
  padding: 140px 24px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

.faculty-container {
  max-width: 1200px;
  margin: 0 auto;
}

.faculty-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 64px;
}

.header-left {
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
  margin-bottom: 20px;
  align-self: flex-start;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 600;
  color: var(--text-main);
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1.1;
  transition: color 0.3s ease;
}

.view-all-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-main);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 6px;
  transition: all 0.3s ease;
}

.view-all-link:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.view-all-link:hover .arrow-icon {
  transform: translateX(4px);
  color: var(--accent);
}

.arrow-icon {
  width: 16px;
  height: 16px;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.faculty-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.faculty-card {
  background-color: var(--bg-surface);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

[data-theme='light'] .faculty-card {
  box-shadow: 0 8px 24px rgba(10, 10, 10, 0.02);
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 13;
  overflow: hidden;
  background-color: var(--bg-primary);
  transition: background-color 0.3s ease;
}

.faculty-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(10%) contrast(102%);
  transition:
    transform 0.5s ease,
    filter 0.3s ease;
}

[data-theme='light'] .faculty-img {
  filter: grayscale(0%) contrast(100%);
}

.card-accent-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: transparent;
  transition: background-color 0.3s ease;
  z-index: 2;
}

.profile-details {
  padding: 32px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.subject-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.qualification {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  transition: color 0.3s ease;
}

.faculty-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-main);
  margin: 0 0 6px 0;
  transition: color 0.3s ease;
}

.role-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
  transition: color 0.3s ease;
}

.faculty-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent);
}

[data-theme='light'] .faculty-card:hover {
  box-shadow: 0 12px 30px rgba(10, 10, 10, 0.05);
}

.faculty-card:hover .faculty-img {
  transform: scale(1.03);
}

.faculty-card:hover .card-accent-border {
  background-color: var(--accent);
}

.mobile-footer {
  display: none;
}

@media (max-width: 992px) {
  .faculty-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .faculty-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 2.8rem;
  }

  .view-all-link {
    display: none;
  }

  .faculty-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .image-wrapper {
    aspect-ratio: 16 / 11;
  }

  .mobile-footer {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .view-all-link-mobile {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: var(--accent);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background-color: var(--accent-tint);
    padding: 14px 28px;
    border-radius: 100px;
    border: 1px solid var(--border-subtle);
    width: 100%;
    max-width: 320px;
    justify-content: center;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease;
  }
}
</style>
