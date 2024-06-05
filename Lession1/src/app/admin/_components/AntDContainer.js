"use client";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";
import React from "react";
import { ConfigProvider} from "antd";

function AntDContainer({children}){
    return (
        <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
    )
}

export default AntDContainer