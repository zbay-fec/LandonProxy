const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(3000, () => console.log('proxy server up and running on port 3000'));
