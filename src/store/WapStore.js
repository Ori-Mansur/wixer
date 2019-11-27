'use strict'
var moment = require('moment');
import WapService from '../services/WapService.js'
export default {
    state: {
        waps: [],
        currWap: {}
    },
    mutations: {
        setWaps(state, { waps }) {
            state.waps = waps
        },
        addToy(state, { toy }) {
            state.toys.unshift(toy)
        },
        updateToy(state, { toy }) {
            const idx = state.toys.findIndex(currToy => currToy._id === toy._id)
            state.toys.splice(idx, 1, toy)
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(currToy => currToy._id === toyId)
            state.toys.splice(idx, 1)
        },
        setFilter(state, filterBy) {
            state.filterBy = filterBy
        }
    },
    actions: {
        async loadWaps(context) {
            const waps = await WapService.query()
            context.commit({ type: 'setWaps', waps })
            return waps;
        },
        toyById(context, { id }) {
            return toyService.getById(id)
                .then(toy => toy)
        },
        addToy(context, { toy }) {
            return toyService.add(toy)
                .then(toy => {
                    context.commit({ type: 'addToy', toy })
                    return toy
                })
        },
        updateToy(context, { toy }) {
            return toyService.update(toy)
                .then(toy => {
                    context.commit({ type: 'updateToy', toy })
                    return toy
                })
        },
        removeToy(context, { toyId }) {
            return toyService.remove(toyId)
                .then(() => {
                    context.commit({ type: 'removeToy', toyId })
                })
        }
    },
    getters: {
        wapsToShow(state) {
            var waps = state.waps
            if (!state.filterBy) return waps
            if (state.filterBy.stock) {
                waps = waps.filter(toy => toy.inStock === true)
            }
            if (state.filterBy.type !== 'All') {
                waps = waps.filter(toy => toy.type === state.filterBy.type)
            }
            if (state.filterBy.name) {
                var regex = new RegExp(`${state.filterBy.name}`, 'i');
                waps = waps.filter(toy => regex.test(toy.name))
            }
            return waps
        }

    }
}