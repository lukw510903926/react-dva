import Product from '@/pages/product/Product'
import ProductList from '@/pages/product/ProductList'
import {createRoutes} from '@/utils/RouteUtil';
import {exception} from "@/routes/Exception";

const routesConfig = (app) => ([{
    path: '/home/product/list',
    title: '产品列表',
    component: ProductList
  }, {
    auth: true,
    path: '/home/product/add',
    title: '产品添加',
    component: Product
  }]
);

export default app => createRoutes(app, routesConfig, exception);
