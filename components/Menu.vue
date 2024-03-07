<template>
  <ul
    class="z-30 px-6 pt-2 fixed flex max-w-full top-[var(--navbar-height)] inset-x-0 bottom-0 w-screen flex-col gap-2 overflow-y-auto backdrop-blur-xl backdrop-saturate-150 bg-background/70"
    data-open="true"
    style="
      --navbar-height: 4rem;
      height: calc(100vh - var(--navbar-height) - 1px);
    "
  >
    <li
      v-for="item in items"
      class="text-large data-[active=true]:font-semibold"
      data-open="true"
    >
      <NuxtLink
        class="aria-[current=page]:font-bold relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-large text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity w-full"
        tabindex="0"
        role="link"
        :to="item.to"
        >{{ item.label }}</NuxtLink
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
const items = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Status",
    to: "/status",
  },
];
</script>
