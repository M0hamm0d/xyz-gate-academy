<script setup>
import { RouterView } from 'vue-router'
import FooterSection from './components/FooterSection.vue'
import HeaderSection from './components/HeaderSection.vue'
import './assets/main.css'
</script>

<template>
  <HeaderSection />
  <RouterView />
  <FooterSection />
</template>

<style scoped></style>
