const express = require('express');
const bodyParser = require('body-parser');

const phonesBBDD = require('./phones.json');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('server'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
});

const phonesMapped = phonesBBDD.map(phone => ({
    id: phone.id,
    name: phone.name,
    manufacturer: phone.manufacturer,
    description: phone.description,
    color: phone.color,
    price: phone.price,
    imageFileName: `http://localhost:3002/images/${phone.imageFileName}`,
    screen: phone.screen,
    processor: phone.processor,
    ram: phone.ram
}));

app.get('/phones', (req, res) => {
    res.status(200).send(phonesMapped);
});

app.listen(3002, () =>
    console.log('Express server is running on localhost:3002')
);
