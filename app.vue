<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtErrorBoundary>
      <template #error="{ error }">
        <p>An error occurred: {{ error }}</p>
      </template>

      <NuxtPage />
    </NuxtErrorBoundary>
  </NuxtLayout>
</template>

<style lang="css">
body {
  @apply w-full min-h-screen bg-gradient-to-br from-slate-100 to-white text-zinc-950 dark:from-zinc-900 dark:to-zinc-950 dark:text-white;

  /* Readex Pro */
  font-family: "Readex Pro", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "HEXP" 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<script setup lang="ts"></script>
