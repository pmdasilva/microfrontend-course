const { merge } = require('webpack-merge'); // esta biblioteca permite combinar configuraciones de webpack
const HtmlWebpackPlugin = require('html-webpack-plugin'); // este plugin genera un archivo HTML para servir los bundles de webpack
const commonConfig = require('./webpack.common.js'); // importa la configuración común de webpack
const moduleFederationConfig = require('webpack/lib/container/ModuleFederationPlugin'); // importa la configuración de federación de módulos

const devConfig = {
    mode: 'development', // modo de desarrollo
    devtool: 'inline-source-map', // permite mapear el código fuente original para facilitar la depuración
    devServer: {
        static: './dist', // carpeta donde se encuentran los archivos estáticos
        hot: true, // habilita el modo de recarga en caliente
        port: 8081, // puerto en el que se ejecutará el servidor de desarrollo
        historyApiFallback: {
            index: './src/index.html'
        }, // permite que la aplicación funcione correctamente con rutas del lado del cliente
    },
    plugins: [
        new moduleFederationConfig({
            name: 'marketing', // nombre del contenedor
            filename: 'remoteEntry.js', // nombre del archivo que se generará para exponer los módulos
            exposes: {
                './MarketingApp': './src/bootstrap' // expone el módulo bootstrap para que pueda ser consumido por otros contenedores
            },

            remotes: {
                // definir remotes aquí
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html', // archivo HTML que se utilizará como plantilla
        })
    ]
};

module.exports = merge(commonConfig, devConfig); // combina la configuración común con la configuración de desarrollo