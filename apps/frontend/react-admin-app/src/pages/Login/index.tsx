import { Form, Input, Button, Checkbox, message } from 'antd'

export default function Login() {
  const onFinish = (values: any) => {
    console.log('Success:', values)
    // 模拟登录成功提示
    message.success(`欢迎回来，${values.username}!`)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-gray-100"
    >
      <div className="bg-white p-8 rounded shadow-md w-[400px]">
        <h2 className="text-2xl mb-6 text-center font-semibold">管理系统登录</h2>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item className="mt-6">
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
