(function (Chartist, doc) {
  'use strict';
  var regex = /{{([0-9a-z]+)}}/g;
  var defaultOptions = {
    tooltipClass: 'ct-tooltip',
    template: '{{y}}',
    labelOffset: {
      x: 0,
      y: -30
    }
  };

  Chartist.plugins = Chartist.plugins || {};
  Chartist.plugins.lrTooltip = function lrChartistTooltipFactory (options) {

    options = Chartist.extend({}, defaultOptions, options);

    return function lrChartistTooltip (chart) {

      var tooltip = doc.createElement('div');
      var type;
      var x = 'x', y = 'y';
      tooltip.style.position = 'absolute';
      tooltip.style.display = 'none';
      chart.container.style.position = 'relative';
      chart.container.appendChild(tooltip);

      if (chart instanceof Chartist.Bar) {
        type = 'bar';
        x = 'x1';
        y = 'y2';
      } else if (chart instanceof Chartist.Line) {
        type = 'point';
      } else {
        console.warn('lrTooltip does not support this chart type');
      }


      if (type) {
        chart.on('draw', function (data) {
          if (data.type === type && data.value) {
            var mouseenterListener = function () {
              var className = [options.tooltipClass, Chartist.alphaNumerate(data.seriesIndex)].join('-');
              var valObject = Chartist.extend({meta: data.meta}, data.value);
              var matches = options.template.match(regex);
              var html = options.template;
              matches.forEach(function (m) {
                html = html.replace(m, valObject[m.substr(2, m.length - 4)], 'g');
              });
              tooltip.className = className;
              tooltip.style.left = data[x] + options.labelOffset.x + 'px';
              tooltip.style.top = data[y] + options.labelOffset.y + 'px';
              tooltip.style.display = 'inline-block';
              tooltip.innerHTML = html;
            };
            var mousleaveListener = function () {
              tooltip.style.display = 'none'
            };
            data.element._node.addEventListener('mouseenter', mouseenterListener);
            data.element._node.addEventListener('mouseleave', mousleaveListener);
          }
        });
      }
    }
  };
})(Chartist, document);