<template>
  <div id="SAKURA_STATS">
    <h1 class="text-3xl">LAVALINK</h1>
    <div class="mt-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="item in data.lavalink" class="bg-white/5 rounded-lg p-2">
          <h1 :class="item.connected ? 'text-green-600' : 'text-red-600'">
            {{ item.options.identifier }}
          </h1>
          <div class="flex justify-between items-center" v-if="item.connected">
            <p>Connected</p>
            <p>{{ item.stats.players }}</p>
          </div>
          <div class="flex justify-between items-center" v-if="item.connected">
            <p>Playing</p>
            <p>{{ item.stats.playingPlayers }}</p>
          </div>
          <div class="flex justify-between items-center" v-if="item.connected">
            <p>Memory (Used)</p>
            <p>{{ (item.stats.memory.used / 1024 / 1024).toFixed(0) }}MB</p>
          </div>
          <div class="flex justify-between items-center" v-if="item.connected">
            <p>CPU</p>
            <p>
              {{
                parseInt(item.stats.cpu.lavalinkLoad.toFixed(0)) +
                parseInt(item.stats.cpu.systemLoad.toFixed(0))
              }}% ({{ (item.stats.cpu.cores * 100).toFixed(0) }}%)
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr class="opacity-50 rounded my-6" />
    <h1 class="text-3xl">SAKURA</h1>
    <div class="mt-4">
      <div class="grid grid-cols-1 gap-4">
        <div class="bg-white/5 rounded-lg p-2">
          <h1 class="text-green-600">SAKURA</h1>
          <div class="flex justify-between items-center">
            <p>CPU</p>
            <p>{{ data.client.loadavg }}%</p>
          </div>
          <div class="flex justify-between items-center">
            <p>Memory</p>
            <p>
              {{ parseInt(data.client.memory_usage) }}MB/{{
                parseInt(data.client.memory_total)
              }}MB
            </p>
          </div>
          <div class="flex justify-between items-center">
            <p>OS</p>
            <p>
              {{ data.client.os }}
            </p>
          </div>
          <div class="flex justify-between items-center">
            <p>Runtime</p>
            <p>
              {{ data.client.runtime }}
            </p>
          </div>
          <div class="flex justify-between items-center">
            <p>Libary</p>
            <p>
              {{ data.client.libary }}
            </p>
          </div>
          <div class="flex justify-between items-center">
            <p>Ping</p>
            <p>{{ data.client.ping }}ms</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";

const { pending, data, error, refresh } = await useFetch("/api/stats");

useIntervalFn(() => {
  refresh();
}, 100);
</script>
