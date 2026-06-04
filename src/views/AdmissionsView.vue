<script setup>
import AdmissionCTA from '@/components/AdmissionCTA.vue'
import AdmissionsHero from '@/components/AdmissionsHero.vue'
import FaqSection from '@/components/FaqSection.vue'
// import SchoolFees from '@/components/SchoolFees.vue'
import StepsToApply from '@/components/StepsToApply.vue'
</script>

<template>
  <div class="admissions-page">
    <AdmissionsHero />
    <StepsToApply />
    <!-- <SchoolFees /> -->
    <FaqSection />
    <AdmissionCTA />
  </div>
</template>
