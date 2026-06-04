<!-- <template>
  <footer class="minimal-footer">
    <div class="footer-container">
      <div class="footer-brand">
        <div class="logo-icon">S</div>
        <span class="brand-name">XYZ Gate Academy</span>
      </div>

      <nav class="footer-nav">
        <a href="#" class="nav-link">Homepage</a>
        <a href="#" class="nav-link">Admissions</a>
        <a href="#" class="nav-link">Programmes</a>
        <a href="#" class="nav-link">About Us</a>
        <a href="#" class="nav-link">Contact Us</a>
      </nav>

      <div class="footer-socials">
        <a href="#" class="social-link" aria-label="Facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="#" class="social-link" aria-label="X">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
          </svg>
        </a>
        <a href="#" class="social-link" aria-label="Instagram">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="#" class="social-link" aria-label="LinkedIn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>

      <div class="footer-copyright">&copy; 2026 XYZ Gate Academy. All rights reserved.</div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap');

.minimal-footer {
  background-color: #0a0a0a;
  padding: 80px 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(245, 245, 245, 0.03);
}

.footer-container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.logo-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #00bfa6 0%, rgba(0, 191, 166, 0.5) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0a0a0a;
  box-shadow: 0 4px 12px rgba(0, 191, 166, 0.2);
}

.brand-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: #f5f5f5;
  letter-spacing: -0.3px;
}

.footer-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.nav-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: rgba(245, 245, 245, 0.6);
  text-decoration: none;
  transition: color 0.25s ease;
}

.nav-link:hover {
  color: #00bfa6;
}

.footer-socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
}

.social-link {
  color: rgba(245, 245, 245, 0.4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.social-link svg {
  width: 100%;
  height: 100%;
}

.social-link:hover {
  color: #00bfa6;
  transform: translateY(-2px);
}

.footer-copyright {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: rgba(245, 245, 245, 0.25);
  letter-spacing: 0.3px;
}

@media (max-width: 768px) {
  .minimal-footer {
    padding: 64px 16px;
  }

  .footer-brand {
    margin-bottom: 32px;
  }

  .footer-nav {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;
  }

  .footer-socials {
    margin-bottom: 32px;
  }
}
</style> -->
<template>
  <footer class="minimal-footer">
    <div class="footer-divider"></div>
    <div class="footer-container">
      <div class="footer-brand">
        <div class="logo-icon">S</div>
        <span class="brand-name">XYZ Gate Academy</span>
      </div>

      <nav class="footer-nav">
        <a href="#" class="nav-link">Homepage</a>
        <a href="#" class="nav-link">Admissions</a>
        <a href="#" class="nav-link">Programmes</a>
        <a href="#" class="nav-link">About Us</a>
        <a href="#" class="nav-link">Contact Us</a>
      </nav>

      <div class="footer-socials">
        <a href="#" class="social-link" aria-label="Facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="#" class="social-link" aria-label="X">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
          </svg>
        </a>
        <a href="#" class="social-link" aria-label="Instagram">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="#" class="social-link" aria-label="LinkedIn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>

      <div class="footer-copyright">&copy; 2026 XYZ Gate Academy. All rights reserved.</div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap');

.minimal-footer {
  background-color: #141414;
  padding: 80px 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.footer-divider {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(245, 245, 245, 0.05) 50%,
    transparent 100%
  );
}

.footer-container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.logo-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #00bfa6 0%, rgba(0, 191, 166, 0.5) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0a0a0a;
  box-shadow: 0 4px 12px rgba(0, 191, 166, 0.15);
}

.brand-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: #f5f5f5;
  letter-spacing: -0.3px;
}

.footer-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.nav-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: rgba(245, 245, 245, 0.5);
  text-decoration: none;
  transition: color 0.25s ease;
}

.nav-link:hover {
  color: #00bfa6;
}

.footer-socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
}

.social-link {
  color: rgba(245, 245, 245, 0.35);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.social-link svg {
  width: 100%;
  height: 100%;
}

.social-link:hover {
  color: #00bfa6;
  transform: translateY(-2px);
}

.footer-copyright {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: rgba(245, 245, 245, 0.2);
  letter-spacing: 0.3px;
}

@media (max-width: 768px) {
  .minimal-footer {
    padding: 64px 16px;
  }

  .footer-brand {
    margin-bottom: 32px;
  }

  .footer-nav {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;
  }

  .footer-socials {
    margin-bottom: 32px;
  }
}
</style>
