
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
