import dva from 'dva';
import React from 'react';
import "antd/dist/antd.css";
import './index.css';
import {LocaleProvider} from 'antd';
import {Router} from 'dva/router';
import createRoutes from '@/routes/index';
import ProductList from './models/ProductList'
import logger from 'redux-logger'

const app = dva({
  onAction: logger,// onAction支持数组，可同时传入多个中间件
  onError(err, dispatch) {
    console.error('err', err, 'dispatch:', dispatch);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(ProductList);
// 4. Router
// app.router(ReactRouter);
// -> 初始化路由
app.router(({history, app}) => (
  <LocaleProvider>
    <Router history={history}>
      {createRoutes(app)}
    </Router>
  </LocaleProvider>
));

app.start('#root');
