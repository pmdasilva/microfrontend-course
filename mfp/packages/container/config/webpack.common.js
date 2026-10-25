module.exports = {
    module: {
        rules: [
            // vamos carregar o babel para transpilar o código em versões do ES6 para versões mais antigas do JavaScript
            {
                test: /\.m?js$/,
                // execulta o babel-loader em todos os arquivos .js, exceto os que estão dentro da pasta node_modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            }
        ]
    }
}