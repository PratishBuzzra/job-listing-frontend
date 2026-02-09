import React from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 bg-gray-50 ">
        {children}
      </main>
    </div>
  );
};

export default Layout;
