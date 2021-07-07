"use strict";
(function (define) {
  define(function (require, exports, module) {
    module.exports = {
      template: require("text!./../../../../views/static/component/input/index.hbs"),
      run: function ({render, route}) {
        console.log(route);
        render({...route});
      },
    };
  });
})(define);
