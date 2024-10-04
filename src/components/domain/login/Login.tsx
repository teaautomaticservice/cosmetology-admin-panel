import { AuthorizationService } from '@typings/api/generated';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Typography } from 'antd';

import s from './style.module.css';

const { Text, Link } = Typography;

type LoginForm = {
  email: string;
  password: string;
  isRemember: boolean;
};

export const Login: React.FC = () => {
  const submit = (form: LoginForm) => {
    console.log(form)
    AuthorizationService.authorizationControllerLogin({ requestBody: form });
  };

  return (
    <Form
      className={s.root}
      layout="vertical"
      name="login"
      labelCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={submit}
      onFinishFailed={() => { }}
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
        <Button type="primary" htmlType="submit" className={s.button}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}