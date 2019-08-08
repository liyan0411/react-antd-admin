import React, { Component, Fragment } from 'react';
import { Table, Pagination } from 'antd';
import Filters from '_c/filter';

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
  constructor(props) {
    super(props)
    this.setSeach = this.setSeach.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }
  state = {
    expand: false,
    statusList: [{ name: '启用', value: 1 }, { name: '停用', value: 0 }],
    formlist: [
      { name: '姓名', keys: 'name', value: '', tips: '请输入姓名' },
      { name: '年龄', keys: 'age', value: '', tips: '请输入年龄' },
      { name: '性别', keys: 'sex', value: '', tips: '请输入性别' },
      {
        name: '状态',
        keys: 'status',
        value: '',
        tips: '请选择状态',
        type: 'select',
        sels: [{ name: '启用', value: 1 }, { name: '停用', value: 0 }]
      }
    ]
  }
  // 设置查询条件
  setSeach(key, val) {
    let arr = []
    this.state.formlist.forEach(item => {
      if (key === item.keys) {
        item.value = val
      }
      arr.push(item)
    })
    this.setState({
      formlist: arr
    })
  }
  // 清空查询条件
  clearSearch() {
    let arr = []
    this.state.formlist.forEach(item => {
      item.value = ''
      arr.push(item)
    })
    this.setState({
      formlist: arr
    })
  }
  componentDidMount() {
    console.log(this.state.formlist)
  }
  render() {
    return (
      <Fragment>
        <div className="view-bg">
          <div>
            <Filters
              formlist={this.state.formlist}
              setSeach={this.setSeach}
              clearSearch={this.clearSearch}
            />
          </div>
          <Table
            pagination={false}
            columns={columns}
            dataSource={data}
            bordered
            title={() => 'Header'}
            footer={() => 'Footer'}
          />
          <div className="page-view">
            <Pagination
              size="small"
              total={50}
              showSizeChanger
              showQuickJumper
            />
          </div>
        </div>
      </Fragment>
    )
  }
}
export default UserManage;
