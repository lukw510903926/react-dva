import React from "react";
import {Table} from "antd";
import {connect} from 'dva';
import Product from './Product'

class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'productList/init',// model下 effects 中 namespace/方法名 effects中的方法和reducer中的方法名不可重复
      payload: {name: Date.now(), code: Date.now(), price: Math.floor(100)}
    });
  }

  render() {
    const columns = [
      {title: "产品名称", dataIndex: "name", align: "center"},
      {title: "产品编码", dataIndex: "code", align: "center"},
      {title: "价格", dataIndex: "price", align: "center"}
    ];

    return (
      <div>
        <div style={{padding: '10px'}}>
          <Product/>
        </div>
        <Table bordered={true} rowKey={record => record.name} columns={columns} dataSource={this.props.productList.list}/>
      </div>
    )
  }
}

export default connect(state => state)(ProductList)
