const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'soberkeeper/build')));

app.get('/api/getList', (req, res) => {
  let list = ['item1', 'item2', 'item3'];
  res.json(list);
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/soberkeeper/build/index.html'));
// });

app.listen(port);

console.log(`I'm listening! ${port}`);