import React from 'react'
import {Form, Input, Button} from 'antd'
import {connect} from 'dva'

class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  initForm = () => {
    this.setState({
      name: Date.now(),
      code: Date.now(),
      price: Math.floor(Math.random() * 100)
    })
  };

  login = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((error, value) => {
      if (!error) {
        this.props.dispatch({
          type: 'productList/addProduct',
          payload: value
        });
        this.initForm()
      }
    })
  };

  componentDidMount() {
    this.initForm();
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.login}>
        <Form.Item label='产品名称'>
          {
            getFieldDecorator('name', {initialValue: this.state.name})(<Input placeholder="产品名称"/>)
          }
        </Form.Item>
        <Form.Item label='产品编码'>
          {
            getFieldDecorator('code', {initialValue: this.state.code})(<Input placeholder="产品编码"/>)
          }
        </Form.Item>
        <Form.Item label='价格'>
          {
            getFieldDecorator('price', {initialValue: this.state.price})(<Input placeholder="价格"/>)
          }
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">添加</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default connect(state => state)(Form.create()(Product))
