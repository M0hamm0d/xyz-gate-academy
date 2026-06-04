<template>
  <section id="our-team" class="team-section">
    <div class="team-container">
      <!-- Section Header -->
      <div class="team-header">
        <h2 class="main-title">Our team — faculty & staff</h2>
        <p class="section-subtitle">
          Leadership first (Principal, Vice-Principal, Heads of Department) in larger cards with
          more detail. Then full staff grid below in smaller cards — photo, name, subject,
          qualification. Filter tabs let you browse by department.
        </p>
      </div>

      <!-- LEADERSHIP SECTION -->
      <div class="management-block">
        <h3 class="group-label">LEADERSHIP</h3>
        <div class="leadership-grid">
          <div v-for="leader in leadershipList" :key="leader.id" class="leader-card">
            <div class="avatar-frame">
              <img :src="leader.image" :alt="leader.name" class="staff-img" />
            </div>
            <div class="profile-summary">
              <h4 class="member-name">{{ leader.name }}</h4>
              <p class="member-role">{{ leader.role }}</p>
              <p class="member-qualification">{{ leader.qualification }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ALL STAFF GRID SECTION -->
      <div class="staff-block">
        <h3 class="group-label">ALL STAFF</h3>

        <!-- Filter Category Pills Navigation Track -->
        <div class="filter-tabs-track">
          <button
            v-for="tab in filterCategories"
            :key="tab.value"
            class="filter-pill-btn"
            :class="{ 'is-active': activeCategory === tab.value }"
            @click="handleCategoryChange(tab.value)"
          >
            {{ tab.name }}
          </button>
        </div>

        <!-- Filtered & Paginated Grid Collection -->
        <div class="staff-grid">
          <div v-for="member in visibleStaffList" :key="member.id" class="staff-card">
            <div class="avatar-frame-small">
              <img :src="member.image" :alt="member.name" class="staff-img" />
            </div>
            <div class="profile-summary-small">
              <h4 class="member-name-small">{{ member.name }}</h4>
              <p class="member-role-small">{{ member.role }}</p>
              <p class="member-qualification-small">{{ member.qualification }}</p>
            </div>
          </div>
        </div>

        <!-- Pagination Load More Footer Control (Only visible if there's more to load) -->
        <div class="pagination-footer" v-if="hasMoreStaff">
          <p class="counter-text">
            Showing {{ visibleStaffList.length }} of {{ totalFilteredCount }} staff members —<button
              class="load-more-triggering"
              @click="loadMoreStaff"
            >
              Load more ↓
            </button>
          </p>
        </div>

        <!-- Fully Loaded Confirmation Notice -->
        <div class="all-loaded-notice" v-else>
          <p class="counter-text">All {{ totalFilteredCount }} faculty members loaded.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// 1. Filter Handling State Metrics
const activeCategory = ref('all')
const itemsPerPage = 4 // Clean small batch count to make testing pagination obvious immediately
const visibleLimit = ref(itemsPerPage)

const filterCategories = [
  { name: 'All', value: 'all' },
  { name: 'Sciences', value: 'sciences' },
  { name: 'Arts & English', value: 'arts-english' },
  { name: 'Maths', value: 'maths' },
  { name: 'Social Science', value: 'social-science' },
  { name: 'Admin', value: 'admin' },
]

// 2. Executive Management Leadership Static Properties
const leadershipList = ref([
  {
    id: 'lead-1',
    name: 'Dr. Adewale Ogundimu',
    role: 'Principal & Founder',
    qualification: 'B.Ed, M.Sc, PhD Education',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'lead-2',
    name: 'Mrs. Chioma Eze',
    role: 'Vice Principal, Academics',
    qualification: 'B.Ed, M.Ed English',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
  },
])

// 3. Expanded Dataset Array containing 12 distinct teachers for pagination staging
const staffList = ref([
  {
    id: 'staff-1',
    name: 'Mr. Adebayo O.',
    role: 'Head of Sciences',
    qualification: 'M.Sc Physics',
    category: 'sciences',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'staff-2',
    name: 'Mrs. Okonkwo C.',
    role: 'Head of English',
    qualification: 'B.Ed TESOL',
    category: 'arts-english',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'staff-3',
    name: 'Mr. Ibrahim S.',
    role: 'Head of Maths',
    qualification: 'M.Sc Statistics',
    category: 'maths',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'staff-4',
    name: 'Miss Afolabi T.',
    role: 'Biology Teacher',
    qualification: 'B.Sc Biology',
    category: 'sciences',
    image:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'staff-5',
    name: 'Mr. Nwachukwu E.',
    role: 'Chemistry Teacher',
    qualification: 'M.Sc Chemistry',
    category: 'sciences',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'staff-6',
    name: 'Mrs. Sani R.',
    role: 'Further Maths',
    qualification: 'B.Sc Mathematics',
    category: 'maths',
    image:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'staff-7',
    name: 'Mr. Bello K.',
    role: 'Government',
    qualification: 'B.A Political Sci.',
    category: 'social-science',
    image:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'staff-8',
    name: 'Miss Osei A.',
    role: 'ICT Teacher',
    qualification: 'B.Sc Computer Sci.',
    category: 'admin',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'staff-9',
    name: 'Mr. Fagbemi D.',
    role: 'Economics Teacher',
    qualification: 'B.Sc, M.Sc Economics',
    category: 'social-science',
    image:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'staff-10',
    name: 'Mrs. Alabi M.',
    role: 'Literature Teacher',
    qualification: 'B.A Education English',
    category: 'arts-english',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'staff-11',
    name: 'Dr. Usman A.',
    role: 'Agricultural Science',
    qualification: 'PhD Agronomy',
    category: 'sciences',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'staff-12',
    name: 'Mrs. Williams J.',
    role: 'Admissions Registrar',
    qualification: 'B.A International Relations',
    category: 'admin',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
  },
])

// 4. Filtering Engine Computation
const filteredStaffList = computed(() => {
  if (activeCategory.value === 'all') {
    return staffList.value
  }
  return staffList.value.filter((member) => member.category === activeCategory.value)
})

// Max length of items matching current filter conditions
const totalFilteredCount = computed(() => filteredStaffList.value.length)

// Slice computation parsing based on actual pagination limit bounds
const visibleStaffList = computed(() => {
  return filteredStaffList.value.slice(0, visibleLimit.value)
})

// Control boolean checking whether load controls remain active
const hasMoreStaff = computed(() => {
  return visibleLimit.value < totalFilteredCount.value
})

// 5. Practical Interface Action Hooks
const loadMoreStaff = () => {
  visibleLimit.value += itemsPerPage
}

const handleCategoryChange = (categoryValue) => {
  activeCategory.value = categoryValue
  visibleLimit.value = itemsPerPage // Resets viewport pagination tracking instantly on structural category shifts
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.load-more-triggering {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
}

.team-section {
  background-color: var(--bg-primary);
  padding: 60px 24px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  scroll-margin-top: 100px;
}

.team-container {
  max-width: 1200px;
  margin: 0 auto;
}

.team-header {
  max-width: 900px;
  margin-bottom: 64px;
}

.main-title {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.2;
  margin: 0 0 16px 0;
  letter-spacing: -1px;
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

.group-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-main);
  opacity: 0.8;
  letter-spacing: 1.5px;
  margin: 0 0 28px 0;
}

/* MANAGEMENT BLOCKS STYLING */
.management-block {
  margin-bottom: 64px;
}

.leadership-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.leader-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 24px;
  padding: 32px 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 32px;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

[data-theme='light'] .leader-card,
[data-theme='light'] .staff-card {
  box-shadow: 0 8px 24px rgba(10, 10, 10, 0.02);
}

.avatar-frame {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--border-subtle);
  flex-shrink: 0;
}

.staff-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(10%) contrast(102%);
}

