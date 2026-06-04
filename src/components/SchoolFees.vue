<template>
  <section id="school-fees" class="fees-section">
    <div class="fees-container">
      <!-- Section Header -->
      <div class="fees-header">
        <div class="section-badge">
          <span class="badge-dot"></span>
          <span class="badge-text">Financial Transparency</span>
        </div>
        <h2 class="main-title">Tuition & School Fees</h2>
        <p class="section-subtitle">
          Clear, structured breakdown of terminal financial configurations for the upcoming academic
          session. We ensure full transparency across all academic tiers.
        </p>
      </div>

      <!-- Financial Tier Toggle Grid Track -->
      <div class="fees-grid-canvas">
        <div v-for="tier in tuitionData" :key="tier.id" class="tuition-tier-card">
          <!-- Card Header Panel -->
          <div class="tier-card-header">
            <span class="tier-scope-tag">{{ tier.scope }}</span>
            <h3 class="tier-title-text">{{ tier.title }}</h3>
            <p class="tier-billing-cycle">Per Term</p>
          </div>

          <!-- Fees Structural Breakdown Table -->
          <div class="fees-table-panel">
            <div v-for="item in tier.breakdown" :key="item.label" class="table-row-item">
              <span class="fee-label">{{ item.label }}</span>
              <span class="fee-value">{{ item.value }}</span>
            </div>
          </div>

          <!-- Total Terminal Summary Highlight -->
          <div class="tier-total-footer">
            <div class="total-label-group">
              <span class="total-heading">Total Terminal Fee</span>
              <p class="total-subtext">Excludes optional services</p>
            </div>
            <span class="total-amount-display">{{ tier.total }}</span>
          </div>
        </div>
      </div>

      <!-- Ancillary Financial Guidelines Framework (Bento Style) -->
      <div class="financial-meta-grid">
        <!-- Left Sub-card: Compulsory Standard Uniforms & Items -->
        <div class="meta-bento-card">
          <h4 class="bento-meta-title">Additional Mandatory Items</h4>
          <p class="bento-meta-desc">
            One-time operational purchases applicable strictly to newly admitted pupils.
          </p>

          <ul class="meta-data-list">
            <li><span>School Uniforms (2 Sets + Sportswear)</span> <strong>₦45,000</strong></li>
            <li><span>Textbooks & Custom Workbook Pack</span> <strong>₦35,000</strong></li>
            <li><span>Medical Registration & Insurance</span> <strong>₦10,000</strong></li>
          </ul>
        </div>

        <!-- Right Sub-card: Optional Premium Ancillary Services -->
        <div class="meta-bento-card">
          <h4 class="bento-meta-title">Optional Services (Per Term)</h4>
          <p class="bento-meta-desc">
            Ancillary operations managed via external verified school logistics partners.
          </p>

          <ul class="meta-data-list">
            <li><span>School Bus Logistics Track (Round Trip)</span> <strong>₦50,000</strong></li>
            <li><span>Healthy Hot Lunch Program (Daily)</span> <strong>₦40,000</strong></li>
            <li><span>Elite After-School Club Tracks</span> <strong>₦15,000</strong></li>
          </ul>
        </div>
      </div>

      <!-- Official Bank Payment Channels Notice -->
      <div class="payment-channels-panel">
        <div class="payment-header-row">
          <div class="channel-icon-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <line x1="6" y1="22" x2="6" y2="11"></line>
              <line x1="10" y1="22" x2="10" y2="11"></line>
              <line x1="14" y1="22" x2="14" y2="11"></line>
              <line x1="18" y1="22" x2="18" y2="11"></line>
            </svg>
          </div>
          <div>
            <h4 class="channels-heading">Official Bank Payment Channels</h4>
            <p class="channels-subtext">
              All school fee settlements must be executed directly via bank transfer or draft. Cash
              transactions are strictly restricted.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Real backend-ready structured array modeling standard Nigerian premium school fee components
