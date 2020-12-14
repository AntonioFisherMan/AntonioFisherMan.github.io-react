import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const config = { headers: { 'Content-Type': 'multipart/form-data' } }
