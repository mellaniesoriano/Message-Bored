const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const app = express();
let db = require('./models');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', require('./api'));

app.use('*', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(PORT, () => {
  // db.sequelize.sync({force:true});
  console.log(`server running on ${PORT}`);
});