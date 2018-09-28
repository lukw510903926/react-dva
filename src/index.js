import dva from 'dva';
import React from 'react';
import "antd/dist/antd.css";
import './index.css';
import {LocaleProvider} from 'antd';
import {Router, Redirect,Switch} from 'dva/router';
import createRoutes from '@/routes/index';

const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

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

// 5. Start
app.start('#root');
