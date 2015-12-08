var csvData;
var chart;
var chart2;
                  d3.csv("data/bengals_history.csv", function(error, data) {
                    data.forEach(function(d) {
                      d.BengalsWins = +d.Bengals_Wins;
                      d.year = +d.Year;
                      d.Opts = (33- (+d.OffenseRank));
                      d.Dpts = (33- (+d.DefenseRank));
                      d.playoffs = d.Playoffs;
                      d.coach = d.Coaches
                  });
              csvData = data
                exportData(csvData[1].Coaches);
                    generateGraphs();
                });
            function exportData (data) {
              console.log (data);
              }
function generateGraphs() {
var chart = c3.generate({
  bindto: '#chart',
    data: {
      url: 'data/bengals_history.csv',
      x: 'Year',
      type: 'spline',
      colors: { 'Bengals_Wins': '#ff9900'
            },
      hide: ['Year','Lg','Tm','L','T','Playoffs','PF','PA','PD','Coaches','AV','Passer','Rusher','Receiver','OffenseRank','Yds','DefenseRank','Yds','T/G','Pts±','Yds±','out of','MoV','SoS','SRS','OSRS','DSRS'],
    },
  tooltip: {
        grouped: false // Default true
    },
  transition: {
        duration: 760
      },
  legend:{
    hide: ['Year','Lg','Tm','L','T','Playoffs','PF','PA','PD','Coaches','AV','Passer','Rusher','Receiver','OffenseRank','Yds','DefenseRank','Yds','T/G','Pts±','Yds±','out of','MoV','SoS','SRS','OSRS','DSRS'],
  }
});

var chart2 = c3.generate({
  bindto: '#chart2',
    data: {
      url: 'data/bengals.csv',
      x: 'Year',
      type: 'line',
      hide: ['Lg','Tm','L','T','PF','PA','Playoffs','PD','Coaches','AV','Passer','Rusher','Receiver','Yds','Yds','T/G','Pts±','Yds±','out of','SoS','SRS','OSRS','DSRS', 'MoV'],
      axes: {
        Wins: 'y',
        DefenseRank: 'y2',
        OffenseRank: 'y2'// ADD
      }
    },
    axis: {
      x: {
        label: 'Year'
      },
      y: {
        label: 'Wins'
      },
      y2: {
        show: true,
        inverted: true,
        label: 'Rank'// ADD
      }
    },
    tooltip: {
      contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
          var $$ = this, config = $$.config,
              titleFormat = config.tooltip_format_title || defaultTitleFormat,
              nameFormat = config.tooltip_format_name || function (name) { return name; },
              valueFormat = config.tooltip_format_value || defaultValueFormat,
              text, i, title, value, name, bgcolor, coach;
          for (i = 0; i < d.length; i++) {
              if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

              if (! text) {

                  title = titleFormat ? titleFormat(d[i].x) : d[i].x;
                  text = "<table class='" + $$.CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
                text += "<td class='name'>" + csvData[i].Coaches + "</td>";
                text += "<td class='name'>" + csvData[i].Playoffs + "</td>";
              }

              name = nameFormat(d[i].name);
              value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
              bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

              text += "<tr class='" + $$.CLASS.tooltipName + "-" + d[i].id + "'>";
              text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
              text += "<td class='value'>" + value + "</td>";
              text += "</tr>";
          }
          return text + "</table>";
      }
  },
        zoom: {
      enabled: true
    },
  transition: {
        duration: 500
      },
  legend:{
    hide: ['Lg','Tm','L','Playoffs','T','PF','PA','PD','Coaches','AV','Passer','Rusher','Receiver','Yds','Yds','T/G','Pts±','Yds±','out of','SoS','SRS','OSRS','DSRS', 'MoV']
  }
});

/*
function mouseTip() {
//Mouseover tip
var tip = d3.tip()
	.attr('class', 'd3-tip')
	.offset([120, 40])
	.html(function(d) {
	    return "<strong>" + d.Year +
                " </strong><br>" +
		d.Wins + " Wins" + "<br>" +
		d.OffenseRank + "<br>" +
		d.DefenseRank + "<br> " + d.playoffs +
             "<br>";
	});
    svg.call(tip);

svg.selectAll(".dot")
	  .data(csvdata)
	  .enter().append("circle")
	  .attr('class', 'datapoint')
	  .attr('cx', function(d) { return x(d.year); })
	  .attr('cy', function(d) { return y(d.Bengals_Wins); })
	  .attr('r', 6)
	  .attr('fill', 'white')
	  .attr('stroke', 'steelblue')
	  .attr('stroke-width', '3')
	  .on('mouseover', tip.show)
	  .on('mouseout', tip.hide);
}
*/

function teamAdd(team, color, dataName) {
    chart.load({
        url: team ,
        colors: ({dataName: d3.rgb(color)})
               });
    }
function teamRemove(team) {
    chart.unload({
        url: team
       });
}
function clearChart1() {
 chart.unload();
}

function teamLoad(team) {
    chart2.load({
        url: team,
       });
}

function teamUnload(team) {
    chart2.unload({
        url: team,
       });
}
function clearChart2() {
  chart2.unload();
}
}
