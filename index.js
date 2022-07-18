// Stock Market Portfolio App By Mickey Pavier-Tite

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const expressHbs = require('express-handlebars');

const PORT = process.env.PORT || 5000;

// Set Handlebars Middleware
app.engine('handlebars', expressHbs.engine({
    layoutsDir: 'views/layouts/',
    defaultLayout: null,
    extname: 'handlebars'
  })
);
 
app.set('view engine', 'handlebars');
 app.set('views', './views');

const otherstuff = "hello there, this is otherstuff!"

// Set Handlebar routes
app.get('/', (req, res) => {
    res.render('home', {
    	stuff: otherstuff
    });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on Port ' + PORT));
