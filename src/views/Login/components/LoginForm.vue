<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInst, FormRules } from 'naive-ui'
import { Locked, User } from '@vicons/carbon'
import { login } from '@/api/session'

const emits = defineEmits(['updateStatus'])

const formRef = ref<FormInst | null>(null)
const form = reactive({
  username: '',
  password: '',
})
const rules: FormRules = {}

const rememberMe = ref(false)

const handleLogin = () => {
  login({ identifier: form.username, password: form.password }).then((res) => {
    // eslint-disable-next-line no-console
    console.log(res)
  })
}

const goToRegister = () => {
  emits('updateStatus', 'register')
}
</script>

<template>
  <n-form ref="formRef" :model="form" :rules="rules" label-placement="left" class="w-1/4 p-5">
    <h1 class="font-bold text-center text-xl mb-5">
      Sign In
    </h1>
    <n-form-item path="username">
      <n-input v-model:value="form.username" placeholder="Please Input Username">
        <template #prefix>
          <n-icon :component="User" />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item path="password">
      <n-input v-model:value="form.password" placeholder="Please Input Password" type="password" show-password-on="click">
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
      <n-button type="primary" class="w-full" @click="handleLogin">
        Sign In
      </n-button>
    </n-form-item>
    <n-form-item>
      <n-button tertiary class="w-full" @click="goToRegister">
        Sign Up
      </n-button>
    </n-form-item>
  </n-form>
</template>

<style scoped>

</style>
