'user strict'

import userService from "../services/user.service"

export default {
    state: {
        users: [],
        user: userService.getUser()
    },
    mutations: {
        addUser(state, { user }) {
            state.users.unshift(user)
        },
        setUser(state, { user }) {
            state.user = user
        }
    },
    actions: {
        async register(context, { user }) {
            const addedUser = await userService.register(user)
            context.commit({ type: 'addUser', user: addedUser })
            context.commit({ type: 'setUser', user: addedUser })
        },
        async login(context, { user }) {
            const loginUser = await userService.login(user)
            context.commit({ type: 'setUser', user: loginUser })
        },
        async logout(context) {
            await userService.logout()
            context.commit({ type: 'setUser', user: null })
        }
    },
    getters: {
        usersToShow(state) {
            return state.users
        },
        loginUser(state){
            return state.user

        }
    }

}