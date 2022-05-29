const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars'); //  const { engine } = require('express-handlebars');
const path = require('path');

//Initializations
const app = express();

//Setting
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); //Configuration of handlebars engine
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('views engine', '.hbs')
//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //Define the type of the data (Only simple formats (String, number, boolean))
app.use(express.json()); //Let json reception

//Global Variables
app.use((req, res, next) => {

    next();
})

//Routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));

//Public
app.use(express.static(path.join(__dirname, 'public')))

//Starting server
app.listen(app.get('port'), () => {
    console.log('Server listening on port ', app.get('port'))
});