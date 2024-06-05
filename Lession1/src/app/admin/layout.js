import React from "react";

import AntdContainer from "./_components/AntDContainer";
function AdminLayout({ children }) {
  return (
    <div className="admin-main">
      <AntdContainer>{children}</AntdContainer>
    </div>
  );
}

export default AdminLayout;