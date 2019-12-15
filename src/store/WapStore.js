'use strict';
import WapService from '../services/WapService.js';
import UtilsService from '../services/UtilsService.js';
import CloudinaryService from '../services/CloudinaryService.js';

export default {
    state: {
        waps: [],
        currWap: null,
        group: '',
        currSectionId: null,
        txtId: '',
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
        setGroup(state, { group }) {
            state.group = group
        },
        setTxtId(state, { id }) {
            state.txtId = id
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
        addSection(state, data) {
            data.element._id = UtilsService.makeId()
            state.currWap.sections.splice(data.newIndex, 0, JSON.parse(JSON.stringify(data.element)))
            // state.currWap.sections[data.newIndex-1]._id = UtilsService.makeId()
            // state.group = state.currWap.sections[data.newIndex-1]._id
        },
        addElement(state, { newElement, sectionId }) {
            newElement._id = UtilsService.makeId()
            const idx = state.currWap.sections.findIndex(section => section._id === sectionId)
            state.currWap.sections[idx].data.push(newElement)
        },
        removeSection(state, { sectionId }) {
            const idx = state.currWap.sections.findIndex(section => section._id === sectionId)
            state.currWap.sections.splice(idx, 1)
        },
        changePos(state, { moveBy, sectionToMove }) {
            const sectionIdx = state.currWap.sections.findIndex(section => section._id === sectionToMove._id)
            const sectionToReplaceIdx = sectionIdx + moveBy

            if (sectionToReplaceIdx > state.currWap.sections.length - 1 || sectionToReplaceIdx < 0) {
                return
            } else {
                const sectionToReplace = state.currWap.sections[sectionToReplaceIdx]
                state.currWap.sections.splice(sectionIdx, 1, sectionToReplace)
                state.currWap.sections.splice(sectionToReplaceIdx, 1, sectionToMove)

            }
        },
        saveSection(state, { section }) {
            const idx = state.currWap.sections.findIndex(currSection => currSection._id === section._id)
            state.currWap.sections.splice(idx, 1, section)
        },
        saveSectionData(state, { newData }) {
            const idx = state.currWap.sections.findIndex(section => section._id === newData._id)
            // const elIdx = state.currWap.sections[idx].data.findIndex(el => el._id === newData._id)
            // state.currWap.sections[idx].data[elIdx] = newData
            state.currWap.sections.splice(idx, 1, newData)

        },
        addWidget(state, { data }) {
            const idx = state.currWap.sections.findIndex(currSection => currSection._id === data.sectionId)
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

            const idx = state.currWap.sections.findIndex(section => section._id === sectionData.id)
            state.currWap.sections[idx].data[sectionData.idx].style.bcgImg = sectionData.imgUrl
        },
        setSection(state, { data }) {
            state.currSectionId = data
        },
        updateStyle(state, { data }) {

            const idx = state.currWap.sections.findIndex(section => section._id === data.sectionId)

            const cardIdx = state.currWap.sections[idx].data.findIndex(card => card._id === data.cardData.dataId)
            if (data.cardData.id) {
                // state.currWap.sections[idx].data[cardIdx]

                // state.currWap.sections[idx].data[cardIdx].data[data.cardData.idx].style = data.cardData.style
            }
            else {
                state.currWap.sections[idx].data[cardIdx].style = data.cardData.style
            }
        }
    },
    actions: {
        async loadWaps(context) {
            const waps = await WapService.query()
            context.commit({ type: 'setWaps', waps })
            return waps;
        },
        async loadWap(context, { id }) {
            const wap = await WapService.getById(id)
            context.commit({ type: 'setWap', wap })
            return wap
        },
        async addWidget(context, { data }) {
            await context.commit({ type: 'addWidget', data })
        },
        async saveWap(context) {
            const wap = context.state.currWap
            const updateWap = await WapService.update(wap)
            context.commit({ type: 'setWap', wap: updateWap })
            context.commit({ type: 'success', msg: 'Wap saved' })
            return updateWap
        },
        async addNewWap(context) {
            const newWap = {
                name: "",
                thumbnail: '',
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
            // context.commit({ type: 'setBcgImg', sectionData: { id: data.sectionId, imgUrl } })
            context.commit({ type: 'success', msg: 'Image upload' })
            return imgUrl
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
        group(state) {
            return state.group
        },
        txtId(state) {
            return state.txtId
        },
        currSection(state) {
            if (state.currWap) return state.currWap.sections
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

};
