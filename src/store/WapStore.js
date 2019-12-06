'use strict'
// var moment = require('moment');
import WapService from '../services/WapService.js'
import UtilsService from '../services/UtilsService.js'
import CloudinaryService from '../services/CloudinaryService.js'

export default {
    state: {
        waps: [],
        currWap: null,
        currSection: null,
    },
    mutations: {
        setWaps(state, { waps }) {
            state.waps = waps
        },
        setWap(state, { wap }) {
            state.currWap = wap
        },
        setName(state, { name }) {
            state.currWap.name = name
        },
        updateTxt(state, { data }) {
            const idx = state.currWap.sections.findIndex(section => section._id === data.sectionId)
            const dataIdx = state.currWap.sections[idx].data.findIndex(currData => currData._id === data.txt._id)
            state.currWap.sections[idx].data.splice(dataIdx, 1, data.txt)
        },
        updateWap(state, { wap }) {
            const idx = state.waps.findIndex(curWap => {
                return curWap._id === wap._id
            })
            state.waps.splice(idx, 1, wap)
        },
        removeWap(state, { wapId }) {
            const idx = state.waps.findIndex(currWap => currWap._id === wapId)
            state.waps.splice(idx, 1)
        },
        addSection(state, value) {
            state.currWap.sections
            value.forEach(section => section._id = UtilsService.makeId());
            state.currWap.sections = value
            console.log(state.currWap)
        },
        saveSectionData(state, { newData, sectionId }) {
            console.log(state.currWap.sections)
            // debugger
            const idx = state.currWap.sections.findIndex(section => section._id === sectionId)
            const elIdx = state.currWap.sections[idx].data.findIndex(el => el._id === newData._id)
            state.currWap.sections[idx].data[elIdx] = newData
        },
        addElement(state, value) {
            console.log('element', value)
            value.forEach(element => element._id = UtilsService.makeId());
            const idx = state.currWap.sections.findIndex(section => section._id === state.group)
            state.currWap.sections[idx].data = value

        },
        addWidget(state, { data }) {
            const idx = state.currWap.sections.findIndex(currSection => currSection._id === data.sectionId)
            console.log('store idx', state.currWap.sections[idx]);
            state.currWap.sections[idx].data.push(data.el)
        },
        setFilter(state, filterBy) {
            state.filterBy = filterBy
        },
        setBcgImg(state, { sectionData }) {
            const idx = state.currWap.sections.findIndex(section => section._id === sectionData.id)
            state.currWap.sections[idx].style.bcgImg = sectionData.imgUrl
        },
        setCardImg(state, { sectionData }) {
            console.log('hhjghjgj', sectionData);
            const idx = state.currWap.sections.findIndex(section => section._id === sectionData.id)
            state.currWap.sections[idx].data[sectionData.idx].style.bcgImg = sectionData.imgUrl
        },
        updateStyle(state, { data }) {
            const idx = state.currWap.sections.findIndex(section => section._id === data.sectionId)
            if (data.cardData.id) {
                const cardIdx = state.currWap.sections[idx].data.findIndex(card => card._id === data.cardData.id)
                state.currWap.sections[idx].data[cardIdx]
                state.currWap.sections[idx].data[cardIdx].data[data.cardData.idx].style = data.cardData.style
            }
            else {
                state.currWap.sections[idx].data[data.cardData.idx].style = data.cardData.style
            }
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
        async addSection(context, { section }) {
            context.commit({ type: 'addSection', section })
            await WapService.update(context.state.currWap)
            context.commit({ type: 'success', msg: 'Wap saved' })
        },
        async addWidget(context, { data }) {
            await context.commit({ type: 'addWidget', data })
        },
        async saveWap(context) {
            console.log('wap store', context.state.currWap);
            const wap = context.state.currWap
            const updateWap = await WapService.update(wap)
            context.commit({ type: 'setWap', wap: updateWap })
            context.commit({ type: 'success', msg: 'Wap saved' })
            return updateWap
        },
        async addNewWap(context) {
            const newWap = {
                name: "",
                style: {
                    font: "Arial",
                    txtColor: "black",
                    bcgColor: "white",
                    fontSize: 16,
                    bcgImage: "none"
                },
                sections: []
            }
            const addedWap = await WapService.add(newWap)
            context.commit({ type: 'setWap', wap: addedWap })
            context.commit({ type: 'open1', msg: 'New Website created' })
            // console.log('addedWap',addedWap);
            return addedWap
        },
        async removeWap(context, { wapId }) {
            await WapService.remove(wapId)
            context.commit({ type: 'removeWap', wapId })
            return wapId
        },
        async setBcgImg(context, { data }) {
            context.commit({ type: 'open1', msg: 'loading img' })
            const imgUrl = await CloudinaryService.uploadImg(data.event)
            context.commit({ type: 'setBcgImg', sectionData: { id: data.sectionId, imgUrl } })
            context.commit({ type: 'success', msg: 'Image upload' })
        },
        async setCardImg(context, { data }) {
            context.commit({ type: 'open1', msg: 'loading img' })
            const imgUrl = await CloudinaryService.uploadImg(data.event)
            context.commit({ type: 'setCardImg', sectionData: { id: data.sectionId, idx: data.idx, imgUrl } })
            context.commit({ type: 'success', msg: 'Image upload' })
        }
    },
    getters: {
        currWap(state) {
            return state.currWap
        },
        currWapSections(state) {
            if (state.currWap) return state.currWap.sections
        },
        currSectionData(state) {
            if (state.currWap.sections) {
                const section = state.currWap.sections.find(section => section._id === state.group)
                console.log(section);

                return section.data
            }
        },
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
        }

    }
}