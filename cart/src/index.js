import { faker } from '@faker-js/faker';

const cartText = `<div>You have ${faker.number.int({ min: 1, max: 99 })} itens in your cart.</div>`

document.querySelector('#dev-cart').innerHTML = cartText;

console.log(cartText)
