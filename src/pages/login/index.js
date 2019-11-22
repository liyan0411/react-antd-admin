import React, { Component, Fragment } from "react";
import { Form, Icon, Input, Button } from "antd";
// import { apiPost } from '@/utils/api'
import URL from "@/api/login";
import "./login.less";
// import {sSetObject} from "@/utils/index.js";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    loading: false,
    formLayout: "horizontal",
    labelObj: {
      username: "",
      password: "",
      phone: "",
      veri: ""
    },
    // 1 用户名密码  2 手机号验证码
    loginType: 1
  };
  componentDidMount() {}
  render() {
    const { getFieldDecorator } = this.props.form;
    const { formLayout, loading, labelObj, loginType } = this.state;
    const formItemLayout =
      formLayout === "horizontal"
        ? {
            labelCol: { span: 0 },
            wrapperCol: { span: 24 }
          }
        : null;
    const prefixSelector = getFieldDecorator("veri")(
      <Button type="primary" onClick={this.getVeri.bind(this)}>
        获取验证码
      </Button>
    );
    return (
      <div className="login-view">
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
          layout={formLayout}
        >
          <h2 className="tcenter title">React数据中台</h2>
          {loginType === 1 ? (
            <Fragment>
              <Form.Item label={labelObj.username} {...formItemLayout}>
                {getFieldDecorator("username", {
                  rules: [
                    { required: loginType === 1, message: "请输入用户名!" }
                  ]
                })(
                  <Input
                    prefix={<Icon type="user" className="icon-color" />}
                    placeholder="用户名"
                  />
                )}
              </Form.Item>
              <Form.Item label={labelObj.password} {...formItemLayout}>
                {getFieldDecorator("password", {
                  rules: [{ required: loginType === 1, message: "请输入密码!" }]
                })(
                  <Input
                    prefix={<Icon type="lock" className="icon-color" />}
                    type="password"
                    placeholder="密码"
                  />
                )}
              </Form.Item>
            </Fragment>
          ) : (
            <Fragment>
              <Form.Item label={labelObj.phone} {...formItemLayout}>
                {getFieldDecorator("phone", {
                  rules: [
                    { required: loginType === 2, message: "请输入手机号!" }
                  ]
                })(
                  <Input
                    prefix={<Icon type="user" className="icon-color" />}
                    placeholder="手机号"
                  />
                )}
              </Form.Item>
              <Form.Item label={labelObj.veri} {...formItemLayout}>
                {getFieldDecorator("veri", {
                  rules: [
                    { required: loginType === 2, message: "请输入验证码!" }
                  ]
                })(
                  <Input
                    prefix={<Icon type="lock" className="icon-color" />}
                    placeholder="验证码"
                    addonAfter={prefixSelector}
                  />
                )}
              </Form.Item>
            </Fragment>
          )}

          <Form.Item style={{ marginBottom: 0 }}>
            {loginType === 1 ? (
              <span className="login-form-forgot pointer pull-right">
                没有用户名？{" "}
                <span
                  className="line"
                  onClick={this.loginTypeFun.bind(this, 2)}
                >
                  手机号登录
                </span>
              </span>
            ) : (
              <span className="login-form-forgot pointer pull-right">
                已有账户？{" "}
                <span
                  className="line"
                  onClick={this.loginTypeFun.bind(this, 1)}
                >
                  用户名登录
                </span>
              </span>
            )}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
              loading={loading}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
  /**
   * 获取短信验证码
   */
  getVeri(){
    console.log("获取验证码")
  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          loading: true
        });
        console.log(URL);
        console.log("Received values of form: ", values);
        // let reqData = {
        //   account: values.username,
        //   password: values.password
        // }
        this.props.history.push("/root/home");
        // apiPost(URL.LOGIN, reqData)
        //   .then(r => {
        //     // 成功回调
        //     this.setState({
        //       loading: false
        //     })
        //     if (r.repCode === '0000') {
        //       let res = r.repData
        //       sSetObject('isLogin', r.token)
        //       console.log(res)
        //       this.props.history.push("/app/home");
        //     }
        //   })
        //   .catch(e => {
        //     // 失败 异常回调
        //     this.setState({
        //       loading: false
        //     })
        //   })
      }
    });
  }
  loginTypeFun(r) {
    this.setState({
      loginType: r
    });
  }
}

const Login = Form.create({ name: "normal_login" })(LoginView);
export default Login;
