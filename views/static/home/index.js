"use strict";
(function (define) {
  define(function (require, exports, module) {
    module.exports = {
      template: require("text!views/static/home/index.hbs"),
      run: function ({render, router, routes, $routes, route, template, Handlebars, $params, convertUrlParams}) {
        // console.log(router, routes, route, $routes);
        route.children = $routes.find(v => v.name == "static").children.filter(
          (item) =>
            item.path !== "/dev" && item.children && (item.children instanceof Array ? item.children : Object.values(item.children)).length > 0
        );
        Handlebars.registerHelper(
          "link",
          /**
           * @param root 根
           * @param group 一级
           * @param item 二级
           * @param {String} link 外链
           * @param {Object} params 地址栏参数
           * @param {Object} options
           * @returns {String} 地址链接
           */
          function (root = "", group = "", item = "", link, params, options) {
            let href = "";
            if (link) {
              href = link;
            } else {
              href = "#" + root + group + item;
            }

            href += convertUrlParams({...$params, ...params});
            return href;
          }
        );
        const html = Handlebars.compile(template)(route);
        render(html);
      },
    };
  });
})(define);
