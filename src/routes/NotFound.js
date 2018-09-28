import React from 'react';
import NotFound from '@/pages/404'
import {createRoute, createRoutes} from '@/utils/RouteUtil';

const routesConfig = (app) => ({
    key: 'notFound',
    path: '/home/404',
    title: '页面未找到',
    component: NotFound
  }
);

export default app => createRoute(app, routesConfig);
