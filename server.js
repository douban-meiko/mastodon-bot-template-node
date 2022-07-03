require('dotenv').config()
const express = require('express');
const executeScript = require('./script');

const app = express();

const port = process.env['PORT'] || 3000;
const endpoint = process.env['ENDPOINT'] || '/'

app.get(endpoint, (req, res) => {
  console.log('request received');
  executeScript(req, res);
})

app.listen(port, () => {
  console.log(`Example bot listening on port ${port}`)
})