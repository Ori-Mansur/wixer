'use strict'
import httpService from './http-service.js'
import cloudinaryService from './cloudinary.service.js'

export default {
    query,
    getById,
    add,
    update,
    remove
}
const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/toy'
    : '//localhost:3150/api/toy';
async function query() {
    const res = await httpService.get(BASE_URL)
    return await res.data
}
async function getById(id) {
    const res = await httpService.get(`${BASE_URL}/${id}`)
    return await res.data
}
function add(toy) {
    if (typeof toy.imgUrl !== 'string') return cloudinaryService.uploadImg(toy.imgUrl)
        .then(res => res.url)
        .then(url => {
            toy.imgUrl = url
            return httpService.post(BASE_URL, toy)
                .then(res => res.data)
        })
    else return httpService.post(BASE_URL, toy)
        .then(res => res.data)
}
function update(toy) {
    if (typeof toy.imgUrl !== 'string') return cloudinaryService.uploadImg(toy.imgUrl)
        .then(res => res.url)
        .then(url => {
            toy.imgUrl = url
            return httpService.put(`${BASE_URL}/${toy._id}`, toy)
                .then(res => res.data)
        })
    else return httpService.put(`${BASE_URL}/${toy._id}`, toy)
        .then(res => res.data)
}
async function remove(id) {
    const res = await httpService.delete(`${BASE_URL}/${id}`)
    return await res.data
}