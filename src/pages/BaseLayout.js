import React from 'react';
import {connect,} from 'dva';
import {Layout} from "antd";
import LeftMenu from "@/pages/index/LeftMenu";
import {Row, Col} from "antd";

class BaseLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPath: '',
      minHeight: props.height || -1,
      width: props.width || -1
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'login/login',
      payload: {}
    });
    this.updateSize();
    window.addEventListener("resize", () => this.updateSize());
  }

  componentWillUnmount() {

    window.removeEventListener("resize", () => this.updateSize());
  }

  updateSize() {
    try {
      let minHeight = document.body.clientHeight - 64;
      let width = document.body.clientWidth;
      this.setState({
        width,
        minHeight
      });
    } catch (ignore) {
      console.error(ignore);
    }
  }

  render() {
    const {routerData} = this.props;
    const childRoutes = routerData.childRoutes;
    let info = {paddingRight: 20, textAlign: "right"};
    return (
      <Layout>
        <Layout.Header>
          <Row style={{fontSize: 18, color: 'white'}}>
            <Col span={20}> 后台管理系统 </Col>
            <Col style={info} span={4}> {this.props.login.loginUser.name}</Col>
          </Row>
        </Layout.Header>
        <Layout>
          <Layout.Sider style={{minHeight: this.state.minHeight}}>
            <LeftMenu/>
          </Layout.Sider>
          <Layout>
            <Layout.Content span={24}>
              {childRoutes}
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect(state => state)(BaseLayout);
