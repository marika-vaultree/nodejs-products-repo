// Creating a lift of product objects for 'Products' page
let products = [
    {productName: 'Mechanical Keyboard', price: 79.99},
    {productName: 'Wired mouse', price: 35.50},
    {productName: '29 inch Monitor', price: 119.99},
    {productName: 'Wireless Headphones', price: 100.00},
    {productName: 'Desk Mat', price: 12.79}
];

let list = document.getElementById('products-list');

for (i = 0; i < products.length; i++) {
    var li = document.createElement('li');
    li.innerText = products[i].productName + ' - ' + ' $' + products[i].price;
    list.appendChild(li);
};

// Send button for the form in the 'Contact' page
var btn = document.getElementById('send-email-btn');
btn.addEventListener('click').submit();