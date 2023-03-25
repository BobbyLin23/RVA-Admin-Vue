import type { UserRes } from '@/types/user'

export interface LoginData {
  identifier: string
  password: string
}

export interface LoginRes {
  jwt: string
  user: UserRes
}
