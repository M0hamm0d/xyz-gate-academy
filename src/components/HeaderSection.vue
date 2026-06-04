<!-- <template>
  <header class="header-wrapper">
    <nav class="navbar">
      <div class="nav-left">
        <div class="logo-crest">
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
        <span class="school-name">XYZ Gate Academy</span>
      </div>

      <div class="nav-center">
        <ul class="nav-links">
          <li class="nav-item">
            <a href="#" class="nav-anchor">Home</a>
          </li>

          <li class="nav-item has-dropdown">
            <span class="nav-anchor">
              About Us
              <svg
                class="chevron-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
            <ul class="dropdown-menu">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Principal's Message</a></li>
              <li><a href="#">Mission & Vision</a></li>
              <li><a href="#">Our Team</a></li>
            </ul>
          </li>

          <li class="nav-item has-dropdown">
            <span class="nav-anchor">
              Academics
              <svg
                class="chevron-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
            <ul class="dropdown-menu">
              <li><a href="#">Nursery</a></li>
              <li><a href="#">Primary</a></li>
              <li><a href="#">Junior Secondary</a></li>
              <li><a href="#">Senior Secondary</a></li>
              <li><a href="#">Curriculum</a></li>
            </ul>
          </li>

          <li class="nav-item has-dropdown">
            <span class="nav-anchor">
              Admissions
              <svg
                class="chevron-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
            <ul class="dropdown-menu">
              <li><a href="#">How to Apply</a></li>
              <li><a href="#">Requirements</a></li>
              <li><a href="#">School Fees</a></li>
              <li><a href="#">Open Days</a></li>
              <li><a href="#">Apply Online</a></li>
            </ul>
          </li>

          <li class="nav-item has-dropdown">
            <span class="nav-anchor">
              More
              <svg
                class="chevron-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
            <ul class="dropdown-menu">
              <li><a href="#">Student Life</a></li>
              <li><a href="#">Facilities</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">News & Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="nav-right">
        <button class="apply-btn">Apply Now</button>
        <button
          class="mobile-toggle"
          @click="toggleMobileMenu"
          :class="{ 'is-active': isMobileMenuOpen }"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <div v-if="isAnnouncementVisible" class="announcement-bar">
      <div class="announcement-content">
        <span class="bell-emoji">🔔</span>
        <p class="announcement-text">
          Admission for 2025/2026 session is now open — Applications close December 31st
        </p>
      </div>
      <button class="close-announcement" @click="closeAnnouncement" aria-label="Close notification">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <div class="mobile-overlay" :class="{ 'is-open': isMobileMenuOpen }">
      <ul class="mobile-links">
        <li><a href="#" @click="toggleMobileMenu">Home</a></li>
        <li class="mobile-collapsible">
          <span @click="toggleMobileSubmenu('about')">About Us</span>
          <ul v-show="mobileSubmenus.about" class="mobile-submenu">
            <li><a href="#" @click="toggleMobileMenu">Our Story</a></li>
            <li><a href="#" @click="toggleMobileMenu">Principal's Message</a></li>
            <li><a href="#" @click="toggleMobileMenu">Mission & Vision</a></li>
            <li><a href="#" @click="toggleMobileMenu">Our Team</a></li>
          </ul>
        </li>
        <li class="mobile-collapsible">
          <span @click="toggleMobileSubmenu('academics')">Academics</span>
          <ul v-show="mobileSubmenus.academics" class="mobile-submenu">
            <li><a href="#" @click="toggleMobileMenu">Nursery</a></li>
            <li><a href="#" @click="toggleMobileMenu">Primary</a></li>
            <li><a href="#" @click="toggleMobileMenu">Junior Secondary</a></li>
            <li><a href="#" @click="toggleMobileMenu">Senior Secondary</a></li>
            <li><a href="#" @click="toggleMobileMenu">Curriculum</a></li>
          </ul>
        </li>
        <li class="mobile-collapsible">
          <span @click="toggleMobileSubmenu('admissions')">Admissions</span>
          <ul v-show="mobileSubmenus.admissions" class="mobile-submenu">
            <li><a href="#" @click="toggleMobileMenu">How to Apply</a></li>
            <li><a href="#" @click="toggleMobileMenu">Requirements</a></li>
            <li><a href="#" @click="toggleMobileMenu">School Fees</a></li>
            <li><a href="#" @click="toggleMobileMenu">Open Days</a></li>
            <li><a href="#" @click="toggleMobileMenu">Apply Online</a></li>
          </ul>
        </li>
        <li class="mobile-collapsible">
          <span @click="toggleMobileSubmenu('more')">More</span>
          <ul v-show="mobileSubmenus.more" class="mobile-submenu">
            <li><a href="#" @click="toggleMobileMenu">Student Life</a></li>
            <li><a href="#" @click="toggleMobileMenu">Facilities</a></li>
            <li><a href="#" @click="toggleMobileMenu">Gallery</a></li>
            <li><a href="#" @click="toggleMobileMenu">News & Blog</a></li>
            <li><a href="#" @click="toggleMobileMenu">Contact Us</a></li>
          </ul>
        </li>
        <li class="mobile-action-li">
          <button class="apply-btn-mobile">Apply Now</button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isAnnouncementVisible = ref(true)
