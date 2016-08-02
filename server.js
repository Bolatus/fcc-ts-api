var express = require('express');
var strftime = require('strftime');
var app = express();


app.get('/:tuktuk', function (req, res) {
    var ddd = Date.parse(req.params.tuktuk);
    if (isNaN(ddd)){ 
        res.end('null');
    }else{
        var dt = new Date(ddd);
       var ob = {
         "unit":dt.getTime(),
         "natural": strftime('%B %d, %Y',dt)
       };
        res.end(JSON.stringify(ob));
    }
  // res.end(JSON.stringify(ob));    
    
  //res.send('Hello World! '+req.params.tuktuk);
});

app.get('/', function (req, res) {
  res.send('This is timestamp service for FreeCodeCamp challenge!');
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});