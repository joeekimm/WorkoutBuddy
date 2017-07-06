const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = require('./router/');

const PORT = process.env.PORT || 5000;

require('dotenv').config();

const server = express();

server.use(cors());
server.use(express.static('Client'));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api', router);

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Client/index.html'));
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(`there was an error listening on ${PORT}`);
  } else {
    console.log(`successfully listening on port ${PORT}`);
  }
});
