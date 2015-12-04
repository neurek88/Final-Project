
 d3.csv("data/bengals_history.csv", function(d) {
        return   {
            year: +d.Year,
            teamWins: +d.Wins,
            offensePts: (33 - (+d.OffenseRank)),
            defensePts: (33 - (+d.DefenseRank))
            };
   var team = c3.generate({
    bindto: '#graph',
    data: {
      columns: [
        [teamWins],
        [offensePts],
        [defensePts]
        ],
      x: year,
      type: 'line',
     },

})
  },
             function(error, rows) {
  console.log(rows);
});

console.log(bengals.year);


function show() {
bears.show(['data2']);
}
function hide() {
    bears.hide(['data2']);
}


