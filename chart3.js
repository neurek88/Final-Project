
var chart = c3.generate({
  bindto: '#chart',
    data: {
      url: 'data/bengals_history.csv',
      x: 'Year',
      colors: '#ff9900',
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
      hide: ['Lg','Tm','L','T','PF','PA','PD','Coaches','AV','Passer','Rusher','Receiver','Yds','Yds','T/G','Pts±','Yds±','out of','SoS','SRS','OSRS','DSRS', 'MoV'],
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
      format: {
            title: function (d) {
                var format = d3.time.format('%d/%m/%Y');
                return format(d)
            }
        },
      contents: function (data, defaultTitleFormat, defaultValueFormat, color) {
        var $$ = this, config = $$.config,
            titleFormat = config.tooltip_format_title || defaultTitleFormat,
            nameFormat = config.tooltip_format_name || function (name) { return name; },
            valueFormat = config.tooltip_format_value || defaultValueFormat,
            text, i, title, value;

            for (i = 0; i < data.length; i++) {
                if (! (data[i] && (data[i].value || data[i].value === 0))) { continue; }

                if (! text) {
                  title = titleFormat ? titleFormat(data[i].x) : data[i].x;
                  text = "<div id='tooltip' class='d3-tip'>";
                }
                value = valueFormat(data[i].value, data[i].ratio, data[i].id, data[i].index);

                text += "<span class='info'>Text Title</span><br>";
                text += "<span class='info'>"+ title +"</span><br>";
                text += "<span class='value'>" + value + " g/km</span>";
                text += "</div>";
            }

        return text;
    }
},
        zoom: {
      enabled: true
    },
  transition: {
        duration: 500
      },
  legend:{
    hide: ['Lg','Tm','L','T','PF','PA','PD','Coaches','AV','Passer','Rusher','Receiver','Yds','Yds','T/G','Pts±','Yds±','out of','SoS','SRS','OSRS','DSRS', 'MoV']
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
	  .attr('cx', function(d) { return x(d.pDate); })
	  .attr('cy', function(d) { return y(d.pOdometer); })
	  .attr('r', 6)
	  .attr('fill', 'white')
	  .attr('stroke', 'steelblue')
	  .attr('stroke-width', '3')
	  .on('mouseover', tip.show)
	  .on('mouseout', tip.hide);
}
*/
function teamAdd(team) {
    chart.load({
        url: team
       })
    };
function teamRemove(team) {
    chart.unload({
        url: team
       });
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
function rankRev(value) {
return 33-value;
}
