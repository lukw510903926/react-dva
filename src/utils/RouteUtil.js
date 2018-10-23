import React from 'react';
import {Route, Switch, Redirect} from 'dva/router';
import DocumentTitle from 'react-document-title';

/**
 * 生成一组路由
 * @param {*} app
 * @param {*} routesConfig
 * @param exception
 */
export const createRoutes = (routesConfig, option = {}) => {

  return (
    <Switch key={Math.random()}>
      {routesConfig(option).map(config => createRoute(option, () => config))}
      {createException(option.exception)}
    </Switch>
  );

};

/**
 * 生成单个路由
 * @param {*} app
 * @param {*} routesConfig
 */
export const createRoute = (option, routesConfig) => {

  let list = [];
  const {component: Page, path, indexRoute, title, ...otherProps} = routesConfig(option);
  let routeProps = cloneProps({path, title, Page, otherProps});
  if (indexRoute) {
    list.push(<Redirect key={Math.random()} exact from={path} to={indexRoute}/>);
  }

  if (otherProps.auth) {
    list.push(<Route path={path} component={props => <Redirect {...props} to={{
      pathname: "/home/403", state: {from: props.location}
    }}/>}/>)
  } else {
    list.push(<Route {...routeProps} />);
  }
  return list;
};

export const createException = (exception) => {

  let notExistPath;
  let list = exception.map(props => {
    if (props.type === 404) {
      notExistPath = props.path;
    }
    return <Route exact key={Math.random()} path={props.path} component={props.component}/>;
  });
  //放在路由列表的最后面
  if (notExistPath) {
    list.push(<Redirect key={Math.random()} from='*' to={notExistPath}/>);
  }
  return list;
};

export const cloneProps = (config) => {

  let path = config.path;
  let title = config.title;
  let otherProps = config.otherProps;
  return (
    {
      key: Math.random(),
      path,
      title,
      ...otherProps,
      render: props => (
        <DocumentTitle title={title}>
          <config.Page key={path} routerData={otherProps} {...props} />
        </DocumentTitle>
      )
    }
  );
};
