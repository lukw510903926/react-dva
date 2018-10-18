import BaseLayout from '../pages/BaseLayout';
import {createRoutes} from '@/utils/RouteUtil';
import Product from './Product'
import NotFound from './NotFound'

const routesConfig = (app) => ([
  {
    path: '/',
    title: '首页',
    indexRoute: '/home/product/list',
    component: BaseLayout,
    childRoutes: [
      Product(app),
      NotFound(app)
    ]
  }
]);
export default app => createRoutes(app, routesConfig,{});
