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
    },
    pwa: {
        name: 'Dummy App',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: './src/PWA/service-worker.js'
            // ...other Workbox options...
        }
    }
};
