import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const container = {
  width : "98vw"
}


function Layout() {
  return (
    <div className="h-auto m-auto">
      <header className="header w-40 bg-gray-200 h-full fixed top-0 left-0">
        <Header />
      </header>
      <main className="main flex-1 ml-40 mr-40" style={{ width: `calc(100% - 320px)`}}>
          <Outlet />
      </main>
      <footer className="footer w-40 bg-gray-200 h-full fixed top-0 right-0">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
