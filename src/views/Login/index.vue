<script setup lang="ts">
import { ref, shallowRef, watchEffect } from 'vue'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'

const formComponent = shallowRef()
const active = ref<'login' | 'register'>('login')

const handleUpdate = (val: 'login' | 'register') => {
  active.value = val
}

watchEffect(() => {
  if (active.value === 'login')
    formComponent.value = LoginForm
  else
    formComponent.value = RegisterForm
})
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <div class="flex items-center gap-3">
      <img src="@/assets/vue.svg" alt="logo">
      <h1>RVA Admin Vue</h1>
    </div>
    <component :is="formComponent" @updateStatus="handleUpdate" />
  </div>
</template>

<style scoped>

</style>
