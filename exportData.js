var csvData;
  d3.csv("data/bengals_history.csv", function(error, data) {
   data.forEach(function(d) {
        d.BengalsWins = +d.Bengals_Wins;
        d.year = +d.Year;
        d.Opts = (33- (+d.OffenseRank));
        d.Dpts = (33- (+d.DefenseRank));
        d.playoffs = d.Playoffs;
    });
   console.log(data);
  });
    function exportData (data) {
      console.log (data);
    }

console.log("help me")
console.log(csvData);
