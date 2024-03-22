<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const versions = reactive({ ...window.electron.process.versions })
</script>
<template>
  <div class="about">
    <h1>About</h1>
    <p>Current route path: {{ route.fullPath }}</p>
    <p>
      <RouterLink to="/">Go to Home</RouterLink>
    </p>
    <p>
      <strong>Electron:</strong> {{ versions.electron }}<br />
      <strong>Chrome:</strong> {{ versions.chrome }}<br />
      <strong>Node:</strong> {{ versions.node }}
    </p>
  </div>
</template>
