"use client";
import { useEffect, useState } from "react";
// import ArticlesContainer from "../../_components/ArticlesContainer";
// import { Input } from "postcss";
import { Button, Card, Form, Input, Table, Modal } from "antd";
import { SelectOutlined, PlusOutlined } from "@ant-design/icons";
import { list } from "postcss";

function articlesPage() {
  const [articleList, setArticleList] = useState([]);
  const [open, setOpen] = useState(false);

  const [myform] = Form.useForm();

  useEffect(() => {
    fetch("/api/admin/articles", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setArticleList(res.data));
  }, []);
  return (
    <Card
      title="文章管理"
      extra={
        <>
          <Button
            icon={<PlusOutlined />}
            type="primary"
            onClick={(v) => {
              setOpen(true);
            }}
          />
        </>
      }
    >
      <Form
        layout="inline"
        onFinish={(v) => {
          console.log(v);
        }}
      >
        <Form.Item label="标题" name="title">
          <Input placeholder="请输入关键词" />
        </Form.Item>

        <Form.Item>
          <Button icon={<SelectOutlined />} type="primary" htmlType="submit" />
        </Form.Item>
      </Form>
      <Table
        dataSource={articleList}
        rowKey="id"
        style={{ marginTop: "8px" }}
        columns={[
          { title: "序号", width: 80 },
          { title: "标题" },
          { title: "内容" },
          { title: "创建时间" },
          { title: "操作" },
        ]}
      ></Table>
      <Modal
        title="编辑"
        open={open}
        onCancel={(v) => {
          setOpen(false);
        }}
        onOk={(v) => {
          myform.submit();
        }}
      >
        <Form
          layout="vertical"
          form={myform}
          onFinish={(v) => {
            setOpen(false);
            console.log(v);
            fetch("/api/admin/articles", {
              method: "POST",
              body: JSON.stringify(v),
            });
          }}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: "标题不能为空" }]}
          >
            <Input placeholder="请输入标题" />
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: "内容不能为空" }]}
          >
            <Input placeholder="请输入内容" />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}

export default articlesPage;
