import axios from "axios";

// 创建axios实例
const api = axios.create({
  baseURL: "/api",
});
// 请求拦截器
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;