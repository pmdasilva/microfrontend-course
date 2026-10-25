const { merge } = require('webpack-merge'); // esta biblioteca permite combinar configuraciones de webpack
const HtmlWebpackPlugin = require('html-webpack-plugin'); // este plugin genera un archivo HTML para servir los bundles de webpack
const commonConfig = require('./webpack.common.js'); // importa la configuración común de webpack
// importa la configuración de federación de módulos
const moduleFederationConfig = require('webpack/lib/container/ModuleFederationPlugin');



const devConfig = {
    mode: 'development', // modo de desarrollo
    devtool: 'inline-source-map', // permite mapear el código fuente original para facilitar la depuración
    devServer: {
        static: './dist', // carpeta donde se encuentran los archivos estáticos
        hot: true, // habilita el modo de recarga en caliente
        port: 8080, // puerto en el que se ejecutará el servidor de desarrollo
        historyApiFallback: {
            index: './src/index.html'
        }, // permite que la aplicación funcione correctamente con rutas del lado del cliente
    },
    plugins: [
        new moduleFederationConfig({
            name: 'container', // nombre del contenedor
            remotes: {
                // definir remotes aquí
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html', // archivo HTML que se utilizará como plantilla
        })
    ]
};

module.exports = merge(commonConfig, devConfig); // combina la configuración común con la configuración de desarrollo