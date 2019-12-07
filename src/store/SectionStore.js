'use strict'
// var moment = require('moment');
// import WapService from '../services/WapService.js'
// import UtilsService from '../services/UtilsService.js'
// import CloudinaryService from '../services/CloudinaryService.js'

export default {
    state: {
        currSectionId: null,
    },
    mutations: {
        // updateTxt(state, { data }) {
        //     const idx = state.currWap.sections.findIndex(section => section._id === data.sectionId)
        //     const dataIdx = state.currWap.sections[idx].data.findIndex(currData => currData._id === data.txt._id)
        //     state.currWap.sections[idx].data.splice(dataIdx, 1, data.txt)
        // },
     
        // saveSection(state, { section }) {
        //     const idx = state.currWap.sections.findIndex(currSection => currSection._id === section._id)
        //     state.currWap.sections.splice(idx, 1, section)
        // },
        // saveSectionData(state, { newData, sectionId }) {
        //     const idx = state.currWap.sections.findIndex(section => section._id === sectionId)
        //     const elIdx = state.currWap.sections[idx].findIndex(el => el._id === newData._id)
        //     state.currWap.sections[idx].data[elIdx] = newData
        // },
        // addElement(state, value) {
        //     console.log('element', value)
        //     value.forEach(element => element._id = UtilsService.makeId());
        //     const idx = state.currWap.sections.findIndex(section => section._id === state.group)
        //     state.currWap.sections[idx].data = value
        // },
        // addWidget(state, { data }) {
        //     const idx = state.currWap.sections.findIndex(currSection => currSection._id === data.sectionId)
        //     console.log('store idx', state.currWap.sections[idx]);
        //     state.currWap.sections[idx].data.push(data.el)
        // },
        // setFilter(state, filterBy) {
        //     state.filterBy = filterBy
        // },
        // setBcgImg(state, { sectionData }) {
        //     const idx = state.currWap.sections.findIndex(section => section._id === sectionData.id)
        //     state.currWap.sections[idx].style.bcgImg = sectionData.imgUrl
        // },
        // setCardImg(state, { sectionData }) {
        //     console.log('hhjghjgj', sectionData);
        //     const idx = state.currWap.sections.findIndex(section => section._id === sectionData.id)
        //     state.currWap.sections[idx].data[sectionData.idx].style.bcgImg = sectionData.imgUrl
        // },
       
        
    },
    actions: {
        // async loadWaps(context) {
        //     const waps = await WapService.query()
        //     context.commit({ type: 'setWaps', waps })
        //     return waps;
        // },
        // async wapById(context, { id }) {
        //     const wap = await WapService.getById(id)
        //     context.commit({ type: 'setWap', wap })
        //     return wap
        // },
        // async saveWap(context) {
        //     console.log('wap store', context.state.currWap);
        //     const wap = context.state.currWap
        //     const updateWap = await WapService.update(wap)
        //     context.commit({ type: 'setWap', wap: updateWap })
        //     context.commit({ type: 'success', msg: 'Wap saved' })
        //     return updateWap
        // },
        // async addNewWap(context) {
        //     const newWap = {
        //         name: "",
        //         style: {
        //             font: "Arial",
        //             txtColor: "black",
        //             bcgColor: "white",
        //             fontSize: 16,
        //             bcgImage: "none"
        //         },
        //         sections: []
        //     }
        //     const addedWap = await WapService.add(newWap)
        //     context.commit({ type: 'setWap', wap: addedWap })
        //     context.commit({ type: 'open1', msg: 'New Website created' })
        //     // console.log('addedWap',addedWap);
        //     return addedWap
        // },
        // async removeWap(context, { wapId }) {
        //     await WapService.remove(wapId)
        //     context.commit({ type: 'removeWap', wapId })
        //     return wapId
        // },
        // async setBcgImg(context, { data }) {
        //     context.commit({ type: 'open1', msg: 'loading img' })
        //     const imgUrl = await CloudinaryService.uploadImg(data.event)
        //     context.commit({ type: 'setBcgImg', sectionData: { id: data.sectionId, imgUrl } })
        //     context.commit({ type: 'success', msg: 'Image upload' })
        // },
        // async setCardImg(context, { data }) {
        //     context.commit({ type: 'open1', msg: 'loading img' })
        //     const imgUrl = await CloudinaryService.uploadImg(data.event)
        //     context.commit({ type: 'setCardImg', sectionData: { id: data.sectionId, idx: data.idx, imgUrl } })
        //     context.commit({ type: 'success', msg: 'Image upload' })
        // }
    },
    getters: {

    }
}