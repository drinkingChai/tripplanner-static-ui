const express = require('express');
const nunjucks = require('nunjucks');
const models = require('./models');
const routes = require('./routes');

const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(routes);

const port = process.env.PORT || 3000;

models.sync()
  .then(()=> {
    app.listen(port, ()=> {
      console.log(`listening on port ${port}`);
    })
  })
