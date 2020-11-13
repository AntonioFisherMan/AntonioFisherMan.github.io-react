import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:5001/',
    headers: {
        'x-auth-token': sessionStorage.getItem('token'),
    },
})
export const multiData = {}
