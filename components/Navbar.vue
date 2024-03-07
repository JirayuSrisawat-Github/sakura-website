<template>
  <nav
    class="flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70 text-black dark:text-white"
    style="--navbar-height: 4rem; transform: none"
    :data-menu-open="isOpen"
  >
    <header
      class="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1024px]"
      :data-menu-open="isOpen"
    >
      <div
        class="flex gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0"
        data-justify="start"
      >
        <button
          class="group flex items-center justify-center w-6 h-full rounded-small tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2"
          type="button"
          aria-label="Open/Close menu"
          :aria-pressed="isOpen"
          style="user-select: none"
          :data-open="isOpen"
          @click="onIsOpenStateChange()"
        >
          <span class="sr-only">close navigation menu</span
          ><span
            class="w-full h-full pointer-events-none flex flex-col items-center justify-center text-inherit group-data-[pressed=true]:opacity-70 transition-opacity before:content-[''] before:block before:h-px before:w-6 before:bg-current before:transition-transform before:duration-150 before:-translate-y-1 before:rotate-0 group-data-[open=true]:before:translate-y-px group-data-[open=true]:before:rotate-45 after:content-[''] after:block after:h-px after:w-6 after:bg-current after:transition-transform after:duration-150 after:translate-y-1 after:rotate-0 group-data-[open=true]:after:translate-y-0 group-data-[open=true]:after:-rotate-45"
          ></span>
        </button>
      </div>
      <div
        class="flex gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0"
        data-justify="center"
      >
        <div
          class="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border"
        >
          <NuxtLink
            class="font-bold text-slate-800 text-inherit uppercase dark:text-white"
            href="/"
            >{{ CLIENT_NAME }}</NuxtLink
          >
        </div>
      </div>
    </header>
  </nav>

  <Menu v-if="isOpen" />
</template>

<script setup lang="ts">
import { CLIENT_NAME } from "~/server/config";

const isOpen = ref(false);

const onIsOpenStateChange = (): void => {
  isOpen.value = !isOpen.value;
};
</script>
