const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'soberkeeper/build')));

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/api/getList', (req, res) => {
  const list = ['item1', 'item2', 'item3'];
  res.json(list);
  console.log('Sent that shit.');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/soberkeeper/build/index.html'));
});

app.listen(port);

console.log(`I'm listening! ${port}`);