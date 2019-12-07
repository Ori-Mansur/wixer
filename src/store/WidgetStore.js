'use strict';
// var moment = require('moment');
import WidgetService from '../services/WidgetService.js';
import UtilsService from '../services/UtilsService.js'
export default {
  state: {
    sections: [],
    elements: [],
    
  },
  mutations: {
    setElements(state, { elements }) {
      state.elements = elements
    },
    setWidgets(state, { sections }) {
      sections.forEach(section=>section._id=UtilsService.makeId())
      state.sections = sections;
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
    loadElements(context) {
      return WidgetService.queryElements()
        .then(elements => {
          context.commit({ type: 'setElements', elements });
          return elements
        })
    },
    loadWidgets(context) {
      return WidgetService.query().then(sections => {
        
        context.commit({ type: 'setWidgets', sections });
        return sections;
      });
    },
    widgetById(context, { id }) {
      return WidgetService.getById(id).then(widget => widget);
    },
    addId(context, { section }) {
      return WidgetService.addId(section)
    }
  },
  getters: {
    loadElements(state) {
      return state.elements
    },
    loadSections(state) {
      return state.sections
    },
  
   
  }
};
