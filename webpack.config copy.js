const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }            ,
            {
                test: /\.(scss|css)$/,
                use: [
                    // cria os nós de estilo a partir de string JS
                    'style-loader', 
                    // Traduz Sass para CommonJS
                    'css-loader', 
                    // Compila Sass para CSS
                    'sass-loader'
                ]
            }
        ],
    }
}