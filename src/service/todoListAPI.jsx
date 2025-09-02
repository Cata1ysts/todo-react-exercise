import axios from "axios";

// 创建axios实例
const api = axios.create({
  baseURL: "/api",
});

export default api;
