const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/skills', (req, res) => {
  res.sendFile(__dirname + '/public/skills.html');
});

app.listen(port, () => {
  console.log(`Portfolio app is running at http://localhost:${port}`);
});
