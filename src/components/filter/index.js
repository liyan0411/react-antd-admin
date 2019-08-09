/**
 * @name:查询 条件组件
 * @props接收字段：
 * 1.formlist(数组) -[]
 * {
 *  name:label,
 *  keys:请求参数,
 *  value:保存输入框值,
 *  tips:placeholder值,
 *  type:类型（下拉框时传入select，默认不传为input）
 * }
 * 2.statusList 如果有下拉时 下拉框数据{}
 * 使用formlist中对应下拉的keys 作为key值
 *
 */
import React,{Component} from "react";
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd'
import PropTypes from 'prop-types'
import "./index.less"
import moment from 'moment'
const { Option } = Select
const dateFormat = 'YYYY/MM/DD';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
}
class Filters extends Component {
  constructor(props) {
    super(props)
    this.handleReset = this.handleReset.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  getFormItem() {
    const { formlist, selecList } = this.props
    const children = []
    for (let i = 0; i < formlist.length; i++) {
      children.push(
        <Col xs={12} sm={12} md={12} lg={8} xl={6} key={i}>
          <Form.Item label={formlist[i].name}>
            {formlist[i].type === 'select' ? (
              <Select
                showSearch
                placeholder={formlist[i].tips}
                value={formlist[i].value?formlist[i].value:undefined}
                optionFilterProp="children"
                onChange={this.handleChange.bind(this, formlist[i].keys)}
              >
                {selecList[formlist[i].keys].map(item => (
                  <Option key={item.value} value={item.value}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            ) : formlist[i].type === 'time' ? (
              <DatePicker
                value={
                  formlist[i].value
                    ? moment(formlist[i].value, dateFormat)
                    : null
                }
                format={dateFormat}
                placeholder={formlist[i].tips}
                onChange={this.handleChange.bind(this, formlist[i].keys)}
              />
            ) : (
              <Input
                value={formlist[i].value}
                onChange={this.handleInput.bind(this, formlist[i].keys)}
                placeholder={formlist[i].tips}
              />
            )}
          </Form.Item>
        </Col>
      )
    }
    return children
  }

  handleChange(key, val) {
    this.props.setSeach(key, val)
  }

  handleInput(key, e) {
    this.props.setSeach(key, e.target.value)
  }
  handleSearch() {
    this.props.getData()
    // e.preventDefault()
    // this.props.form.validateFields((err, values) => {
    //   console.log('Received values of form: ', values)
    // })
  }

  handleReset() {
    this.props.clearSearch()
    // this.props.form.resetFields()
  }

  render() {
    return (
      <Form
        className="ant-advanced-search-form"
        labelAlign="left"
        {...formItemLayout}
      >
        <Row>{this.getFormItem()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" onClick={this.handleSearch}>
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}
// 指定props 的类型
Filters.propTypes = {
  formlist: PropTypes.array.isRequired,
  selecList: PropTypes.object,
  handleChange: PropTypes.func,
  handleInput: PropTypes.func,
  handleSearch: PropTypes.func,
  handleReset: PropTypes.func
}
// 指定 props 的默认值
Filters.defaultProps = {
  formlist: [],
  selecList:{}
}
export default Filters;
