const express = require('express')
const morgan = require('morgan')
const path = require('path');
const { mongoose } = require('./database/database');
const app = express()



// Paquete para leer y establecer las variables de entorno
require('dotenv').config();

//   // conectar DB
   

//configuracion

//definir el puerto 
app.set('port', process.env.PORT || 3000 )



//middlewares

//para registrar en mi consola las peticiones del navegador o app cliente
app.use(morgan('dev'))

//para q la app pueda entender el formnato Json
app.use( express.json() )

//routes

app.use( '/api/tasks',require('./routes/task.routes') )

// static files

//expresss la carpeta  publica esta en :
app.use( express.static( path.join( __dirname , 'public')))

//inicia el servidor
app.listen(app.get('port'), ()=> {
    console.log(`servidor correindo en el  puerto ${app.get('port')} `);
})


