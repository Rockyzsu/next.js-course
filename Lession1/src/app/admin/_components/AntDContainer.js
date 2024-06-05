"use client";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";
import React, { useState } from "react";
import { ConfigProvider, DatePicker, message } from "antd";

function AntDContainer({children}){
    return (
        <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
    )
}

export default AntDContainer