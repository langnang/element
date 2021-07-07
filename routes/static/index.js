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
        {
          path: "/component",
          children: [
            {
              name: "Text",
              description: "文本"
            },
            {
              name: "Button",
              description: "按钮",
              path: "/button",
              component: "views/static/component/button/index",
            },
            {
              name: "Loading",
              description: "加载状态",
              path: "/loading",
              component: "views/static/component/loading/index"
            },
            {
              name: "Progress",
              description: "进度条",
              path: "/progress",
              component: "views/static/component/progress/index"
            },
            {name: "Table", description: "表格"},
            {name: "Navs", description: "标签页"},
            {name: "Navbar", description: "导航条"},
            {name: "Figure", description: "图形", path: "/figure", component: "views/static/component/figure/index"},
            {
              name: "Scrollbar",
              description: "滚动条",
              path: "/scrollbar",
              component: "views/static/component/scrollbar/index"
            }, {
              name: "Input",
              description: "输入框",
              path: "/input",
              component: "views/static/component/input/index"
            }, {
              name: "Checkbox",
              description: "多选框",
              path: "/checkbox",
              component: "views/static/component/checkbox/index"
            },

          ],
        },
        {
          name: "Skin", description: "皮肤", path: "/skin", children: []
        },
        {
          name: "Layout", description: "布局", path: "/layout", children: [
            {
              name: "Grid", description: "栅格", path: "/grid",
              component: "views/static/layout/grid/index"
            },
            {
              name: "Masonry", description: "瀑布流", path: "/masonry",
              component: "views/static/layout/masonry/index"
            }
          ]
        },
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
