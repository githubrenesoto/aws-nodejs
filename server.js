const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('hola version 2'))

app.listen(3000);
console.log("server on port 3000")