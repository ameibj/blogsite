const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
const docs = rootpath + "/docs/"
const utils = require(rootpath+'/utils/index.js');
const getFileName = require(rootpath+'/utils/getFilenames.js');

/**
 * 侧边栏的配置（顺序无所谓）
 * utils.genSidebar('Java基础', getFileName(docs+"/Java/Basic/"), false),
 */

const config = {
    // .... 省略部分

    // css
    '/accumulate/css/': utils.genSidebar('CSS', getFileName(docs + "/accumulate/css"), true),
    // js
    '/accumulate/js/': utils.genSidebar('JavaScript', getFileName(docs + "/accumulate/js"), true),
    // 框架
    '/frame/': utils.genSidebar('框架点滴', getFileName(docs + "/frame"), true),

    // 关于我
    '/About/': utils.genSidebar('关于我', getFileName(docs + "/about/"), true),

    // 一定要放在最后！！！
    // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
   // '/': [''] // 此处选择禁用
}
module.exports = config

// console.log(JSON.stringify(config))

