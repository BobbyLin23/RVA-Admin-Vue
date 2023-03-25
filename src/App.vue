<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import ApplicationConfig from '@/components/ApplicationConfig.vue'
</script>

<template>
  <n-config-provider :theme="darkTheme" class="w-full h-full">
    <ApplicationConfig>
      <router-view />
    </ApplicationConfig>
  </n-config-provider>
</template>

<style scoped>

</style>
