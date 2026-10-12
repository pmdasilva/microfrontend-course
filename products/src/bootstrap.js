import { faker } from '@faker-js/faker';


const mount = (el) => {

    let products = '';

    for (let items = 0; items < 5; items++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }

    el.innerHTML = products;

}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#products-items');

    if (el) {
        mount(el)
    }
}

export { mount }



