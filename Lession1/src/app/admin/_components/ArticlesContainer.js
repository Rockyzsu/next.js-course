"use client";
import { Card, Form, Button, Input } from "antd";

function ArticlesContainer({ children }) {
  return (
    <div className="container-fluid">
    <Card>  {children} </Card>
    </div>
  )
}

export default ArticlesContainer