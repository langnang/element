"use strict";
// 静态页面
(function (define) {
  define(function (require, exports, module) {
    module.exports = {
      name: "static",
      path: "/static",
      proxyPath: "/",
      component: "views/static/home/index",
      children: [
        {
          name: "Home",
          path: "/",
        },
        require("./dev"),
        {
          path: "/component",
          children: [
            {
              name: "Button",
              description: "按钮",
              path: "/button",
              component: "",
            },
          ],
        },
        {name: "Layout", description: "布局", path: "/layout", children: []},
        {name: "Effect", description: "特效", path: "/effect", children: []},
        {
          name: "UI",
          description: "用户界面布局",
          path: "/ui",
          children: [
            {
              name: "Neumorphism",
              description: "新拟态",
              path: "/neumorphism",
            },
            {
              name: "Frosted",
              description: "磨砂玻璃",
            },
            {
              name: "Balanced",
              description: "舒适配色",
            },
            {
              description: "3D 色彩",
            },
            {
              description: "渐变色彩",
            },
            {
              description: "3D 交互",
            },
            {
              description: "质感设计",
            },
            {
              description: "暗黑模式",
            },
            {
              description: "扁平设计",
            },
            {
              description: "手绘元素",
            },
            {
              description: "微交互",
            },
            {
              description: "微动画",
            },
            {
              description: "文字主导",
            },
            {
              description: "数据可视",
            },
            {
              description: "拇指移动",
            },
            {
              description: "留白设计",
            },
            {
              description: "使用视频",
            },
            {
              description: "不对称布局",
            },
          ],
        },
      ],
    };
  });
})(define);
