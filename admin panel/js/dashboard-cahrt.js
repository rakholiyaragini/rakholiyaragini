// area-chart

var options = {
  series: [
  {
    data: [
      {
        x: '2002',
        y: [2800, 4500]
      },
      {
        x: '2003',
        y: [3200, 4100]
      },
      {
        x: '2004',
        y: [2950, 7800]
      },
      {
        x: '2005',
        y: [3000, 4600]
      },
      {
        x: '2006',
        y: [3500, 4100]
      },
      {
        x: '2007',
        y: [4500, 6500]
      },
      {
        x: '2008',
        y: [2000, 3500]
      },
      {
        x: '2009',
        y: [2300, 7500]
      },
      {
        x: '2010',
        y: [3450, 7800]
      },
      {
        x: '2011',
        y: [4000, 4600]
      },
      {
        x: '2012',
        y: [4600, 6500]
      },
      {
        x: '2013',
        y: [4500, 6500]
      },
      {
        x: '2014',
        y: [8600, 7600]
      },
      {
        x: '2015',
        y: [6400, 8600]
      },
      {
        x: '2016',
        y: [5400, 9400]
      },
      {
        x: '2017',
        y: [2200, 6100]
      },
      {
        x: '2018',
        y: [6200, 4100]
      },
      {
        x: '2019',
        y: [2200, 3100]
      },
      {
        x: '2020',
        y: [5400, 9400]
      },
      {
        x: '2021',
        y: [2200, 6100]
      },
      {
        x: '2022',
        y: [1600, 3200]
      },
      {
        x: '2023',
        y: [2200, 4400]
      },
    ]
  }
],
  chart: {
  height: 580,
  type: 'rangeBar',
  zoom: {
    enabled: false
  }
},
plotOptions: {
  bar: {
    isDumbbell: true,
    columnWidth: 3,
    dumbbellColors: [['#23B7E5', '#B289FF']]
  }
},
legend: {
  show: true,
  showForSingleSeries: true,
  position: 'top',
  horizontalAlign: 'left',
  customLegendItems: ['Product A', 'Product B']
},
fill: {
  type: 'gradient',
  gradient: {
    type: 'vertical',
    gradientToColors: ['#B289FF'],
    inverseColors: true,
    stops: [0, 100]
  }
},
grid: {
  xaxis: {
    lines: {
      show: true
    }
  },
  yaxis: {
    lines: {
      show: false
    }
  }
},
xaxis: {
  tickPlacement: 'on'
}
};

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();

// bar-chart

var options = {
  series: [{
  name: 'Website Blog',
  type: 'column',
  data: [12, 6, 8, 14, 13, 5, 6, 17, 8,]
}, {
  name: 'Social Media',
  type: 'line',
  Color: '#23B7E5', 
  data: [23, 42, 35, 27, 43, 22, 17, 31, 22,]
}],
  chart: {
  height: 600,
  type: 'area',
},
stroke: {
  width: [0.2, 3],
},
fill: {
  type: 'gradient',
  gradient: {
    type: 'vertical',
    gradientToColors: ['#845ADF'],
    inverseColors: true,
    stops: [150, 100]
  }
},
dataLabels: {
  enabled: false,
  enabledOnSeries: [5]
},
labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001'],
xaxis: {
  type: 'datetime'
},
yaxis: [{
  title: {
  },

}, {
  opposite: true,
  title: {
  }
}]
};

var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
chart.render();

// bounce-chart

var options = {
  series: [75],
  chart: {
  height: 350,
  type: 'radialBar',
  toolbar: {
    show: false
  }
},
plotOptions: {
  radialBar: {
    startAngle: -135,
    endAngle: 225,
     hollow: {
      margin: 0,
      size: '80%',
      background: '#fff',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 4,
        opacity: 0.24
      }
    },
    track: {
      background: '#fff',
      strokeWidth: '75%',
      margin: 0,
      dropShadow: {
        enabled: true,
        top: -3,
        left: 0,
        blur: 4,
        opacity: 0.35
      }
    },

    dataLabels: {
      show: true,
      name: {
        offsetY: -10,
        show: true,
        color: '#888',
        fontSize: '17px'
      },
      value: {
        formatter: function(val) {
          return parseInt(val);
        },
        color: '#111',
        fontSize: '36px',
        show: true,
      }
    }
  }
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'dark',
    type: 'horizontal',
    shadeIntensity: 0.5,
    gradientToColors: ['#23B7E5'],
    inverseColors: true,
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 100]
  }
},
stroke: {
  lineCap: 'round'
},
labels: ['Impressions'],
};

var chart = new ApexCharts(document.querySelector("#b-chart"), options);
chart.render();






