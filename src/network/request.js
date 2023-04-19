import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL:'http://localhost:3000',
        timeout: 5000
      })
    //axios的拦截器
    //请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
      })

    //响应拦截器
    instance.interceptors.response.use(res => {
        return res.data
      })

    //发送真正的网络请求
    //因为instance本身就是返回Promise
    return instance(config).catch((e) => {})
}
