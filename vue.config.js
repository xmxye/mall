module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components':'@/components',
                'mock':'@/mock',
                'network':'@/network',
                'views': '@/views'
            }
        }
    }
}