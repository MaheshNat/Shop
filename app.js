const path = require('path');

const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const express = require('express');

const app = express();

app.engine(
  'handlebars',
  expressHbs({
    layoutDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'handlebars'
  })
);
app.set('view engine', 'handlebars');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found!' });
});

app.listen(3000);
