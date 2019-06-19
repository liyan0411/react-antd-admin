import React,{Component} from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "@/assets/styles/login.less";
import {loginApi} from "@/api/login/index.js";

class LoginView extends Component {
	constructor(props){
		super(props);
		this.state = {
      loading: false,
      formLayout: 'horizontal',
      labelObj:{
        username:"",
        password:""
      }
    }
	}
  handleSubmit = e => {
		e.preventDefault()
		
    this.props.form.validateFields((err, values) => {
			
      if (!err) {
				this.setState({
          loading: true
        });
				console.log('Received values of form: ', values);
				let reqData = {
          account: values.username,
          password: values.password
        }
				loginApi(reqData).then(r => {
          // 成功回调
					this.setState({
            loading: false
          });
					if (r.repCode === '0000') {
						let res = r.repData;
						console.log(res);
						this.props.history.push("/app/home")
					}
				}).catch(e=>{
          // 失败 异常回调
					this.setState({
            loading: false
          })
				})
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { formLayout, loading , labelObj } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 0 },
            wrapperCol: { span: 24 }
          }
        : null;
    return (
      <div className="login-view">
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
          layout={formLayout}
        >
          <h2 className="tcenter title">绩效考核系统</h2>
          <Form.Item label={labelObj.username} {...formItemLayout}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }]
            })(
              <Input
                prefix={<Icon type="user" className="icon-color" />}
                placeholder="用户名"
              />
            )}
          </Form.Item>
          <Form.Item label={labelObj.password} {...formItemLayout}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }]
            })(
              <Input
                prefix={<Icon type="lock" className="icon-color" />}
                type="password"
                placeholder="密码"
              />
            )}
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <span className="login-form-forgot pointer pull-right">
              找回密码
            </span>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: '100%' }}
              loading={loading}
            >
              登录
            </Button>
            Or <span className="pointer">去注册!</span>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const Login = Form.create({ name: 'normal_login' })(LoginView)
export default Login