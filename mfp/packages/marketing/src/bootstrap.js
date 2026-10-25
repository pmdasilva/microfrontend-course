import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




// Funçãop mount para inciar a subida do app;

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
}

// Isolar a aplicação em desenvolvimento, para que não haja conflito com outras aplicações que estão rodando na mesma página.
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    // Se o elemento for existente ele chama a função mount, para subir a aplicação de marketing.
    if (devRoot) {
        mount(devRoot);
    }
}

// No devermos rodar atraves do container, e exportar a função mount, que será chamada pelo container para subir a aplicação de marketing.
export { mount as mountMarketingApp };