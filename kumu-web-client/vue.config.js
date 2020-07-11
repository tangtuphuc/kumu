module.exports = {
    outputDir: './dist',
    configureWebpack: {
        resolve: {
            alias: {
                '@': `${__dirname}/src`
            }
        },
        plugins: []
    },
    pages: {
        // Guest page for all pages relate to Guest side
        chatPage: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:9090/',
                changeOrigin: true
            }
        }
        // historyApiFallback: {
        //     rewrites: [{ from: /\/home/, to: '/index.html' }]
        // }
    }
};
