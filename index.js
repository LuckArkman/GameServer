var io = require('socket.io')();

var port = process.env.PORT || 52300;

console.log(`Listening port : ${port}`)
io.on('connection', client => {
    console.log('connection mode !');
});


