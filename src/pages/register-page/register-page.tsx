import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { defaultValidateMessages } from "../../constants/validate-constants";
import http from "../../utils/http/request";
import styles from "./register-page.module.scss";

const RegisterPage = (props: any) => {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [loading, setLoading] = useState<string>();
  const history = useHistory();

  const formItemLayout = {
    labelCol: {
      xs: { span: 4 },
      sm: { span: 6 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };

  const handleRegister = () => {
    const { registerFail } = props;
    setLoading("正在注册...");
    const data = { username, email, password, phoneNumber };
    http("post", "/register", {}, data)
      .then(() => {
        setLoading("注册成功, 为您自动跳转登录页面");
      })
      .then(() => {
        history.push("/login");
        window.location.reload();
      })
      .catch((e) => {
        registerFail(e);
        setLoading("注册失败, " + e);
      });
  };

  return (
    <div className={styles.register}>
      <Form
        {...formItemLayout}
        name="normal_register"
        className="register-form"
        initialValues={{ remember: true }}
        validateMessages={defaultValidateMessages}
        onFinish={handleRegister}
      >
        <h1 className={styles.title}>注册信息填写</h1>
        <Form.Item
          name="name"
          label="用户名"
          rules={[
            {
              required: true,
              message: "请设置您的用户名!",
              whitespace: true
            }
          ]}
        >
          <Input
            placeholder="请设置您的用户名"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            {
              type: "email",
              message: "请输入正确的邮箱地址！"
            },
            {
              required: true,
              message: "请输入邮箱地址！"
            }
          ]}
        >
          <Input
            placeholder="请输入邮箱地址"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: "请设置您的密码"
            }
          ]}
          hasFeedback
        >
          <Input
            type="password"
            placeholder="请设置您的密码"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "请二次确认您的密码"
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次输入的密码不一致!"));
              }
            })
          ]}
        >
          <Input type="password" placeholder="请二次确认您的密码" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="电话号码"
          rules={[
            {
              required: true,
              message: "请输入您的电话号码"
            },
            {
              max: 11,
              message: " 请输入正确的电话号码"
            }
          ]}
        >
          <Input
            placeholder="请输入您的电话号码"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            立即注册
          </Button>
        </Form.Item>
        <div>{loading}</div>
      </Form>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    registerFail: (msg: any) =>
      dispatch({ type: "REGISTER_FAIL", payload: msg })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

