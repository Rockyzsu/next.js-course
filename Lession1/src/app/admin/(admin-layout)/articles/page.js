"use client";
import { useEffect, useState } from "react";
import { Button, Card, Form, Input, Table, Modal, Space, Popconfirm } from "antd";
import { SelectOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

function articlesPage() {
  const [articleList, setArticleList] = useState([]);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState({});
  const [currentId, setCurrentId] = useState("");
  const [myform] = Form.useForm();
  const [total,setTotal] = useState(0)
  
  console.log('inti form');

  useEffect(() => {
    fetch("/api/admin/articles", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {setArticleList(res.data);setTotal(res.total)}); 
  }, [query]);

  useEffect(() => {
    if (!open) {
      setCurrentId("");
    }
  }, [open]);

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
              console.log('new article');
              myform.setFieldsValue({title:'',content:''})
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
          {
            title: "序号",
            width: 80,
            render(v, r, i) {
              return i + 1;
            },
          },
          { title: "标题", dataIndex: "title" },
          { title: "内容", dataIndex: "content" },

          {
            title: "操作",
            render(v, r) {
              return (
                <Space>
                  <Button
                    size="small"
                    icon={<EditOutlined />}
                    type="primary"
                    onClick={() => {
                      setOpen(true);
                      console.log("-----");
                      console.log(r);
                      console.log(r.id);
                      setCurrentId(r.id);
                      myform.setFieldsValue(r);

                    }}
                  />

                  <Popconfirm
                    onConfirm={async() => {
                      console.log(r.id);
                      const result = await fetch("/api/admin/articles/update/" + r.id, { method: "DELETE" }).then((res) => res.json());
                      console.log(result);
                      setQuery({});
                    }}
                    title="确认是否删除"
                  >
                    <Button size="small" icon={<DeleteOutlined />} type="primary" danger />
                  </Popconfirm>
                </Space>
              );
            },
          },
        ]}
      ></Table>
      <Modal
        title="编辑"
        open={open}
        destroyOnClose={false}
        maskClosable={false}
        onCancel={(v) => {
          setOpen(false);
        }}
        onOk={(v) => {
          myform.submit();
        }}
      >
        <Form
          preserve={false}
          layout="vertical"
          form={myform}
          onFinish={async (v) => {
            setOpen(false);
            console.log(v);
            if (currentId) {
              let post_data = { ...v, id: currentId };
              await fetch("/api/admin/articles/update", {
                method: "POST",
                body: JSON.stringify(post_data),
              }).then((res) => {});
            } else {
              await fetch("/api/admin/articles", {
                method: "POST",
                body: JSON.stringify(v),
              }).then((res) => {});
            }
            setOpen(false);
            setQuery({});
          }}
        >
          <Form.Item label="标题" name="title" rules={[{ required: true, message: "标题不能为空" }]}>
            <Input placeholder="请输入标题" />
          </Form.Item>
          <Form.Item label="内容" name="content" rules={[{ required: true, message: "内容不能为空" }]}>
            <Input placeholder="请输入内容" />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}

export default articlesPage;
