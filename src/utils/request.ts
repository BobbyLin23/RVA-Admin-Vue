import axios from 'axios'
import type { IAxiosConfig } from '@/types'

const service = axios.create({
  baseURL: '/api',
  timeout: 3000,
})

service.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use((res) => {
  return res
}, (err) => {
  return Promise.reject(err)
})

export function request<T>(arr: IAxiosConfig): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    axios({
      timeout: !arr.timeout ? 10000 : arr.timeout, // 请求超时时间
      url: arr.url,
      method: arr.method || 'POST',
      headers: {
        'content-type': arr.contentType ? arr.contentType : arr.json ? 'application/json; charset=UTF-8' : 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      params: arr.params || '',
      data: arr.data || '',
      responseType: arr.responseType || 'json',
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}
