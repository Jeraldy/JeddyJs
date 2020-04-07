var path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js','.css'],
    },
    output: {
        filename: './index.js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: "umd"
    },
};

