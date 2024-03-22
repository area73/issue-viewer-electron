<script setup lang="ts">
import Versions from './components/Versions.vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <strong>Current route path:</strong> {{ route.fullPath }}
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/issues">Go to Issues table</RouterLink>
  </nav>
  <hr />
  <main>
    <RouterView />
  </main>
  <hr />
  <Versions />
</template>
