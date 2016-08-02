var express = require('express');
var strftime = require('strftime');
var app = express();


app.get('/:tuktuk', function (req, res) {
    var ddd = null;
    
    if (isNaN(req.params.tuktuk))
        ddd = Date.parse(req.params.tuktuk);
    else
        ddd = parseInt(req.params.tuktuk);
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

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port '+process.env.PORT);
});