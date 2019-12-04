'use strict'
import HttpService from './HttpService.js'

export default {
    query,
    getById,
    add,
    update,
    remove
}


const BASE_URL = 'wap'
async function query() {
    return await HttpService.get(BASE_URL)
}
async function getById(id) {
    return await HttpService.get(`${BASE_URL}/${id}`)
}
async function add(wap) {
    const res = await HttpService.post(BASE_URL, wap)
    return res
}
async function update(wap) {
    const res = await HttpService.put(`${BASE_URL}/${wap._id}`, wap)
    return res
}
async function remove(id) {
    const res = await HttpService.delete(`${BASE_URL}/${id}`)
    return await res.data
}