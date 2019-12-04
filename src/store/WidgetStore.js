'use strict';
var moment = require('moment');
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
        // console.log(widgets);
        
        context.commit({ type: 'setWidgets', widgets });
        return widgets;
      });
    },
    addId(context,{widget}){
      console.log('widget to add id', widget)
      return WidgetService.addId(widget)
      
    },
    widgetById(context, { id }) {
      return WidgetService.getById(id).then(widget => widget);
    },
  },
  getters: {
    loadElements(state){
      return state.elements
    },
    widgets(state) {
      return state.widgets;
    },
  }
};
