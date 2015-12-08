  var csvData;
var myData;
var chart;
                  d3.csv("data/bengals_history.csv", function(error, data) {
                    data.forEach(function(d) {
                      d.BengalsWins = +d.Bengals_Wins;
                      d.year = +d.Year;
                      d.Opts = (33- (+d.OffenseRank));
                      d.Dpts = (33- (+d.DefenseRank));
                  });
              csvData = data;
                console.log(csvData)
function nvData () {
  var wins = [], OffRank = [];

  //Data is represented as an array of {x,y} pairs.
  for (var i = 0; i < csvData.length; i++) {
    wins.push({x: csvData[i].year, y: csvData[i].BengalsWins});
    OffRank.push({x: csvData[i].year, y: csvData[i].Opts});
  }
console.log(wins);
  console.log(OffRank);
  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: wins,      //values - represents the array of {x,y} data points
      key: 'Bengals Wins', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },
    {
      values: OffRank,
      key: 'Offense Ranking',
      color: '#2ca02c'
    },
  ];
}
  nv.addGraph(function() {
  chart = nv.models.lineChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                .useInteractiveGuideline(false)  //We want nice looking tooltips and a guideline!
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
  ;

  chart.xAxis     //Chart x-axis settings
      .axisLabel('Year')

  chart.yAxis     //Chart y-axis settings
      .axisLabel('Wins')

  // Done setting the chart up? Time to render it!
 myData = nvData();
   console.log(myData);//You need data...

  d3.select('svg')    //Select the <svg> element you want to render the chart in.
      .datum(myData)         //Populate the <svg> element with chart data...
      .transition().duration(500)
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
})

    function loadData() {
d3.csv("data/bearsHistory.csv", function(error, data) {
                    data.forEach(function(d) {
                      d.BearsWins = +d.Bears_Wins;
                      d.year = +d.Year;
                      });
              console.log(data);
  var wins = []

  //Data is represented as an array of {x,y} pairs.
  for (var i = 0; i < data.length; i++) {
    wins.push({x: data[i].year, y: data[i].BearsWins});
  }
console.log(wins);
  //Line chart data should be sent as an array of series objects.
  myData.push(
    {
      values: wins,      //values - represents the array of {x,y} data points
      key: 'Bears Wins', //key  - the name of the series.
      color: '#000999'  //color - optional: choose your own line color.
    }
    )
  console.log(myData);
  chart.update()
})
                  }

