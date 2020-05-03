// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '^/': {
                target: 'http://190.27.187.143:9898'
            }
        }
    }
}