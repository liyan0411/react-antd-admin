import React, { Component, Fragment } from 'react'
import { Table, Pagination, Tag } from 'antd'
import FormQuery from '_c/FormQuery'
import defaultSettings from '@/config'
import moment from 'moment'
import BreadcrumbCustom from '_c/BreadCrumb'
class Tables extends Component {
  constructor(props) {
    super(props)
    this.setSeach = this.setSeach.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
    this.setChange = this.setChange.bind(this)
    this.setSizeChange = this.setSizeChange.bind(this)

    this.getData = this.getData.bind(this)
  }
  state = {
    expand: false,
    a: '',
    selecList: {
      status: [{ name: '启用', value: '1' }, { name: '停用', value: '0' }]
    },
    formlist: [
      { name: '姓名', keys: 'name', value: '', tips: '请输入姓名' },
      { name: '年龄', keys: 'age', value: '', tips: '请输入年龄' },
      {
        name: '出生日期',
        keys: 'timer',
        value: '',
        tips: '请选择日期',
        type: 'time'
      },
      { name: '性别', keys: 'sex', value: '', tips: '请输入性别' },
      {
        name: '状态',
        keys: 'status',
        value: '',
        tips: '请选择状态',
        type: 'select'
      },
      { name: '个人爱好', keys: 'interest', value: '', tips: '请输入个人爱好' }
    ],
    columns: [
      {
        title: '序号',
        dataIndex: 'key',
        key: 'key'
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, row, index) => (
          <span
            style={{ color: '#1890ff' }}
            className="pointer"
            onClick={() => this.jumpDetail(row)}
          >
            {row.name}
          </span>
        )
      },
      {
        title: 'Cash Assets',
        className: 'column-money',
        dataIndex: 'money',
        key: 'money'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green'
              if (tag === 'loser') {
                color = 'volcano'
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              )
            })}
          </span>
        )
      }
    ],
    currentPage: 1,
    pageSize: 10,
    data: [
      {
        key: '1',
        name: 'John Brown 1',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
      },
      {
        key: '2',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
        tags: ['loser']
      },
      {
        key: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
      },
      {
        key: '4',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
      },
      {
        key: '5',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
        tags: ['loser']
      },
      {
        key: '6',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
      },
      {
        key: '7',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
      },
      {
        key: '8',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
        tags: ['loser']
      },
      {
        key: '9',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
      },
      {
        key: '10',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
      },
      {
        key: '11',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
        tags: ['loser']
      },
      {
        key: '12',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
      },
      {
        key: '13',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
      },
      {
        key: '14',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
        tags: ['loser']
      },
      {
        key: '15',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
      },
      {
        key: '16',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
      },
      {
        key: '17',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
      },
      {
        key: '18',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
        tags: ['loser']
      },
      {
        key: '19',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
      }
    ]
  }

  jumpDetail = row => {
    // console.log(row)
    this.props.history.push({
      pathname: '/root/roleDetail',
      query: { id: row.key }
    })
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
  getData() {
    this.state.formlist.forEach(item => {
      if ('time' === item.type && item.value) {
        item.value = moment(item.value).format(defaultSettings.dateFormat)
      }
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
    // console.log(this.state.formlist)
  }
  setChange(page, pageSize) {
    this.setState({
      currentPage: page
    })
    // console.log(page, pageSize)
  }
  setSizeChange(current, size) {
    // console.log(current, size)
    this.setState({
      currentPage: current,
      pageSize: size
    })
  }
  componentDidMount() {
    // console.log('componentDidMount')
  }
  render() {
    const {
      formlist,
      selecList,
      columns,
      data,
      currentPage,
      pageSize
    } = this.state
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          'selectedRows: ',
          selectedRows
        )
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows)
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows)
      }
    }
    const getRow = () => {
      return data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    }
    const paths = [{ title: '表格', key: '' }]
    return (
      <div>
        <BreadcrumbCustom lists={paths} />
        <div className="view-bg">
          <FormQuery
            formlist={formlist}
            setSeach={this.setSeach}
            getData={this.getData}
            clearSearch={this.clearSearch}
            selecList={selecList}
          />

          <Fragment>
            <Table
              size="small"
              pagination={false}
              rowSelection={rowSelection}
              columns={columns}
              dataSource={getRow()}
              bordered
            />
            <div className="page-view">
              <Pagination
                size="small"
                total={data.length}
                pageSize={pageSize}
                current={currentPage}
                showTotal={total => `共${data.length}条`}
                pageSizeOptions={defaultSettings.pageSizeOptions}
                onShowSizeChange={this.setSizeChange}
                onChange={this.setChange}
                showSizeChanger
                showQuickJumper
              />
            </div>
          </Fragment>
        </div>
      </div>
    )
  }
}
export default Tables
