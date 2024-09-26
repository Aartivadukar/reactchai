import React from "react";
import Sidebar from "./layout/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return(
   <div className="h-screen bg-black">
    <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <Sidebar/>
        <div className="grid grid-cols-4 h-full">
            <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
    {children}
    </div>
    </div>
    </div>
    </div>
  );
};

export default Layout;
