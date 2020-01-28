const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css",
            
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, //css, scss, sass
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', //adiciona css a dom injetando a tag <style>
                'css-loader',//interpreta @import, url()...                
                'sass-loader'
            ]
        }]
    }
} 