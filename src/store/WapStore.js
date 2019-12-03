'use strict'
// var moment = require('moment');
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
            console.log('wap store 18',wap._id)
            const idx = state.waps.findIndex(curWap =>{
                console.log(curWap);
                
                return curWap._id === wap._id})
            state.waps.splice(idx, 1, wap)
        },
        removeWap(state, { wapId }) {
            const idx = state.waps.findIndex(currWap => currWap._id === wapId)
            state.waps.splice(idx, 1)
        },
        addWidget(state, { wap }) {
            state.currWap = wap;
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
            // context.commit({ type: 'setWap', wap })
            return wap
        },
        async addWap({commit}, { wap }) {
            const addedWap = await WapService.add(wap)
            // commit({ type: 'addWap',wap: addedWap })
            commit({ type: 'open1',msg:'New wap added'})
            console.log('addedWap',addedWap);
            
            return addedWap
        },
        async updateWap(context, { wap }) {
            console.log('wap store',wap);
            const updateWap = await WapService.update(wap)
            // context.commit({ type: 'updateWap',wap: updateWap })
            context.commit({ type: 'open2',msg:'Wap saved'})
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