/*

*/

var express = require('express')
,config = require('./config.js')
;

var app = express()

app.use(express.static(__dirname+'/public'))

//app.set('port',config.port)
app.listen(config.port,function(){
	console.log('listening on port '+config.port)
})

