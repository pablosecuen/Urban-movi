import React from "react";

// components

import AdminNavbar from "../../components/Navbars/AdminNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";

import FooterAdmin from "../../components/Footers/FooterAdmin";
import HeaderStats from "../../components/Headers/HeaderStats";

export default function Admin({ children }: any) {
  return (
    <>
      <Sidebar />
      <div className="relative bg-blueGray-100 md:ml-64">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="-m-24 mx-auto w-full px-4 md:px-10">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
