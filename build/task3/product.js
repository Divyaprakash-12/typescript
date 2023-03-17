"use strict";
function getProducts() {
    return fetch('/product.json')
        .then(result => result.json())
        .then(result => {
        return result;
    });
}
getProducts()
    .then(Biscuit => {
    document.write("<h3>BISCUIT DETAILS</h3>");
    document.write(Biscuit.map(B => "Product id :" + B.proid + "<br>" + "Product Name :" + B.proname + "<br>" + "Product Price :" + B.proprice
        + "<br>" + "Product Quantity :" + B.proqty + "<br>").toString());
});
function getFakeApi() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
}
getFakeApi();
