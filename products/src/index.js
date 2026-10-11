import { faker } from '@faker-js/faker';

let products = '';

for (let items = 0; items < 5; items++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
}

console.log(products)

function showListProducts() {
    document.querySelector('#products-items').innerHTML = products;
}

showListProducts()