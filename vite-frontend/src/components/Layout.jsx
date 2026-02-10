import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaChevronRight } from "react-icons/fa";;
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex min-h-screen">
      <button
  onClick={() => setOpen(true)}
  className="md:hidden fixed left-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-r-lg z-50"
>
  <FaChevronRight size={22} />
</button>

      
      <Sidebar open={open} setOpen={setOpen}/>
      <main className="flex-1 bg-gray-50 ">
        {children}
      </main>
    </div>
  );
};

export default Layout;
