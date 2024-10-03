import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Typography } from 'antd';

import s from './style.module.css';

const { Text, Link } = Typography;

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export const Login: React.FC = () => {
  return (
    <Form
      className={s.root}
      layout="vertical"
      name="login"
      labelCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={() => { }}
      onFinishFailed={() => { }}
    >
      <Text strong>Login into admin panel</Text>

      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={s.button}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}