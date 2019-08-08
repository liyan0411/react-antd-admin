import React,{Component} from "react";
import { Form, Row, Col, Input, Button, Select } from 'antd'
import "./index.less";
const { Option } = Select

class Filters extends Component {
  constructor(props) {
    super(props)
    this.handleReset = this.handleReset.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  getFormItem() {
    const list = this.props.formlist
    const children = []
    for (let i = 0; i < list.length; i++) {
      children.push(
        <Col xs={12} sm={12} md={12} lg={8} xl={6} key={i}>
          <Form.Item label={list[i].name}>
            {list[i].type ? (
              <Select
                showSearch
                placeholder={list[i].tips}
                optionFilterProp="children"
                onChange={this.handleChange.bind(this, list[i].keys)}
              >
                {list[i].sels.map(item => (
                  <Option key={item.value} value={item.value}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            ) : (
              <Input
                value={list[i].value}
                onChange={this.handleInput.bind(this, list[i].keys)}
                placeholder={list[i].tips}
              />
            )}
          </Form.Item>
        </Col>
      )
    }
    return children
  }

  handleChange(key,val) {
    this.props.setSeach(key,val)
  }

  handleInput(key, e) {
    this.props.setSeach(key, e.target.value)
  }

  handleSearch() {
    console.log(this.props.formlist)
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
      <Form className="ant-advanced-search-form">
        {/* <Row gutter={24}>{this.getFields()}</Row> */}
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
export default Filters;
