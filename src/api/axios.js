import axios from 'axios'
//添加请求拦截器
axios.interceptors.request.use(
  config=>{
    return config
  }
)

axios.interceptors.response.use(
  response=>{
    return response.data
  },
  error=>{
    return Promise.reject(error);
  }
)

export default axios;