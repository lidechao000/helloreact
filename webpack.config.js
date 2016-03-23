
'use strict';

var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var bower_components = path.resolve(__dirname, 'bower_components');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToEcharts = path.resolve(bower_components, 'echarts/src/echarts.js');
var pathToZrenderMain = path.resolve(bower_components, 'zrender/src/zrender.js');
var pathToZrender = path.resolve(bower_components, 'zrender/src');
module.exports = {
    entry: [path.resolve(__dirname, 'js/app.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
          'react': pathToReact,
          'echarts': pathToEcharts,
          // 'zrender/tool': pathToZrender + '/tool',
          // 'zrender/shape': pathToZrender + '/shape',
          // 'zrender/loadingEffect': pathToZrender + '/loadingEffect',
          // 'zrender/Layer': pathToZrender + '/Layer',
          // 'zrender/Painter': pathToZrender + '/Painter',
          // 'zrender/Group': pathToZrender + '/Group',
          // 'zrender/Storage': pathToZrender + '/Storage',
          // 'zrender/animation': pathToZrender + '/animation',
          // 'zrender/zrender': pathToZrender + '/zrender',
          // 'zrender/dep': pathToZrender + '/dep',
          // 'zrender/config': pathToZrender + '/config',
          // 'zrender': pathToZrenderMain
        },
        extensions: ['', '.coffee', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'react-hot!babel-loader'
        },{
          test: /\.css$/, // Only .css files
          loader: 'style-loader!css-loader' // Run both loaders
        }],
        noParse: [pathToReact]
    },
};
