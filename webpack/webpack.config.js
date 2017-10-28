const path = require('path');
const glob = require('glob');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlimgPlugin = require('html-withimg-loader');
const purifyCssPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const copyPlugin = require('copy-webpack-plugin');

if (process.env.type=="build"){
    var website = {
        publicPath:'http://www.kelly.com:8080/'
    }
}else{
    var website = {
        publicPath:'http://127.0.0.1:8080/'
    }
}


module.exports={
    // devtool: "source-map",
    // devtool: "cheap-module-source-map",
    devtool: "eval-source-map",
    // devtool: "cheap-module-eval-source-map",
    entry:{
        js:'./src/js/index.js',
        jquery:'jquery'
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
                    use:[
                        {
                            loader: 'css-loader',
                            options:{
                                importLoaders:1
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
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
            },
            {
                test:/\.scss$/,
                use:extractTextPlugin.extract({
                    use:[
                        {
                            loader:'css-loader'
                        },
                        {
                            loader:'sass-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ],
                    fallback:'style-loader'
                })
            },
            {
                test:/\.(jsx|js)$/,
                use:{
                    loader: "babel-loader"
                },
                exclude:/node_modules/
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
        new extractTextPlugin('css/index.css'),
        new purifyCssPlugin({
            paths: glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.ProvidePlugin({
            $:"jquery",
            vue:'vue'
        }),
        new webpack.BannerPlugin('Kelly Author haha'),
        new webpack.optimize.CommonsChunkPlugin({
            name:['jquery','vue'],
            filename:"assets/js/[name].js",
            miniChunks:2
        }),
        new copyPlugin([{
            from: __dirname+"/src/img",
            to:'./public'
        }]),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:8080,
        compress:true
    },
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 500,
        ignored:/node_modules/,

    }
}