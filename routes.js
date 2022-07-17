const express = require('express');
const router = express.Router();

//  Rutas
router.get('/', (req, res) => {
res.render('index');
  // res.end('Hello World!');
});

router.get('/login', (req, res) => {
  res.render('login');
  // res.end('Aquí va el login!');
});

module.exports = router;