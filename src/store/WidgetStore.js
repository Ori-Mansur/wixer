'use strict'
var moment = require('moment');
import toyService from '../services/EditService.js'
export default {
    state: {
        widgets: ['NavBar'],
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
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
        loadToys(context) {
            return toyService.query()
                .then(toys => {
                    context.commit({ type: 'setToys', toys })
                    return toys;
                })
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
        widgets(state) {
            return state.widgets
        },
        toyPerYear(state) {
            var toyYearMap = {}
            state.toys.forEach(toy => {
                var year = moment(toy.createdAt).format('YYYY')
                var count = toyYearMap[year]
                toyYearMap[year] = (count) ? count + 1 : 1
            });
            return toyYearMap
        },
        toysType(state) {
            var types = state.toys.map(toy => toy.type);
            types.unshift("All");
            return types
        },
        toysTypeAvgPrice(state) {
            var typeAvg = {}
            state.toys.forEach(toy => {
                const price = typeAvg[toy.type]
                typeAvg[toy.type] = (price) ? price + +toy.price : +toy.price
            });
            return typeAvg
        },

    }
}