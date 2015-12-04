
var chart = c3.generate({
  bindto: '#chart',
    data: {
      url: 'data/bengals_history.csv',
      x: 'Year',
      type: 'line',
      hide: ['Year','Lg','Tm','L','T','Playoffs','PF','PA','PD','Coaches','AV','Passer','Rusher','Receiver','OffenseRank','Yds','DefenseRank','Yds','T/G','Pts±','Yds±','out of','MoV','SoS','SRS','OSRS','DSRS'],
    },
  transition: {
        duration: 500
      },
  legend:{
    hide: ['Year','Lg','Tm','L','T','Playoffs','PF','PA','PD','Coaches','AV','Passer','Rusher','Receiver','Offense Rank','Yds','Defense Rank','Yds','T/G','Pts±','Yds±','out of','MoV','SoS','SRS','OSRS','DSRS']
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
      y2: {
        show: true,
        inverted: true              // ADD
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
        url: team,
       });
}

function teamLoad(team) {
    chart2.load({
        url: team,
       });
}
function loadData () {
  chart2.data.values(DefenseRank);
}

console.log(loadData())

function rankRev(value) {
return 33-value;
}
