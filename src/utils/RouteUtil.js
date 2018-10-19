import React from 'react';
import {Route, Switch, Redirect} from 'dva/router';
import DocumentTitle from 'react-document-title';

// 路由映射表
window.dva_router_pathMap = {};
/**
 * 生成一组路由
 * @param {*} app
 * @param {*} routesConfig
 */
export const createRoutes = (app,NotExist,routesConfig) => {

  return (
    <Switch key={Math.random()}>
      {
        routesConfig(app).map(config => createRoute(app, () => config))
      }
      <Route exact path={NotExist.path} component={NotExist.component}/>
      <Redirect from='*' to={NotExist.path}/>
    </Switch>
  );

};

/**
 * 生成单个路由
 * @param {*} app
 * @param {*} routesConfig
 */
export const createRoute = (app, routesConfig) => {
  const {
    notExist,
    component: Page,
    path,
    indexRoute,
    title,
    ...otherProps
  } = routesConfig(app);
  let routeProps = cloneProps({path, title, Page,notExist, otherProps});
  if (indexRoute) {
    return [
      <Redirect key={Math.random()} exact from={path} to={indexRoute}/>,
      <Route {...routeProps} />
    ];
  }
  return <Route {...routeProps} />;
};

export const createNotFound = (app, routesConfig) => {
  const {
    notExist,
    component: Page,
    path,
    title,
    ...otherProps
  } = routesConfig(app);
  let routeProps = cloneProps({path, title, Page,notExist, otherProps});
  return [
    <Redirect key={Math.random()} exact from='*' to={path}/>,
    <Route {...routeProps} />
  ];
};

export const cloneProps = (config) => {

  let path = config.path;
  let title = config.title;
  let otherProps = config.otherProps;
  if(config.notExist){
    window.dva_router_pathMap['_not_exist_path'] = path;
  }
  return (
    {
      key: Math.random(),
      path,
      render: props => (
        <DocumentTitle title={title}>
          <config.Page key={path} routerData={otherProps} {...props} />
        </DocumentTitle>
      )
    }
  );
};