[data-theme='light'] .staff-img {
  filter: none;
}

.profile-summary {
  display: flex;
  flex-direction: column;
}

.member-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 6px 0;
  letter-spacing: -0.3px;
  transition: color 0.3s ease;
}

.member-role {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-main);
  opacity: 0.9;
  margin: 0 0 4px 0;
}

.member-qualification {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0;
}

/* PRIMARY STAFF BLOCKS STYLING */
.filter-tabs-track {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
}

.filter-pill-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 10px 24px;
  border-radius: 100px;
  cursor: pointer;
  background-color: var(--bg-surface);
  color: var(--text-main);
  border: 1px solid var(--border-subtle);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.filter-pill-btn:hover {
  border-color: var(--accent);
  background-color: var(--accent-tint);
}

.filter-pill-btn.is-active {
  background-color: var(--text-main);
  color: var(--bg-primary);
  border-color: var(--text-main);
}

[data-theme='light'] .filter-pill-btn.is-active {
  background-color: #0a0a0a;
  color: #f5f5f5;
  border-color: #0a0a0a;
}

.staff-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.staff-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 24px;
  padding: 40px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.staff-card:hover,
.leader-card:hover {
  border-color: var(--accent);
}

.avatar-frame-small {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--border-subtle);
  margin-bottom: 24px;
}

.member-name-small {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 6px 0;
  letter-spacing: -0.2px;
}

.member-role-small {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-main);
  opacity: 0.9;
  margin: 0 0 4px 0;
}

.member-qualification-small {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
}

/* PAGINATION FOOTER BUTTON STYLING */
.pagination-footer,
.all-loaded-notice {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 56px;
  width: 100%;
}

.counter-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--text-muted);
  margin: 0;
}

.load-more-trigger {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

[data-theme='light'] .load-more-trigger {
  box-shadow: 0 4px 12px rgba(10, 10, 10, 0.03);
}

.load-more-trigger svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.load-more-trigger:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(2px);
}

/* RESPONSIVE LAYOUT BREAKDOWN SYSTEM */
@media (max-width: 1024px) {
  .staff-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .leadership-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .staff-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .leader-card {
    padding: 24px;
    gap: 20px;
  }

  .avatar-frame {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 480px) {
  .team-section {
    padding: 80px 16px;
  }

  .staff-grid {
    grid-template-columns: 1fr;
  }

  .filter-tabs-track {
    gap: 8px;
  }

  .filter-pill-btn {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
}
</style>
