import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL|| "http://loachost:4500",
    withCredentials: true,
})

export default api;