$(document).ready(function() {
  //TODO: place your code to construct the graph here
var margin = {top: 30, right: 40, bottom: 50, left: 50},
    width = 850 - margin.left - margin.right,
    height = 425 - margin.top - margin.bottom;

var x =  d3.scale.linear().range([0, width]);
var y0 = d3.scale.linear().range([height, 0]);
var y1 = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis().scale(x)
.orient("bottom").tickFormat(function(d) {
    return (d/1);} ).ticks(5);

var yAxisLeft = d3.svg.axis().scale(y0)
    .orient("left").ticks(5);

var yAxisRight = d3.svg.axis().scale(y1)
    .orient("right").ticks(5);

var valueline = d3.svg.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y0(d.Wins); });

var valueline2 = d3.svg.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y1(d.Opts); });

var valueline4 = d3.svg.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y1(d.Dpts); });

var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

  // Add the text label for the left Y axis
svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left-3)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("fill", "steelblue")
        .text("Wins");

svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 + width+margin.left-25)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("fill", "tomato")
        .text("Rank");

svg.append("text")
        .attr("y", 0 + height + 30)
        .attr("x",0 + width / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Year");

// Get the data
d3.csv("data/bengals_history.csv", function(error, data) {
    data.forEach(function(d) {
        d.Wins = +d.Wins;
        d.year = +d.Year;
        d.Opts = (33- (+d.OffenseRank));
        d.Dpts = (33- (+d.DefenseRank));
        d.playoffs = d.Playoffs;
    });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.year; }));
    y0.domain([0, d3.max(data, function(d) {
		return Math.max(d.Wins); })]);
    y1.domain([0, d3.max(data, function(d) {
		return Math.max(d.Opts); })]);

    svg.append("path")        // Add the valueline path.
        .attr("d", valueline(data));

    svg.append("path")        // Add the valueline2 path.
        .style("stroke", "tomato")
        .attr("d", valueline2(data));

  svg.append("text")        // Add the valueline2 path.

        .attr("x",function(d) { return x(d) - 3; })
        .attr("y", 0 + height + 50)
        .attr("dy", ".35em")
        .text(function(d) { return d; });

  svg.append("path")        // Add the valueline2 path.
        .style("stroke", "tomato")
        .style("stroke-dasharray", ("3, 3"))
        .attr("d", valueline4(data));



    svg.append("g")            // Add the X Axis
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .style("fill", "steelblue")
        .call(yAxisLeft);

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + width + " ,0)")
        .style("fill", "tomato")
        .call(yAxisRight);

});

})


function sumArray(arr) {
 var sum = 0;
 for(var i=0; i<arr.length; i++) {
 sum = sum + parseFloat(arr[(i+1)]);
 }
  return sum;
}
