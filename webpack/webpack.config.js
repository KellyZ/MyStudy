const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlimgPlugin = require('html-withimg-loader');

var website = {
    publicPath:'http://127.0.0.1:8080/'
}

module.exports={
    entry:{
        js:'./src/js/index.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js",
        publicPath: website.publicPath
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use:extractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        limit:5000,
                        outputPath:'images/'
                    }
                }]
            },
            {
                test:/\.(htm|html)/i,
                use:['html-withimg-loader']
            },
            {
                test:/\.less$/,
                use:extractTextPlugin.extract({
                    use:[
                        {
                            loader:'css-loader'
                        },
                        {
                            loader:'less-loader'
                        }
                    ],
                    fallback:'style-loader'
                })
            }
        ]
    },
    plugins:[
        // new uglify(),
        new htmlPlugin({
            minify:{
                removeAttributeQuites:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new extractTextPlugin('css/index.css')
    ],
    devServer: {
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:8080,
        compress:true
    }
}