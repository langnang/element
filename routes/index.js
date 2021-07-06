"use strict";

(function (define) {
  define(function (require, exports, module) {
    require("director");
    const Handlebars = require("handlebars");
    const config = require("../app.config");
    // 代理路由
    const proxyViews = {
      "/": "/static/index",
      "/vue": "/vue/index",
    };

    // 原始路由
    const routes = flattenRoutes([
      require("./static/index"),
      // require("./vue/index"),
      // require("./react/index"),
      // require("./dev/index"),
    ]);
    // console.log(routes);
    // 转换为符合 director 的路由格式
    const router = window
      .Router(
        Object.keys(routes).reduce((total, val) => {
          total[val] = [];
          return total;
        }, {})
      )
      .configure({
        on: function (...args) {
          console.log("on", args);
          $(".loading").fadeOut(1000);
        },
        once: function (...args) {
          console.log("once", args);
        },
        after: function (...args) {
          console.log("after", args);
        },
        before: function (...args) {
          $(".loading").fadeIn(100);
          renderView({ routes, config });
        },
      })
      .init();
    // console.log(router);

    function renderView(options) {
      options.path =
        options.path ||
        window.location.hash.substr(
          1,
          window.location.hash.indexOf("?") === -1
            ? window.location.hash.length
            : window.location.hash.indexOf("?") - 1
        );
      const route = options.routes[options.path];
      let callback = Object.assign(options, {
        route,
        Handlebars,
        template: `<div name="${options.path
          .substr(1)
          .split("/")
          .join("-")}-wrapper" class="row"></div>`,
        render: function (...args) {
          // console.log(args);
          if (typeof args[0] == "string") {
            document.getElementById("app").innerHTML = args[0];
            return;
          }
          // console.log(this);
          document.getElementById("app").innerHTML = Handlebars.compile(
            callback.template
          )(args[0]);
        },
        proxyViews,
        run() {
          this.render();
        },
      });
      if (route.component) {
        require([route.component], function (res) {
          // console.log(res);
          callback = Object.assign(callback, res);
          // console.log(callback);
          callback.run(callback);
        });
      } else {
        callback.run(callback);
      }
    }

    // 展平嵌套路由
    function flattenRoutes(routes, parent = "") {
      return routes.reduce((t0, t1) => {
        return {
          ...(t1.children
            ? flattenRoutes(t1.children, parent + (t1.path || ""))
            : {}),
          ...t0,
          [parent + (t1.proxyPath ? t1.proxyPath : t1.path || "")]: {
            ...t1,
            _path: t1.path,
            path: parent + (t1.path || ""),
          },
        };
      }, {});
    }
  });
})(define);
