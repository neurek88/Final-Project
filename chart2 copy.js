var bears = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        [/*$.ajax({
    url: "bear.json",

    data: {
  },
    dataType: "json",

    success:function (data) { for (var i=0;i<data.nfl.length;i++){
    var s = data.bengals[i].W;
    var data = []
    data.push(s);
  }
    console.log(data.nfl);
  }
         })*/],

        ['data2', 50, 20, 10, 40, 15, 25]
      ],
      axes: {
        data2: 'y2' // ADD
      }
    },
    axis: {
      y2: {
        show: true // ADD
      }
    }
});
function show() {
bears.show(['data2']);
}
function hide() {
    bears.hide(['data2']);
}

$( document ).ready(function () { $.ajax({
    url: "bear.json",
    data: {
    },
    dataType: "json",

    success:function (data) { for (var i=0;i<data.bengals.length;i++){
    console.log(data.bengals[i].W);
    var data = []
    data.push(s);
  }
   console.log(data);
  },
  error:
  console.log("no data"),
         });
                });
