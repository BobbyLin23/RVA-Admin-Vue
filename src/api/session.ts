import { request } from '@/utils/request'
import type { LoginData, LoginRes } from '@/types/session'

export function login(data: LoginData): Promise<LoginRes> {
  return request({
    url: '/api/auth/local',
    method: 'POST',
    data,
    json: true,
  })
}