const tuitionData = ref([
  {
    id: 'fee-tier-1',
    scope: 'Nursery Level',
    title: 'Early Years Foundation',
    total: '₦180,000',
    breakdown: [
      { label: 'Tuition Fee', value: '₦120,000' },
      { label: 'Educational Materials', value: '₦30,000' },
      { label: 'Utility & Development Levy', value: '₦20,000' },
      { label: 'ICT & Sensory Lab Access', value: '₦10,000' },
    ],
  },
  {
    id: 'fee-tier-2',
    scope: 'Primary Level',
    title: 'Basic Classes 1 - 6',
    total: '₦230,000',
    breakdown: [
      { label: 'Tuition Fee', value: '₦150,000' },
      { label: 'Laboratory & Library Levy', value: '₦35,000' },
      { label: 'Utility & Development Levy', value: '₦25,000' },
      { label: 'ICT & Digital Literacy Program', value: '₦20,000' },
    ],
  },
  {
    id: 'fee-tier-3',
    scope: 'Secondary Level',
    title: 'JSS 1 - SSS 3 Tracks',
    total: '₦310,000',
    breakdown: [
      { label: 'Tuition Fee', value: '₦210,000' },
      { label: 'Science Lab & Workshop Practical Materials', value: '₦45,000' },
      { label: 'Utility & Development Levy', value: '₦30,000' },
      { label: 'Standardized Exam Coaching & ICT', value: '₦25,000' },
    ],
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.fees-section {
  background-color: var(--bg-primary);
  padding: 120px 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.fees-container {
  max-width: 1200px;
  width: 100%;
}

/* Header Typography Architecture */
.fees-header {
  max-width: 760px;
  margin-bottom: 72px;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--accent-tint);
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 24px;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background-color: var(--accent);
  border-radius: 50%;
}

.badge-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.main-title {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(2.2rem, 4.5vw, 3rem);
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.15;
  margin: 0 0 20px 0;
  letter-spacing: -1.5px;
}

.section-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0;
}

/* Main Cards Grid Engine */
.fees-grid-canvas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
  width: 100%;
}

.tuition-tier-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 28px;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 480px;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;
}

[data-theme='light'] .tuition-tier-card {
  box-shadow: 0 8px 30px rgba(10, 10, 10, 0.015);
}

.tuition-tier-card:hover {
  border-color: var(--accent);
}

.tier-scope-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1.2px;
  display: block;
  margin-bottom: 12px;
}

.tier-title-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 4px 0;
  letter-spacing: -0.5px;
}

.tier-billing-cycle {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0;
}

/* Structural Data Table Framework */
.fees-table-panel {
  margin: 36px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
}

.table-row-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  border-bottom: 1px dashed var(--border-subtle);
  padding-bottom: 12px;
}

.table-row-item:last-child {
  border-bottom: none;
}

.fee-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.4;
}

.fee-value {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-main);
  white-space: nowrap;
}

/* Card Total Panel Aggregator */
.tier-total-footer {
  border-top: 1px solid var(--border-subtle);
  padding-top: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-heading {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-main);
  display: block;
}

.total-subtext {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 2px 0 0 0;
}

.total-amount-display {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: -0.8px;
}

/* Secondary Bento Metadata Panel Setup */
.financial-meta-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}

.meta-bento-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 24px;
  padding: 36px;
  box-sizing: border-box;
}

.bento-meta-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 8px 0;
}

.bento-meta-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0 0 24px 0;
}

.meta-data-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.meta-data-list li {
  display: flex;
  justify-content: space-between;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 10px;
}

.meta-data-list li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.meta-data-list strong {
  color: var(--text-main);
  font-weight: 700;
}

/* Bank Payment Channels Bar Panel */
.payment-channels-panel {
  background-color: var(--bg-surface);
  border: 1px dashed var(--accent);
  border-radius: 20px;
  padding: 24px 32px;
  box-sizing: border-box;
  width: 100%;
}

.payment-header-row {
  display: flex;
  align-items: center;
  gap: 24px;
}

.channel-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: var(--accent-tint);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.channel-icon-wrap svg {
  width: 22px;
  height: 22px;
}

.channels-heading {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 4px 0;
}

.channels-subtext {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

/* Fluid Responsive Breakdowns */
@media (max-width: 1100px) {
  .fees-grid-canvas {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .tuition-tier-card {
    min-height: auto;
  }
}

@media (max-width: 768px) {
  .fees-section {
    padding: 80px 16px;
  }

  .financial-meta-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .meta-bento-card {
    padding: 28px 20px;
  }

  .payment-header-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
