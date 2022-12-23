const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry:{
        main: path.resolve(__dirname,'./src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './production'),
        filename: 'bundje.js',
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'База знаний',
            template: path.resolve(__dirname, './src/template.html'), //шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],
    module: {
        rules:[
            // javascript
           {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options:{
                presets: ['@babel/preset-env', "@babel/preset-react"]
                }
            }
          },
            // Изображения
             {
             test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
             type: 'asset/resource',
             },
            // шрифты и svg
            {
            test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
            type: 'asset/inline',
            }, 
             // css, PostCSS, Sass
            {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader'],
            }, 
        ]
    }
}

