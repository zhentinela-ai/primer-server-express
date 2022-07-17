const express = require('express');
const morgan = require('morgan');
const app = express()

// requeriendo rutas
const routes = require('./routes');
const routesApi = require('./routes-api'); 

// Setting
app.set('appName', 'Mi primer server');
app.set('views', __dirname + '\\views');
// console.log(__dirname + '\\views') // Esto hace la anterior línea app.set
app.set('view engine', 'ejs');

// Middlewares
// app.use(morgan('dev'));
// app.use(morgan('short'));
app.use(morgan('combined'));

/*
app.use(function(req, res, next) {
  console.log('request url: ', req.url);
  next();
});

app.use((req, res, next) => {
  console.log('Ha pasado por esta función');
  next();
});
*/

// Rutas
app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) => {
  res.end('Archivo no encontrado');
});

app.listen(3000, () => {
  console.log('Servidor funcionando')
  console.log('Nombre de la App: ', app.get('appName'));
});
