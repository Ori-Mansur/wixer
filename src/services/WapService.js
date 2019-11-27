'use strict'
import HttpService from './HttpService.js'
import cloudinaryService from './cloudinary.service.js'

export default {
    query,
    getById,
    add,
    update,
    remove
}
// const BASE_URL = (process.env.NODE_ENV !== 'development')
//     ? '/api/wap'
//     : '//localhost:3150/api/wap';


async function query() {
    return await HttpService.get('/wap')
}
async function getById(id) {
    const res = await httpService.get(`${BASE_URL}/${id}`)
    return await res.data
}
function add(wap) {
    if (typeof wap.imgUrl !== 'string') return cloudinaryService.uploadImg(wap.imgUrl)
        .then(res => res.url)
        .then(url => {
            wap.imgUrl = url
            return httpService.post(BASE_URL, wap)
                .then(res => res.data)
        })
    else return httpService.post(BASE_URL, wap)
        .then(res => res.data)
}
function update(wap) {
    if (typeof wap.imgUrl !== 'string') return cloudinaryService.uploadImg(wap.imgUrl)
        .then(res => res.url)
        .then(url => {
            wap.imgUrl = url
            return httpService.put(`${BASE_URL}/${wap._id}`, wap)
                .then(res => res.data)
        })
    else return httpService.put(`${BASE_URL}/${wap._id}`, wap)
        .then(res => res.data)
}
async function remove(id) {
    const res = await httpService.delete(`${BASE_URL}/${id}`)
    return await res.data
}