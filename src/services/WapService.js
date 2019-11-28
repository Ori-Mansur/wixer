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

const BASE_URL = '/wap'
async function query() {
    return await HttpService.get('/wap')
}
async function getById(id) {
    return await HttpService.get(`${BASE_URL}/${id}`)
}
async function add(wap) {
    console.log('add', wap);

    // if (typeof wap === 'string') return cloudinaryService.uploadImg(wap.imgUrl)
    //     .then(res => res.url)
    //     .then(url => {
    //         wap.imgUrl = url
    //         return httpService.post(BASE_URL, wap)
    //             .then(res => res.data)
    //     })
    const res = await HttpService.post(BASE_URL, wap)
    console.log('resadd', res);

    return res
}
async function update(wap) {
    console.log('update', wap);

    // if (typeof wap === 'string') return cloudinaryService.uploadImg(wap.imgUrl)
    //     .then(res => res.url)
    //     .then(url => {
    //         wap.imgUrl = url
    //         return httpService.put(`${BASE_URL}/${wap.id}`, wap)
    //             .then(res => res.data)
    //     })
    // else 
    const res = await HttpService.put(`${BASE_URL}/${wap.id}`, wap)
    console.log('res', res);

    return res
}
async function remove(id) {
    const res = await httpService.delete(`${BASE_URL}/${id}`)
    return await res.data
}