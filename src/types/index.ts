import type { Method, ResponseType } from 'axios'

export interface IAxiosConfig {
  url: string
  method: Method
  headers?: any
  json: boolean
  contentType?: string
  data?: any
  params?: any
  timeout?: number
  responseType?: ResponseType
}
