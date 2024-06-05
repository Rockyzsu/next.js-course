"use client";
import { Card, Form, Button, Input } from "antd";
import { useRouter } from "next/navigation";
function LoginPage() {
  const nav = useRouter();
  return (
    <div className="login-form pt-20">
      <Card title="Next.js 全栈后台管理系统" className="w-4/5 mx-auto mt-20">
        <Form
          labelCol={{ span: 3 }}
          onFinish={async (v) => {
            // console.log(v);
            const res = await fetch("/api/admin/login", {
              method: "POST",
              body: JSON.stringify(v),
            }).then((res) => res.json());
            console.log(res);
            console.log("===========");
            nav.push("/admin/dashboard");
          }}
        >
          <Form.Item label="Username" name="username">
            <Input placeholder="Please input your username" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Please input your password" />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default LoginPage;
