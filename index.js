const express = require('express');
const path = require('path');
const { createBareServer } = require('@ultraviolet/bare-server-node');
const { uvPath } = require('@ultraviolet/core');

const app = express();
const bare = createBareServer('/bare/');
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bare/', (req, res) => bare.handleRequest(req, res));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.listen(port, () => {
  console.log(`Ultraviolet proxy running on port ${port}`);
});
