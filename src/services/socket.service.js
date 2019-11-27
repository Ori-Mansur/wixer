'use strict'
import io from 'socket.io-client';
import userService from './user.service.js'
const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/'
    : '//localhost:3150' 
const socket = io(BASE_URL);

export default {
    on,
    emit    
}

function on(eventName, cb) {
    socket.on(eventName, cb)
}

function emit(eventName, data) {
    const user=userService.getUser()
    if(user && typeof data === 'object')data.from=user.username
    socket.emit(eventName, data)
}