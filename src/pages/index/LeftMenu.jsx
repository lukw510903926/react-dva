import { Menu, Icon } from "antd";
import React from "react";
import leftMenu from "@/config/menu";
import { Link, withRouter } from "react-router-dom";

class LeftMenu extends React.Component {

  constructor(props) {
    super(props);
    let submenuKeys = leftMenu.map(entity => entity.key);
    let openKeys = this.initOpenKeys(this.props.location.pathname, submenuKeys);
    this.state = {
      openKeys,
      submenuKeys
    };
  }

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => !this.state.openKeys.includes(key));
    if (!this.state.submenuKeys.includes(latestOpenKey)) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  getMenuItem() {

    let menu = [];
    leftMenu.forEach(entity => {
      if (entity.children) {
        menu.push(<Menu.SubMenu key={entity.key} title={<span><Icon type={entity.type}/>{entity.title}</span>}>
          {
            entity.children.map(item => item.isMenu ?
              <Menu.Item key={item.key}><Link to={item.path}>{item.title}</Link></Menu.Item> : null)
          }
        </Menu.SubMenu>);
      } else if (entity.isMenu) {
        menu.push(<Menu.Item key={entity.key}><Link to={entity.path}>{entity.title}</Link></Menu.Item>);
      }
    });
    return menu;
  }

  initOpenKeys(selectedKey, submenuKeys) {
    let openKeys = [];
    submenuKeys.forEach(key => {
      if (selectedKey.indexOf(key) > 0) {
        openKeys.push(key);
      }
    });
    return openKeys;
  }

  render() {

    return (
      <Menu mode="inline" theme="dark" selectedKeys={[this.props.location.pathname]} openKeys={this.state.openKeys}
           style={{color:'white'}} onOpenChange={this.onOpenChange}>
        {this.getMenuItem()}
      </Menu>
    );
  }
}

export default withRouter(LeftMenu);
