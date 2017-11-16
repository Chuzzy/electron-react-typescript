const path = require("path");

const commonConfig = {
    node: {
        __dirname: false
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx", ".json", ".scss"]
    }
};

const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = [
    Object.assign(
        {
            target: "electron-main",
            entry: { main: "./src/main.ts" }
        },
        commonConfig),
    Object.assign(
        {
            target: "electron-renderer",
            entry: { gui: "./src/gui.tsx" },
            plugins: [new HtmlWebpackPlugin({
                title: "Wacky Electron App"
            })]
        },
        commonConfig)
];
