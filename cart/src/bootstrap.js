import { faker } from '@faker-js/faker';

//1. Seria criar uma função que faz a componettização desse elemento:
const mount = (el) => {
    const cartText = `<div>You have ${faker.number.int({ min: 1, max: 99 })} itens in your cart.</div>`
    el.innerHTML = cartText
}

// 2. Verificar se esta rodando em um ambiente de dev: Valide em seguida se em public o id esta certo.
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart')

    if (el) {
        mount(el)
    }

}

// Deixa nossa função disponivel para ser importado em outro arquivo.
export { mount };
