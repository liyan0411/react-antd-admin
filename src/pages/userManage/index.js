import React, { Component, Fragment } from 'react';
import { Row, Col,Input ,Table, Pagination } from 'antd'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park'
  }
]

class UserManage extends Component {
  state = {
    expand: false
  }
  render() {
    return (
      <Fragment>
        <div className="view-bg">
          <div>
            <Row>
              <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                <Input placeholder="Basic usage" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                <Input placeholder="Basic usage" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                <Input placeholder="Basic usage" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                <Input placeholder="Basic usage" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                <Input placeholder="Basic usage" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                <Input placeholder="Basic usage" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                <Input placeholder="Basic usage" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                <Input placeholder="Basic usage" />
              </Col>
            </Row>
          </div>
          <Table
            pagination={false}
            columns={columns}
            dataSource={data}
            bordered
            title={() => 'Header'}
            footer={() => 'Footer'}
          />
          <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        </div>
      </Fragment>
    )
  }
}
export default UserManage;
