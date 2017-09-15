const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const db = require('./models');

app.use(express.static('./public') );
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/public')});
});

app.listen(PORT, () =>{
  db.sequelize.sync({force:true});
  console.log(`Listening on ${PORT}`);
});