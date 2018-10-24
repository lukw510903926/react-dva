import React from 'react';
import {Row, Col} from 'antd'

export default class NotFound extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    document.title = "没有权限"
  }
  render() {
    return (
      <Row>
        <Col align="center"><h2>没有权限</h2></Col>
      </Row>
    )
  }
}

