const express = require("express");
const app = express();
const port = 4040;


let products = [
    { productName: 'Mechanical Keyboard', price: 79.99 },
    { productName: 'Wired mouse', price: 35.50 },
    { productName: '29 inch Monitor', price: 119.99 },
    { productName: 'Wireless Headphones', price: 100.00 },
    { productName: 'Desk Mat', price: 12.79 }
];

app.get('/api/products', (req, res) => {
    res.send(products);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});