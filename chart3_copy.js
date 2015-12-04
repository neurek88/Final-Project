var getData = function(dataPath) {
  d3.csv(dataPath, function ( d ) {

  var data = d;

  if ( configdata.axis.x.source_units == "meses" && configdata.axis.x.units == "años" )
  {
    data[ configdata.axis.x.property_key ] = data[ configdata.axis.x.property_key ];
  }

  return data;

}, function( error, data ) {

  if (!error)
  {

    var percentiles = [];
    configdata.percentilesData.forEach( function( p ) {
      percentiles.push( p.name );
    });
     var year = configdata.year + ' (' + configdata.axis.x.units + ')'
      var y_axis_label = configdata.axis.y.label + ' (' + configdata.axis.y.units + ')';

  }
})
}
getData('data/bengals_history.csv');

var chart = c3.generate({
  bindto: '#chart',
    data: {
      json: 'data',
      x: 'Year',
      type: 'line',
}
})



function sumArray(arr) {
 var sum = 0;
 for(var i=0; i<arr.length; i++) {
 sum = sum + parseFloat(arr[(i+1)]);
 }
  return sum;
}
