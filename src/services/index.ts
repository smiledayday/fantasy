import axios, { AxiosResponse } from 'axios'

type RequestConfig = {
  method?: 'GET' | 'POST'
  url: string
  data?: any
}

async function request({ method = 'GET', url, data }: RequestConfig): Promise<AxiosResponse> {
  try {
    const response = await axios({
      method,
      url,
      data
    })
    return response
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function get(url: string, data?: any): Promise<AxiosResponse> {
  return request({ method: 'GET', url, data })
}

export async function post(url: string, data?: any): Promise<AxiosResponse> {
  return request({ method: 'POST', url, data })
}
