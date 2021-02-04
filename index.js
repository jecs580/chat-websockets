const express = require('express');
const path = require('path');
const socketIO = require('socket.io');

const io = socketIO.listen(server);
const app = express();

// Settings
app.set('port',process.env.PORT|| 5000);

// Static files
app.use(express.static(path.join(__dirname,'public')));

// Begin Server
const server = app.listen(app.get('port'),()=>{
    console.log(`Servidor en puerto ${app.get('port')}`);
});
