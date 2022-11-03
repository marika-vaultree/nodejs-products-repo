const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 3030;


app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});


app.get("/index", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});


app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/about.html')
});


// app.get("/products", async (req, res) => {
//     let data = await axios.get('http://localhost:4040/api/products').then(resp => {
//         return resp.data;
//     });

//     res.send(data)
// });


app.get("/products", (req, res) => {
    res.sendFile(__dirname + '/products.html')
});



app.get("/contact", (req, res) => {
    res.sendFile(__dirname + '/contact.html')
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});