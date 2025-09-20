import axios from 'axios'


const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:8080',
    timeout: 10000,
})


// 请求拦截器（可加入 token）
client.interceptors.request.use((config) => {
// const token = localStorage.getItem('token')
// if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})


// 响应拦截器（统一错误处理）
client.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error('API error:', err?.response?.data || err.message)
        return Promise.reject(err)
    }
)


export default client