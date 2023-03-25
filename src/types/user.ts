export interface UserRes {
  id: number
  username: string
  email: string
  provider: 'local'
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
}
