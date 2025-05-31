const express = require("express");
const app = express();
const port = 3000;

// Serve static files (CSS, images) from root
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/skills", (req, res) => {
  res.sendFile(__dirname + "/skills.html");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

