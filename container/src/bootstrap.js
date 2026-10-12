import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('Container is running...');

cartMount(document.querySelector('#dev-cart'))
productsMount(document.querySelector('#products-items'))
