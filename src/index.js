const express = require('express');
const morgan = require('morgan');

//Initializations
const app = express();

//Setting
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));

//Global Variables


//Routes
app.use(require('./routes'));

//Public

//Starting server
app.listen(app.get('port'), () => {
    console.log('Server listening on port ', app.get('port'))
});