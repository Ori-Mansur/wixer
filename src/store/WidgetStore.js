'use strict';
var moment = require('moment');
import WidgetService from '../services/WidgetService.js';
export default {
  state: {
    widgets: WidgetService.query()
  },
  mutations: {
    
    setWidgets(state, { widgets }) {
      state.widgets = widgets;
    },
    addWidget(state, { widget }) {
      state.widgets.unshift(widget);
    },
    updateWidget(state, { widget }) {
      const idx = state.widgets.findIndex(currWidget => currWidget._id === widget._id);
      state.widgets.splice(idx, 1, widget);
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
    loadWidgets(context) {
      return WidgetService.query().then(widgets => {
        context.commit({ type: 'setWidgets', widgets });
        return widgets;
      });
    },
    widgetById(context, { id }) {
      return WidgetService.getById(id).then(widget => widget);
    },
    addWidget(context, { widget }) {
      return WidgetService.add(widget).then(widget => {
        context.commit({ type: 'addWidget', widget });
        return widget;
      });
    },
    updateWidget(context, { widget }) {
      return WidgetService.update(widget).then(widget => {
        context.commit({ type: 'updateWidget', widget });
        return widget;
      });
    },
    removeWidget(context, { widgetId }) {
      return WidgetService.remove(widgetId).then(() => {
        context.commit({ type: 'removeWidget', widgetId });
      });
    }
  },
  getters: {
    widgets(state) {
      return state.widgets;
    },
    widgetPerYear(state) {
      var widgetYearMap = {};
      state.widgets.forEach(widget => {
        var year = moment(widget.createdAt).format('YYYY');
        var count = widgetYearMap[year];
        widgetYearMap[year] = count ? count + 1 : 1;
      });
      return widgetYearMap;
    },
    widgetsType(state) {
      var types = state.widgets.map(widget => widget.type);
      types.unshift('All');
      return types;
    },
    widgetsTypeAvgPrice(state) {
      var typeAvg = {};
      state.widgets.forEach(widget => {
        const price = typeAvg[widget.type];
        typeAvg[widget.type] = price ? price + +widget.price : +widget.price;
      });
      return typeAvg;
    }
  }
};
