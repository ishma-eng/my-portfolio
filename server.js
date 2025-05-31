const express = require("express");
const app = express();
const port = 3000;

// Serve static files (CSS, images, etc.)
app.use(express.static("public"));

// Route for homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Route for skills page
app.get("/skills", (req, res) => {
  res.sendFile(__dirname + "/skills.html");
});

// Start server
app.listen(port, () => {
  console.log("Server started on http://localhost:" + port);
});

