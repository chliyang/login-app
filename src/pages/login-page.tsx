import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { defaultValidateMessages } from "../constants/validate-constants";
import styles from "./login-page.module.scss";

const LoginPage = () => {
  const handleSubmit = () => {
    alert("已登陆");
  };

  return (
    <div className={styles.login}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        validateMessages={defaultValidateMessages}
      >
        <Form.Item
          name="用户名"
          rules={[
            { required: true, message: "请输入用户名!" },
            { type: "string", min: 6 }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="请输入用户名"
          />
        </Form.Item>
        <Form.Item
          name="密码"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <a className={styles.forgot} href="">
            忘记密码？
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
          或者 <a href="">立即注册!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
