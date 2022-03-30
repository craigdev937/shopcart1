const path = require("path");
module.exports = {
    entry: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "index.js",
        chunkFilename: "[id].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devServer: {
        static: "./dist/",
        historyApiFallback: true,
        compress: true,
        open: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                loader: "ts-loader"
            },
            {
                test: /\.(css)$/i,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: true,
                    }
                }]
            },
            {
                test: /\.(gif|png|svg|jpe|jpg|jpeg|webp)$/i,
                type: "asset/resource"
            }
        ]
    }
};




