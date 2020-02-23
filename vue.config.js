module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': 'assets/common',
                'components':'assets/components',
                'mock':'assets/mock',
                'network':'assets/network',
                'views': 'assets/views'
            }
        }
    }
}