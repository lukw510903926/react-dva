import React from 'react';
import Product from '@/pages/product/Product'
import ProductList from '@/pages/product/ProductList'
import {createRoute, createRoutes} from '@/utils/RouteUtil';

const routesConfig = (app) => ([{
    path: '/home/product/list',
    title: '产品列表',
    component: ProductList
  }, {
    path: '/home/product/add',
    title: '产品添加',
    component: Product
  }]
);

export default app => createRoutes(app, routesConfig);