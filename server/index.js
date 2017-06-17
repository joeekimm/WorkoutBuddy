const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const parser = require('body-parser');

const server = express();


server.listen(PORT, (err) => {
  return err ? 
  console.log('Error while connecting to port ', PORT) :
  console.log('Successfully connected to port ', PORT);
});
