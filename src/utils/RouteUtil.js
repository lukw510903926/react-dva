import React from 'react';
import assign from 'object-assign';
import {Route, Switch, Redirect} from 'dva/router';
import DocumentTitle from 'react-document-title';

/**
 * 生成一组路由
 * @param {*} app
 * @param {*} routesConfig
 */
export const createRoutes = (app, routesConfig) => {

  return (
    <Switch key={Math.random()}>
      {routesConfig(app).map(config => createRoute(app, () => config))}
    </Switch>
  );

};
// 路由映射表
window.dva_router_pathMap = {};

/**
 * 生成单个路由
 * @param {*} app
 * @param {*} routesConfig
 */
export const createRoute = (app, routesConfig) => {
  const {
    component: Page,
    path,
    indexRoute,
    title,
    ...otherProps
  } = routesConfig(app);
  if (path && path !== '/') {
    window.dva_router_pathMap[path] = {path, title, ...otherProps};
  }
  const routeProps = assign(
    {
      key: path || Math.random(),
      render: props => (
        <DocumentTitle title={title}>
          <Page key={path} routerData={otherProps} {...props} />
        </DocumentTitle>
      )
    },
    path && {
      path: path
    }
  );
  if (indexRoute) {
    return [
      <Redirect key={path + '_redirect'} exact from={path} to={indexRoute}/>,
      <Route {...routeProps} />
    ];
  }
  return <Route {...routeProps} />;
};
