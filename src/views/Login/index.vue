<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInst, FormRules } from 'naive-ui'
import { Locked, User } from '@vicons/carbon'

const formRef = ref<FormInst | null>(null)
const form = reactive({
  username: '',
  password: '',
})
const rules: FormRules = {}

const rememberMe = ref(false)

const handleLogin = () => {}
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <div class="flex items-center gap-3">
      <img src="@/assets/vue.svg" alt="logo">
      <h1>RVA Admin Vue</h1>
    </div>
    <n-form ref="formRef" :model="form" :rules="rules" label-placement="left" class="w-1/4 bg-slate-100 p-5">
      <h1 class="font-bold text-center text-xl mb-5">
        Sign In
      </h1>
      <n-form-item path="username">
        <n-input v-model="form.username">
          <template #prefix>
            <n-icon :component="User" />
          </template>
        </n-input>
      </n-form-item>
      <n-form-item path="password">
        <n-input v-model="form.password" type="password" show-password-on="click">
          <template #prefix>
            <n-icon :component="Locked" />
          </template>
        </n-input>
      </n-form-item>
      <div class="w-full flex justify-between mb-5">
        <n-checkbox v-model:checked="rememberMe">
          Remember Me
        </n-checkbox>
        <n-button text>
          Forget Password?
        </n-button>
      </div>
      <n-form-item>
        <n-button type="info" class="w-full" @click="handleLogin">
          Sign In
        </n-button>
      </n-form-item>
      <n-form-item>
        <n-button strong secondary class="w-full">
          Sign Up
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<style scoped>

</style>
