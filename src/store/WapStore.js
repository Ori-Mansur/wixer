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
        addWap(state, { wap }) {
            state.waps.unshift(wap)
        },
        updateWap(state, { wap }) {
            const idx = state.waps.findIndex(currWap => currWap._id === wap._id)
            state.waps.splice(idx, 1, wap)
        },
        removeWap(state, { wapId }) {
            const idx = state.waps.findIndex(currWap => currWap._id === wapId)
            state.waps.splice(idx, 1)
        },
        addWidget(state, { config }) {
            state.currWap.widgets.push(config.type);
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
        async wapById(context, { id }) {
            const wap = await WapService.getById(id)
            context.commit({ type: 'setWap', wap })
            return wap
        },
        async addWap(context, { wap }) {
            const addedWap = await WapService.add(wap)
            context.commit({ type: 'addWap', addedWap })
            return addedWap
        },
        async updateWap(context, { wap }) {
            const updateWap = await WapService.update(wap)
            context.commit({ type: 'updateWap', updateWap })
            return updateWap
        },
        async removeWap(context, { wapId }) {
            await WapService.remove(wapId)
            context.commit({ type: 'removeWap', wapId })
            return wapId
        }
    },
    getters: {
        wapsToShow(state) {
            var waps = state.waps
            if (!state.filterBy) return waps
            if (state.filterBy.stock) {
                waps = waps.filter(wap => wap.inStock === true)
            }
            if (state.filterBy.type !== 'All') {
                waps = waps.filter(wap => wap.type === state.filterBy.type)
            }
            if (state.filterBy.name) {
                var regex = new RegExp(`${state.filterBy.name}`, 'i');
                waps = waps.filter(wap => regex.test(wap.name))
            }
            return waps
        },
        currWap(state) {
            return state.currWap
        }

    }
}