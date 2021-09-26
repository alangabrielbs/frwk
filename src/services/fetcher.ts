import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API_URL || ''

const http = axios.create({
  baseURL: url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

type ParamsProps = {
  readonly [key: string]: string | string[]
}

export const fetcher = (path: string, params?: ParamsProps) =>
  http
    .get(path, {
      params
    })
    .then((res) => res.data)
