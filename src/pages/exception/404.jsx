import React from 'react';
import {Row, Col} from 'antd'
import image from '@/assets/image/404.png'

export default class NotFound extends React.Component {
  render() {
    return (
      <Row>
        <Col align="center"><img alt="图片未找到" src={image}/></Col>
      </Row>
    )
  }
}

