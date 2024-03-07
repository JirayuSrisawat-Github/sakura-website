<template>
  <div
    class="flex flex-col items-center space-y-4 justify-center min-h-screen max-h-screen"
  >
    <img
      src="/profile.png"
      alt="SAKURA"
      class="w-64 h-64 shadow-lg rounded-full"
    />
    <h1 class="text-5xl">{{ CLIENT_NAME }}</h1>
  </div>
</template>

<script setup lang="ts">
import { CLIENT_NAME, ABOUT_US } from "~/server/config";
</script>
