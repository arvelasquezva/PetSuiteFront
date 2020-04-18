import axios from 'axios';

const apiClient = axios.create({
    baseURL: `http://localhost:8081`,
    withCredentials: false, // This is the default
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "Content-Type",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "*",
        "cache-control": "no-cache",
        "Authorization": "Token eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyUGFzc3dvcmQiOiJudWxsIiwicm9sZSI6IlJPTEVfQ0xJRU5UIn0.Bf0RDUGwDNVUUl8jEWXka1uNymXTnFg7QiQfxK_dpDe0bfPpDmOERZu_3sdDSVDK2IWpWrf6pu23J54UQd1N4Q"
    }
})

export default {
    login() {
        return apiClient.post('/api/users/login')
    },
    getEvent(id) {
        return apiClient.get('/events/' + id)
    }
}