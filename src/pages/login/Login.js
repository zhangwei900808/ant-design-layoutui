import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import "./login.scss";
import LOGIN from "../../assets/imgs/logo.png";

class Login extends Component {
  componentDidMount() {
    console.log("props=", this.props);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/");
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log("Received values of form: ", values);
    //   }
    // });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        {/* <img src={LOGIN} alt="" className="img-logo" /> */}
        <div>
          <div className="top-title">Ant Design UI</div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <span className="form-title" />
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("userName", {
                rules: [{ required: true, message: "请输入用户名!" }]
              })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="用户名" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入密码!" }]
              })(<Input.Password prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="密码" />)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Login);

export default WrappedNormalLoginForm;
