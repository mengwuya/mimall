// cors jsonp跨域使用
let baseUrl;
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = 'http://dev-mall-pre.springboot.cn/api'
        break;
    case 'test':
        baseUrl = 'http://test-mall-pre.springboot.cn/api'
        break;
    case 'product':
        baseUrl = 'http://mall-pre.springboot.cn/api'
        break;
    default:
        baseUrl = 'http://mall-pre.springboot.cn/api'
        break;
}

export default {
    baseUrl
}