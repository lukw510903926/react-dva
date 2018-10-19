/**
 * 菜单配置
 *    key:循环key属性
 *    path :页面路径
 *    title:菜单名称
 *    auth :是否需要认证
 *    isMenu:是否在菜单显示
 *    children:子菜单
 * @type {*[]}
 */
const Menu = [
  {key: "/home/404", path: "/home/404", title: "页面未找到", auth: true, isMenu: false},
  {key: "/login", path: "/login", title: "登录页", auth: false, isMenu: false},
  {
    key: "product", title: "产品管理", type: "star", isMenu: true,
    children: [
      {key: "/home/product/list", path: "/home/product/list", title: "产品列表", auth: false, isMenu: true},
      {key: "/home/product/add", path: "/home/product/add", title: "产品添加", auth: false, isMenu: true},
    ]
  }
];
export default Menu;
