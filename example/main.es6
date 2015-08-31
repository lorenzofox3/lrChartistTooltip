let labels = [1,2,3];
let series = [
  [
    {meta: 'description', value: 1 },
    {meta: 'meta data', value: 5},
    {meta: 'woot woot', value: 3}
  ],
  [
    {meta: 'foo', value: 2},
    {meta: 'bar', value: 4},
    {meta: 'some other', value: 2}
  ]
];
let plugins = [
  Chartist.plugins.lrTooltip({
    template:'<h3 class="small">{{meta}}</h3><p class="small"><i class="glyphicon glyphicon-tag"></i> $ {{y}}</p>',
    labelOffset:{
      x : 15
    }
  })
];

var chart = new Chartist.Bar('#myChart', {labels, series}, {plugins, stackBars:true});
var chartLine = new Chartist.Line('#myChartLine', {labels, series}, {plugins});