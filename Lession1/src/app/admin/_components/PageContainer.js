"use client";
import { Card, Form, Button, Input } from "antd";

function PageContainer({ children }) {
  return (
    <div className="container-fluid">
    <Card>  {children} </Card>
    </div>
  )
}

export default PageContainer