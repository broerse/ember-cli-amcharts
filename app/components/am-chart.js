import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    var chart = AmCharts.makeChart("chartdiv", {
      "type": "serial",
      "theme": "none",
      "dataProvider": [{
          "country": "USA",
          "visits": 2025
      }, {
          "country": "China",
          "visits": 1882
      }, {
          "country": "Japan",
          "visits": 1809
      }],
      "valueAxes": [{
          "gridColor":"#FFFFFF",
      "gridAlpha": 0.2,
      "dashLength": 0
      }],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [{
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "visits"    
      }],
      "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
      },
      "categoryField": "country",
      "categoryAxis": {
          "gridPosition": "start",
          "gridAlpha": 0,
           "tickPosition":"start",
           "tickLength":20
      }
    });

    console.log(chart);
  }
});
