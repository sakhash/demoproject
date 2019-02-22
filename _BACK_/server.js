const X = require('express');
const APP = X();
const PORT = 2100;

 // bas nektob bel taskbar localhost:2100/project1 berou7 3al folder site w befarje index.html
APP.use('/', X.static(__dirname + '/_SITE_/')); //bas nektob localhost:2100/ kamen brou7 3al site -> index.html


APP.listen(PORT, () => {
  	console.log(`\r\nNODE ::: I started my back end server on port ${PORT}.\r\n`);
  });