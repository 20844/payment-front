// 解决 Vue 项目内网穿透 invalid host header 问题  https://blog.csdn.net/luxiahongyi/article/details/123489141
module.exports = {
    // 跳过检查host
    devServer: { disableHostCheck: true }
}