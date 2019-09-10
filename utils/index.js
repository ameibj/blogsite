const utils = {
    genSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 2) {
        let arr = new Array();
        arr.push({
            title,
            collapsable,
            sidebarDepth,
            children
        })
        return arr;
    }
};

module.exports = utils;
