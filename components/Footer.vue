<template>
  <p class="text-white/50 text-center">
    RLSS PROJECT <span class="text-xs">&copy; 2024 - {{ currentYear }}</span>
  </p>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
