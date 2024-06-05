"use client";
/*
控制admin路由下的布局，后台布局
*/


import React from "react";

import AdminContainer from "../_components/AdminContainer";

function AdminLayout({ children }) {

  return (
       <AdminContainer>{children}</AdminContainer>
  );
}

export default AdminLayout;
