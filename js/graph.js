
//JS File for datasetreport.html
//Initialize and customizing the charts
//To find chart: ctrl+f: chart # or chart title

/***********************************************
****************** chart 1 **********************
************ Total Sales by Quarter ***********/

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data:{
      animationSteps: 50000,
      labels:["Q1","Q2","Q3","Q4"],
          datasets: [{
              label: "2013",
              backgroundColor: "#E8620C",
              data: totalSalesArray2013
          }, {
              label: "2014",
              backgroundColor: "#DFE10D",
              data: totalSalesArray2014
          }],
    },
    options: {
        legend: {
             display: true,
             labels: {
                 fontColor: '#2E2E2E',
                 fontFamily: "Open Sans",
                 fontSize: 16,
                 boxWidth: 12,
                 borderWidth: 0
             }
          },
          tooltips: {
              callbacks: {
                  label: function(tooltipItems, data) {
                      return data.datasets[tooltipItems.datasetIndex].label +': ' + '$' +tooltipItems.yLabel;
                  }
              }
          },
          scales: {
              xAxes: [{
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    fontFamily: "Open Sans",
                    fontSize: 12
                  },
                  scaleLabel: {
                    display: true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                    labelString: 'Quarter'
                  }
              }],
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      fontFamily: "Open Sans",
                      fontSize: 12
                  },
                  scaleLabel: {
                    display: true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                    labelString: 'Sales'
                  }
              }]
          }
      }
});

