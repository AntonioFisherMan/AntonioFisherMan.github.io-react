import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://full-stack-shop.herokuapp.com/',
})

export const config = { headers: { 'Content-Type': 'multipart/form-data' } }
