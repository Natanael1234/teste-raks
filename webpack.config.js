const path = require('path');

module.exports = {
    entry: [
        __dirname + '/src/index.js',
        __dirname + '/src/styles/theme.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].css' }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
};