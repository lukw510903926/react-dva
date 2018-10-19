import BaseLayout from '../pages/BaseLayout';
import {createRoutes,createNotFound} from '@/utils/RouteUtil';
import Product from './Product'
import {NotExist} from "@/routes/NotFound";

const routesConfig = (app) => ([
  {
    path: '/',
    title: '首页',
    indexRoute: '/home/product/list',
    component: BaseLayout,
    childRoutes: [
      Product(app),
    ]
  }
]);
export default app => createRoutes(app, routesConfig,{notFound:NotExist});