const isMobileMenuOpen = ref(false)

const mobileSubmenus = reactive({
  about: false,
  academics: false,
  admissions: false,
  more: false,
})

const closeAnnouncement = () => {
  isAnnouncementVisible.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleMobileSubmenu = (menu) => {
  mobileSubmenus[menu] = !mobileSubmenus[menu]
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap');

.header-wrapper {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar {
  height: 80px;
  max-width: 1300px;
  margin: 20px 30px 0;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #141414;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-crest {
  width: 32px;
  height: 32px;
  color: #00bfa6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-crest svg {
  width: 100%;
  height: 100%;
}

.school-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.45rem;
  font-weight: 600;
  color: #f5f5f5;
  letter-spacing: -0.2px;
  white-space: nowrap;
}

.nav-center {
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

.nav-item {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-anchor {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(245, 245, 245, 0.7);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.25s ease;
}

.nav-anchor:hover {
  color: #f5f5f5;
  background-color: rgba(245, 245, 245, 0.04);
}

.chevron-icon {
  width: 12px;
  height: 12px;
  opacity: 0.6;
  transition: transform 0.25s ease;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% - 12px);
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background-color: #141414;
  border: 1px solid rgba(245, 245, 245, 0.04);
  border-radius: 16px;
  padding: 10px;
  min-width: 200px;
  list-style: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 0.25s ease,
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    visibility 0.25s;
}

.dropdown-menu li a {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: rgba(245, 245, 245, 0.55);
  text-decoration: none;
  padding: 10px 16px;
  display: block;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.dropdown-menu li a:hover {
  color: #00bfa6;
  background-color: rgba(0, 191, 166, 0.05);
}

.has-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.has-dropdown:hover .chevron-icon {
  transform: rotate(180deg);
  color: #00bfa6;
}

.nav-right {
  display: flex;
  align-items: center;
}

.apply-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: #00bfa6;
  color: #0a0a0a;
  border: 1px solid #00bfa6;
  padding: 10px 24px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.apply-btn:hover {
  background-color: transparent;
  color: #00bfa6;
  box-shadow: 0 0 15px rgba(0, 191, 166, 0.3);
}

.mobile-toggle {
  display: none;
}

.announcement-bar {
  background-color: #141414;
  border-top: 1px solid rgba(245, 245, 245, 0.03);
  border-bottom: 1px solid rgba(245, 245, 245, 0.03);
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.announcement-content {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
}

.bell-emoji {
  font-size: 0.95rem;
}

.announcement-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(245, 245, 245, 0.8);
  margin: 0;
  letter-spacing: 0.2px;
}

.close-announcement {
  background: transparent;
  border: none;
  color: rgba(245, 245, 245, 0.4);
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: color 0.2s ease;
}

.close-announcement svg {
  width: 100%;
  height: 100%;
}

.close-announcement:hover {
  color: #00bfa6;
}

.mobile-overlay {
  display: none;
}

@media (max-width: 992px) {
  .nav-center,
  .apply-btn {
    display: none;
  }

  .mobile-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 22px;
    height: 14px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1100;
  }

  .mobile-toggle span {
    width: 100%;
    height: 2px;
    background-color: #f5f5f5;
    transition: all 0.3s ease;
  }

  .mobile-toggle.is-active span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
    background-color: #00bfa6;
  }

  .mobile-toggle.is-active span:nth-child(2) {
    transform: translateY(-6px) rotate(-45deg);
    background-color: #00bfa6;
  }

  .mobile-overlay {
    display: block;
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: #0a0a0a;
    z-index: 1050;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    overflow-y: auto;
    padding: 24px;
    box-sizing: border-box;
  }

  .mobile-overlay.is-open {
    transform: translateX(0);
  }

  .mobile-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mobile-links li > a,
  .mobile-collapsible > span {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.15rem;
    font-weight: 500;
    color: #f5f5f5;
    text-decoration: none;
    display: block;
    padding: 14px 16px;
    border-radius: 12px;
    background-color: #141414;
    cursor: pointer;
  }

  .mobile-collapsible > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-collapsible > span::after {
    content: '+';
    color: #00bfa6;
    font-size: 1.2rem;
  }

  .mobile-submenu {
    list-style: none;
    padding: 4px 0 12px 16px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .mobile-submenu a {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    color: rgba(245, 245, 245, 0.55);
    text-decoration: none;
    padding: 10px 16px;
    display: block;
  }

  .mobile-action-li {
    margin-top: 16px;
  }

  .apply-btn-mobile {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    background-color: #00bfa6;
    color: #0a0a0a;
    border: none;
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    cursor: pointer;
  }

  .announcement-text {
    font-size: 0.8rem;
    line-height: 1.4;
    text-align: center;
  }
}
</style> -->
<template>
  <header class="header-wrapper">
    <nav class="navbar">
      <RouterLink to="/" class="nav-left">
        <div class="logo-crest">
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
        <span class="school-name">XYZ Gate Academy</span>
      </RouterLink>

      <div class="nav-center">
        <ul class="nav-links">
          <!-- <li class="nav-item">
            <RouterLink to="/" class="nav-anchor">Home</RouterLink>
          </li> -->

          <li class="nav-item has-dropdown">
            <span class="nav-anchor">
              About Us
              <svg
                class="chevron-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
            <ul class="dropdown-menu">
              <li><RouterLink to="/about#our-story">Our Story</RouterLink></li>
              <li><RouterLink to="/about#mission-vision">Mission & Vision</RouterLink></li>
              <li><RouterLink to="/about#our-team">Our Team</RouterLink></li>
            </ul>
          </li>

          <li class="nav-item has-dropdown">
            <span class="nav-anchor">
              Academics
              <svg
                class="chevron-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
            <ul class="dropdown-menu">
              <li><a href="#">Nursery</a></li>
              <li><a href="#">Primary</a></li>
              <li><a href="#">Junior Secondary</a></li>
              <li><a href="#">Senior Secondary</a></li>
              <li><a href="#">Curriculum</a></li>
            </ul>
          </li>

          <li class="nav-item has-dropdown">
            <span class="nav-anchor">
              Admissions
              <svg
                class="chevron-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
            <ul class="dropdown-menu">
              <li><a href="#">How to Apply</a></li>
              <li><a href="#">Requirements</a></li>
              <li><a href="#">School Fees</a></li>
              <li><a href="#">Open Days</a></li>
              <li><a href="#">Apply Online</a></li>
            </ul>
          </li>

          <li class="nav-item has-dropdown">
            <span class="nav-anchor">
              More
              <svg
                class="chevron-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
            <ul class="dropdown-menu">
              <li><a href="#">Student Life</a></li>
              <li><a href="#">Facilities</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">News & Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="nav-right">
        <button @click="toggleTheme" class="theme-btn desktop-theme-btn" aria-label="Toggle theme">
          <span v-if="currentTheme === 'dark'">☀️</span>
          <span v-else>🌙</span>
        </button>

        <button class="apply-btn">Apply Now</button>

        <button
          class="mobile-toggle"
          @click="toggleMobileMenu"
          :class="{ 'is-active': isMobileMenuOpen }"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <div v-if="isAnnouncementVisible" class="announcement-bar">
      <div class="announcement-content">
        <span class="bell-emoji">🔔</span>
        <p class="announcement-text">
          Admission for 2025/2026 session is now open — Applications close December 31st
        </p>
      </div>
      <button class="close-announcement" @click="closeAnnouncement" aria-label="Close notification">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <div class="mobile-overlay" :class="{ 'is-open': isMobileMenuOpen }">
      <ul class="mobile-links">
        <li class="mobile-theme-row">
          <span class="theme-label">Switch Theme</span>
          <button @click="toggleTheme" class="theme-btn">
            <span v-if="currentTheme === 'dark'">☀️ Light Mode</span>
            <span v-else>🌙 Dark Mode</span>
          </button>
        </li>
        <li><a href="#" @click="toggleMobileMenu">Home</a></li>
        <li class="mobile-collapsible">
          <span @click="toggleMobileSubmenu('about')">About Us</span>
          <ul v-show="mobileSubmenus.about" class="mobile-submenu">
            <li><a href="#" @click="toggleMobileMenu">Our Story</a></li>
            <li><a href="#" @click="toggleMobileMenu">Principal's Message</a></li>
            <li><a href="#" @click="toggleMobileMenu">Mission & Vision</a></li>
            <li><a href="#" @click="toggleMobileMenu">Our Team</a></li>
          </ul>
        </li>
        <li class="mobile-collapsible">
          <span @click="toggleMobileSubmenu('academics')">Academics</span>
          <ul v-show="mobileSubmenus.academics" class="mobile-submenu">
            <li><a href="#" @click="toggleMobileMenu">Nursery</a></li>
            <li><a href="#" @click="toggleMobileMenu">Primary</a></li>
            <li><a href="#" @click="toggleMobileMenu">Junior Secondary</a></li>
            <li><a href="#" @click="toggleMobileMenu">Senior Secondary</a></li>
            <li><a href="#" @click="toggleMobileMenu">Curriculum</a></li>
          </ul>
        </li>
        <li class="mobile-collapsible">
          <span @click="toggleMobileSubmenu('admissions')">Admissions</span>
          <ul v-show="mobileSubmenus.admissions" class="mobile-submenu">
            <li><a href="#" @click="toggleMobileMenu">How to Apply</a></li>
            <li><a href="#" @click="toggleMobileMenu">Requirements</a></li>
            <li><a href="#" @click="toggleMobileMenu">School Fees</a></li>
            <li><a href="#" @click="toggleMobileMenu">Open Days</a></li>
            <li><a href="#" @click="toggleMobileMenu">Apply Online</a></li>
          </ul>
        </li>
        <li class="mobile-collapsible">
          <span @click="toggleMobileSubmenu('more')">More</span>
          <ul v-show="mobileSubmenus.more" class="mobile-submenu">
            <li><a href="#" @click="toggleMobileMenu">Student Life</a></li>
            <li><a href="#" @click="toggleMobileMenu">Facilities</a></li>
            <li><a href="#" @click="toggleMobileMenu">Gallery</a></li>
            <li><a href="#" @click="toggleMobileMenu">News & Blog</a></li>
            <li><a href="#" @click="toggleMobileMenu">Contact Us</a></li>
          </ul>
        </li>
        <li class="mobile-action-li">
          <button class="apply-btn-mobile">Apply Now</button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const isAnnouncementVisible = ref(true)
const isMobileMenuOpen = ref(false)
const currentTheme = ref('dark')

const mobileSubmenus = reactive({
  about: false,
  academics: false,
  admissions: false,
  more: false,
})

const toggleTheme = () => {
  if (currentTheme.value === 'dark') {
    currentTheme.value = 'light'
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  } else {
    currentTheme.value = 'dark'
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }
}

const closeAnnouncement = () => {
  isAnnouncementVisible.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleMobileSubmenu = (menu) => {
  mobileSubmenus[menu] = !mobileSubmenus[menu]
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  currentTheme.value = savedTheme
  document.documentElement.setAttribute('data-theme', savedTheme)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap');

.header-wrapper {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

a {
  text-decoration: none;
}
.navbar {
  height: 80px;
  max-width: 1300px;
  margin: 20px 20px 0;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  /* Robust multi-layered deep shadow baseline (Dark Mode) */
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.7),
    0 12px 24px -4px rgba(0, 0, 0, 0.6),
    0 20px 40px -8px rgba(0, 0, 0, 0.8);
}

/* Highly distinct, premium shadow override for Light Mode */
[data-theme='light'] .navbar {
  box-shadow:
    0 4px 10px -1px rgba(10, 10, 10, 0.03),
    0 16px 32px -4px rgba(10, 10, 10, 0.08),
    0 24px 48px -8px rgba(10, 10, 10, 0.06);
}
.nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-crest {
  width: 32px;
  height: 32px;
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-crest svg {
  width: 100%;
  height: 100%;
}

.school-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.45rem;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: -0.2px;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.nav-center {
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

.nav-item {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-anchor {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.25s ease;
}

.nav-anchor:hover {
  color: var(--text-main);
  background-color: var(--border-subtle);
}

.chevron-icon {
  width: 12px;
  height: 12px;
  opacity: 0.6;
  transition: transform 0.25s ease;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% - 12px);
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 10px;
  min-width: 200px;
  list-style: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 0.25s ease,
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    visibility 0.25s,
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.dropdown-menu li a {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--text-muted);
  text-decoration: none;
  padding: 10px 16px;
  display: block;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.dropdown-menu li a:hover {
  color: var(--accent);
  background-color: var(--accent-tint);
}

.has-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.has-dropdown:hover .chevron-icon {
  transform: rotate(180deg);
  color: var(--accent);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.theme-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: var(--border-subtle);
  color: var(--text-main);
  border: 1px solid var(--border-subtle);
  padding: 8px 16px;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.desktop-theme-btn {
  width: 38px;
  height: 38px;
  padding: 0;
  font-size: 1.1rem;
}

.theme-btn:hover {
  border-color: var(--accent);
  background-color: var(--accent-tint);
}

.apply-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: var(--accent);
  color: #0a0a0a;
  border: 1px solid var(--accent);
  padding: 10px 24px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.apply-btn:hover {
  background-color: transparent;
  color: var(--accent);
  box-shadow: 0 0 15px var(--accent-tint);
}

.mobile-toggle {
  display: none;
}

.announcement-bar {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  display: none;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.announcement-content {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
}

.bell-emoji {
  font-size: 0.95rem;
}

.announcement-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-main);
  opacity: 0.9;
  margin: 0;
  letter-spacing: 0.2px;
  transition: color 0.3s ease;
}

.close-announcement {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: color 0.2s ease;
}

.close-announcement svg {
  width: 100%;
  height: 100%;
}

.close-announcement:hover {
  color: var(--accent);
}

.mobile-overlay {
  display: none;
}

@media (max-width: 992px) {
  .navbar {
    margin: 0;
    border-radius: 0;
    background-color: var(--bg-primary);
    border-left: none;
    border-right: none;
    border-top: none;
  }

  .nav-center,
  .apply-btn,
  .desktop-theme-btn {
    display: none;
  }

  .mobile-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 22px;
    height: 14px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1100;
  }

  .mobile-toggle span {
    width: 100%;
    height: 2px;
    background-color: var(--text-main);
    transition: all 0.3s ease;
  }

  .mobile-toggle.is-active span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
    background-color: var(--accent);
  }

  .mobile-toggle.is-active span:nth-child(2) {
    transform: translateY(-6px) rotate(-45deg);
    background-color: var(--accent);
  }

  .mobile-overlay {
    display: block;
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: var(--bg-primary);
    z-index: 1050;
    transform: translateX(100%);
    transition:
      transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      background-color 0.3s ease;
    overflow-y: auto;
    padding: 24px;
    box-sizing: border-box;
  }

  .mobile-overlay.is-open {
    transform: translateX(0);
  }

  .mobile-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mobile-theme-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background-color: var(--bg-surface);
    border: 1px solid var(--border-subtle);
    border-radius: 12px;
    margin-bottom: 8px;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease;
  }

  .theme-label {
    font-family: 'DM Sans', sans-serif;
    color: var(--text-muted);
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .mobile-links li > a,
  .mobile-collapsible > span {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.15rem;
    font-weight: 500;
    color: var(--text-main);
    text-decoration: none;
    display: block;
    padding: 14px 16px;
    border-radius: 12px;
    background-color: var(--bg-surface);
    border: 1px solid var(--border-subtle);
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;
  }

  .mobile-collapsible > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-collapsible > span::after {
    content: '+';
    color: var(--accent);
    font-size: 1.2rem;
  }

  .mobile-submenu {
    list-style: none;
    padding: 4px 0 12px 16px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .mobile-submenu a {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    color: var(--text-muted);
    text-decoration: none;
    padding: 10px 16px;
    display: block;
    transition: color 0.3s ease;
  }

  .mobile-action-li {
    margin-top: 16px;
  }

  .apply-btn-mobile {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    background-color: var(--accent);
    color: #0a0a0a;
    border: none;
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    cursor: pointer;
  }

  .announcement-text {
    font-size: 0.8rem;
    line-height: 1.4;
    text-align: center;
  }
}
</style>
