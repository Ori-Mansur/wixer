'use strict'
import HttpService from './http-service.js'
import hHttpService from './HttpService.js'
export default {
    login,
    logout,
    register,
    getUser
}
const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/form'
    : '//localhost:3150/api/form';


async function register(userCred) {
    const user = await hHttpService.post(`form/register`, userCred)
    return _handleLogin(user)
}
function getUser() {
    const user = JSON.parse(sessionStorage.getItem('user'))
    if (user) return user
    else return null
}
function remove(userId) {
    return HttpService.delete(`user/${userId}`)
}

async function login(userCred) {
    const user = await hHttpService.post('form/login', userCred)
    return _handleLogin(user)
}
async function signup(userCred) {
    const user = await HttpService.post(``, userCred)
    return _handleLogin(user)
}
async function logout() {
    await hHttpService.post('form/logout');
    sessionStorage.clear();
}
function getUsers() {
    return HttpService.get('user')
}

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}


