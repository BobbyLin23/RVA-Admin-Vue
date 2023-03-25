<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInst } from 'naive-ui'
import { Locked, User } from '@vicons/carbon'

const emits = defineEmits(['updateStatus'])

const formRef = ref<FormInst | null>(null)
const form = reactive({
  username: '',
  password: '',
  confirmPassword: '',
})

const goToLogin = () => {
  emits('updateStatus', 'login')
}
</script>

<template>
  <n-form ref="formRef" :model="form" :rules="rules" label-placement="left" class="w-1/4  p-5">
    <h1 class="font-bold text-center text-xl mb-5">
      Sign Up
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
    <n-form-item path="confirmPassword">
      <n-input v-model="form.confirmPassword" type="password" show-password-on="click">
        <template #prefix>
          <n-icon :component="Locked" />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item>
      <n-checkbox>Agree Terms</n-checkbox>
    </n-form-item>
    <n-form-item>
      <n-button type="info" class="w-full">
        Sign Up
      </n-button>
    </n-form-item>
    <n-form-item>
      <n-button strong secondary class="w-full" @click="goToLogin">
        Back
      </n-button>
    </n-form-item>
  </n-form>
</template>

<style scoped>

</style>
