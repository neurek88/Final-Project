$(document).ready(function() {
nv.addGraph(function() {
  var chart = nv.models.lineChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                .transitionDuration(350)  //how fast do you want the lines to transition?
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
  ;

  chart.xAxis     //Chart x-axis settings
      .axisLabel('Time (ms)')

  chart.yAxis     //Chart y-axis settings
      .axisLabel('Voltage (v)')

  /* Done setting the chart up? Time to render it!*/
  d3.csv("data/bengals_history.csv", function(error, data) {
    data.forEach(function(d) {
        d.Wins = +d.Wins;
        d.year = +d.Year;
        d.Opts = (33- (+d.OffenseRank));
        d.Dpts = (33- (+d.DefenseRank));
        d.playoffs = d.Playoffs;
    });
  }
         )
   //You need data...

  d3.select('#graph')    //Select the <svg> element you want to render the chart in.
      .datum(Wins)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
})

