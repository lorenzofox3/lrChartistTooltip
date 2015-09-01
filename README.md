# lr-chartist-tooltip

tooltip plugin for [chartist](http://gionkunz.github.io/chartist-js/) chart library
* support templates
* no dependency (other than Chartist itself)
* 70 lines of code

## install 

``npm install lr-chartist-tooltip-plugin``
``bower install lr-chartist-tooltip-plugin``

## usage

```Javascript
var chart = new Chartist.Line('.ct-chart', {
  labels: [1, 2, 3],
  series: [
    [
      {meta: 'description', value: 1 },
      {meta: 'description', value: 5},
      {meta: 'description', value: 3}
    ],
    [
      {meta: 'other description', value: 2},
      {meta: 'other description', value: 4},
      {meta: 'other description', value: 2}
    ]
  ]
}, {
  plugins: [
    Chartist.plugins.lrTooltip({template:'<p>{{meta}}:{{y}}</p>'})
  ]
});
```

### template variables (to put between {{ }} )

1. **y** the y value
2. **x** the x value
3. **meta** some meta data string

### options

1. **tooltipClass** : the class name added to the tooltip element (default ct-tooltip)
2. **template** : the template string to be interpolated (default {{y}})
3. **labelOffset**: x and y value to position the tooltip  



