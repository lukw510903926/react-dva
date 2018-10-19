import React from 'react';
import {Route, Switch, Redirect} from 'dva/router';
import DocumentTitle from 'react-document-title';

/**
 * 生成一组路由
 * @param {*} app
 * @param {*} routesConfig
 */
export const createRoutes = (app, routesConfig, props) => {

  return (
    <Switch key={Math.random()}>
      {routesConfig(app).map(config => createRoute(app, () => config))}
      {createNotFound(props.notFound)}
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
  let routeProps = cloneProps({path, title, Page, notExist, otherProps});
  if (indexRoute) {
    return [
      <Redirect key={Math.random()} exact from={path} to={indexRoute}/>,
      <Route {...routeProps} />
    ];
  }
  return <Route {...routeProps} />;
};

export const createNotFound = (props) => {

  return (
    <Switch>
      <Route exact key={Math.random()} path={props.path} component={props.component}/>
      <Redirect key={Math.random()} from='*' to={props.path}/>
    </Switch>
  );
};

export const cloneProps = (config) => {

  let path = config.path;
  let title = config.title;
  let otherProps = config.otherProps;
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