/***********************************************
****************** chart 2 **********************
********** Total Sales by Manager **************/

  var ctx2 = document.getElementById("myChart2");
  var myChart = new Chart(ctx2, {
    type: 'horizontalBar',
    data:{
      labels:["John","Leonardo","Paul","George","Michelangelo","Ringo","Raphael","Donatello"],
          datasets: [{
              label: "2013",
              backgroundColor: "#E8620C",
              data: totalManagerArray2013
          }, {
              label: "2014",
              backgroundColor: "#40B9A4",
              data: totalManagerArray2014
          }],
    },
    options: {
        legend: {
           display: true,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 16,
               boxWidth: 12,
               padding:10,
               borderWidth: 1
           }
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + '$' +tooltipItems.xLabel;
                }
            }
        },
        title: {
          display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  fontFamily: "Open Sans",
                  fontSize: 12
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Sales'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontFamily: "Open Sans",
                    fontSize: 12
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Regional Manager'
                }
            }]
        }
    }
});


  /***********************************************
  ****************** chart 3 **********************
  ************ Total Sales by Region **************/
  var ctx3 = document.getElementById("myChart3");
  var myChart = new Chart(ctx3, {
    type: 'bar',
    data:{
      labels:["South East","South West","North East","North West"],
          datasets: [{
              label: "2013",
              backgroundColor: "#40B9A4",
              data: totalRegionArray2013
          }, {
              label: "2014",
              backgroundColor: "#DFE10D",
              data: totalRegionArray2014
          }],
    },
    options: {
        legend: {
           display: true,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 16,
               boxWidth: 12
           }
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + '$' +tooltipItems.yLabel;
                }
            }
        },
        title: {
          display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  fontFamily: "Open Sans",
                  fontSize: 12
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Region'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                    max: 100000
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Sales'
                }
            }]
        }
    }
});


  /***********************************************
  ****************** chart 4 **********************
  **********2014 Detailed Quarter Sales ***********/
  var ctx4 = document.getElementById("myChart4");
  var myChart = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ["Q1","Q2","Q3","Q4"],
        datasets: [{
              label: "South East",
              data: [18378, 22284, 24473, 16206],
              backgroundColor: "#40B9A4",
              borderColor:"#40B9A4",
              fill: false,
              lineTension: 0
          }, {
              label: "South West",
              data: [11436, 18152, 17919, 12747],
              backgroundColor: "#E8620C",
              borderColor:"#E8620C",
              fill: false,
              lineTension: 0
          }, {
              label: "North East",
              data: [21630, 19603, 23947, 22444],
              backgroundColor: "#DFE10D",
              borderColor:"#DFE10D",
              fill: false,
              lineTension: 0
          }, {
              label: "North West",
              data: [15282, 16454, 19653, 10284],
              backgroundColor: "#B6C2C9",
              borderColor:"#B6C2C9",
              fill: false,
              lineTension: 0
        }],
    },
    options: {
        legend: {
           display: true,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 16,
               boxWidth: 15,
               padding: 10
           }
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + '$' +tooltipItems.yLabel;
                }
            }
        },
        title: {
          display: false,
          text: '2014 Sales Detailed',
          fontFamily: "Open Sans",
          fontSize: 15
        },
        scales: {
            xAxes: [{
                gridLines: {
                  display: true
                },
                ticks: {
                  fontFamily: "Open Sans",
                  fontSize: 12
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Quarter'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                    max: 30000
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Sales'
                }
            }]
        }
    }
});


  /***********************************************
  ****************** chart 5 **********************
  *********** 2013 Detailed Quarter Sales *********/
  var ctx5 = document.getElementById("myChart5");
  var myChart = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: ["Q1","Q2","Q3","Q4"],
        datasets: [{
              label: "South East",
              data: [14013, 18600, 23353, 20756],
              backgroundColor: "#40B9A4",
              borderColor:"#40B9A4",
              fill: false,
              lineTension: 0
          }, {
              label: "South West",
              data: [23409, 13113, 17097, 21796],
              backgroundColor: "#E8620C",
              borderColor:"#E8620C",
              fill: false,
              lineTension: 0
          }, {
              label: "North East",
              data: [24149, 13119, 23284, 12697],
              backgroundColor: "#DFE10D",
              borderColor:"#DFE10D",
              fill: false,
              lineTension: 0
          }, {
              label: "North West",
              data: [22486, 18383, 19190, 21011],
              backgroundColor: "#B6C2C9",
              borderColor:"#B6C2C9",
              fill: false,
              lineTension: 0
        }],
    },
    options: {
        legend: {
           display: true,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 16,
               boxWidth: 15,
           }
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + '$' +tooltipItems.yLabel;
                }
            }
        },
        title: {
          display: false,
          text: '2013 Detailed Sales',
          fontFamily: "Open Sans",
          fontSize: 15
        },
        scales: {
            xAxes: [{
                gridLines: {
                  display: true
                },
                ticks: {
                  fontFamily: "Open Sans",
                  fontSize: 12
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Quarter'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                    max: 30000
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Sales'
                }
            }]
        }
    }
});

  /***********************************************
  ****************** chart 6 **********************
  *********** Manager Detailed Sales *************/
  var ctx6 = document.getElementById("myChart6");
  var myChart6 = new Chart(ctx6, {
      type: 'line',
      data: {
          labels:["Q1","Q2","Q3","Q4"],
          datasets: [{
                label: "John",
                data: [14013, 18600, null, null],
                backgroundColor: "#FF5B57",
                borderColor:"#FF5B57",
                fill: false,
                pointRadius: 5,
                lineTension: 0
            }, {
                label: "Leonardo",
                data: [null, null, 23353, 20756],
                backgroundColor: "#E8620C",
                borderColor:"#E8620C",
                fill: false,
                pointRadius: 5,
                lineTension: 0
            }, {
                label: "Paul",
                data: [24149, 13119, 23284, 12697],
                backgroundColor: "#DFE10D",
                borderColor:"#DFE10D",
                fill: false,
                pointRadius: 5,
                lineTension: 0
            }, {
                label: "George",
                data: [23409, 13113, 17097, null],
                backgroundColor: "#40B9A4",
                borderColor:"#40B9A4",
                fill: false,
                pointRadius: 7,
                lineTension: 0
          }, {
                label: "Michelangelo",
                data: [null, null, null, 21796],
                backgroundColor: "#5CA5E7",
                borderColor:"#5CA5E7",
                fill: false,
                pointRadius: 5,
                lineTension: 0
         }, {
                label: "Ringo",
                data: [22486, null, null, null],
                backgroundColor: "#8E96C4",
                borderColor:"#8E96C4",
                fill: false,
                pointRadius: 5,
                lineTension: 0
         }, {
                label: "Raphael",
                data: [null, 18383, 19190, 21011],
                backgroundColor: "#B6C2C9",
                borderColor:"#B6C2C9",
                fill: false,
                pointRadius: 5,
                lineTension: 0
        }, {
                label: "Donatello",
                data: [null, null, null, null],
                backgroundColor: "#2E2E2E",
                borderColor:"#2E2E2E",
                fill: false,
                pointRadius: 5,
                lineTension: 0
       }],
      },
      options: {
        legend: {
           display: true,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 16,
               boxWidth: 12,
           }
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + '$' +tooltipItems.yLabel;
                }
            }
        },
          scales: {
              xAxes: [{
                  gridLines: {
                    display: true
                  },
                  ticks: {
                    fontFamily: "Open Sans",
                    fontSize: 12
                  },
                  scaleLabel: {
                    display: true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                    labelString: 'Quarter'
                  }
              }],
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      fontFamily: "Open Sans",
                      fontSize: 12,
                      max: 30000
                  },
                  scaleLabel: {
                    display: true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                    labelString: 'Sales'
                  }
              }]
          }
      }
  });
