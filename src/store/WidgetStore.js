'use strict';
// var moment = require('moment');
import WidgetService from '../services/WidgetService.js';
export default {
  state: {
    widgets: [],
    elements: []
  },
  mutations: {

    setElements(state, {elements}){
      state.elements = elements
    },
    
    setWidgets(state, { widgets }) {
      state.widgets = widgets;
    },
    removeWidget(state, { widgetId }) {
      const idx = state.widgets.findIndex(currWidget => currWidget._id === widgetId);
      state.widgets.splice(idx, 1);
    },
    setFilter(state, filterBy) {
      state.filterBy = filterBy;
    }
  },
  actions: {
    loadElements(context){
      return WidgetService.queryElements()
      .then(elements =>{
        context.commit({type: 'setElements', elements});
        return elements
      })
    },
    loadWidgets(context) {
      return WidgetService.query().then(widgets => {
        context.commit({ type: 'setWidgets', widgets });
        return widgets;
      });
    },
    addId(context,{section}){
      return WidgetService.addId(section)
    },
    widgetById(context, { id }) {
      return WidgetService.getById(id).then(widget => widget);
    },
  },
  getters: {
    loadElements(state){
      return state.elements
    },
    widgetsToAdd(state) {
      return state.widgets;
    },
  }
};
