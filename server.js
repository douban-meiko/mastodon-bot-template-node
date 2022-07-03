const express = require('express');
const executeScript = require('./script');

const app = express();

const port = process.env['PORT'] || 3000;
const endpoint = process.env['ENDPOINT'] || '/'

app.get(endpoint, (req, res) => {
  console.log('request received');
  if (req.headers['x-api-key'] == process.env['CLIENT_API_KEY']) {
    executeScript(req, res);
  } else {
    console.log('unauthenticated request');
    res.status(403).json({ 'error': 'authentication failed' });
  }
})

app.listen(port, () => {
  console.log(`Example bot listening at ${endpoint} on port ${port}`)
})