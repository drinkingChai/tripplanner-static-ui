const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');
const routes = require('./routes');

const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(express.static(path.resolve('public')));
app.use('/bootstrap', express.static(path.resolve('node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.resolve('node_modules/jquery/dist')));
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(routes);


app.use((req, res, next)=> {
  const error = new Error('page not found');
  error.status = 404;
  next(error);
})

app.use((err, req, res, next)=> {
  res.status(err.status || 500).render('error', { error: err });
})

const port = process.env.PORT || 3000;

models.sync()
  .then(()=> {
    app.listen(port, ()=> {
      console.log(`listening on port ${port}`);
    })
  })
