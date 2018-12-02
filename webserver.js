const express = require('express');
const app = express();

app.use(express.static('./', {index: 'index.html'}));

/*
app.get('/', (req, res) => {
  res.send("Hello from App Engine!");
});
*/

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
