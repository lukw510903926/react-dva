import BaseLayout from '../pages/BaseLayout';
import {createRoutes} from '@/utils/RouteUtil';
import Product from './Product'

const routesConfig = (option) => ([
  {
    path: '/',
    title: '首页',
    indexRoute: '/home/product/list',
    component: BaseLayout,
    childRoutes: [
      Product(option),
    ]
  }
]);
export default (option) => createRoutes(routesConfig, option);
