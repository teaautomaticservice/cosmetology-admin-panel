import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Typography } from 'antd';

import { useLoginServices } from './loginServices';
import { LoginForm } from './type';

import s from './style.module.css';

const { Text, Link } = Typography;

export const Login: React.FC = () => {
  const { isAuthLoading, submit } = useLoginServices();

  return (
    <Form
      className={s.root}
      layout="vertical"
      name="login"
      labelCol={{ span: 8 }}
      autoComplete="off"
      onFinish={submit}
      disabled={isAuthLoading}
    >
      <Text strong>Login into admin panel</Text>

      <Form.Item<LoginForm>
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<LoginForm>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<LoginForm>
        name="isRemember"
        valuePropName="checked"
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={s.button} loading={isAuthLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}