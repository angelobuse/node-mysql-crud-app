const express = require('express');

//call groceryroutes
const groceryRoutes = require('./routes/grocery')

//call error controller
const errorController = require('./controllers/error');

//Body parser
const bodyParser = require('body-parser');

//Initialize app
const app = express();

const ports = process.env.PORTS || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
})

app.use('/groceries', groceryRoutes);

app.use(errorController.get404);

app.use(errorController.get500);


app.listen(ports, () => {
    console.log('App listening to port ' + ports);
})
