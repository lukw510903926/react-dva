import React from 'react'
import {Form, Input, Row, Button} from 'antd'

class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  login = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((error, value) => {
      if (!error) {
        console.info(value);
        this.props.history.push('/product/list');
      }
    })
  };

  render() {
    let fieldDecorator = this.props.form.getFieldDecorator;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    return <div>
      <Form onSubmit={this.login}>
        <Form.Item  {...formItemLayout} label='产品名称'>
          {
            fieldDecorator('name')(<Input/>)
          }
        </Form.Item>
        <Form.Item  {...formItemLayout} label='产品编码'>
          {
            fieldDecorator('code')(<Input/>)
          }
        </Form.Item>
        <Row justify='center' type='flex'>
          <Button type='primary' htmlType='submit'>保存</Button>
        </Row>
      </Form>
    </div>
  }
}

export default Form.create()(Product)
