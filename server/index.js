const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const parser = require('body-parser');

const server = express();


server.listen(PORT, (err) => {
  if (err) {
    console.log(`there was an error listening on ${PORT}`);
  } else {
    console.log(`successfully listening on port ${PORT}`);
  }
});
