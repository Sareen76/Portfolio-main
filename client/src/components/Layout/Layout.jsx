import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { DataContext } from "../../context/DataProvider";
import Loading from "../Loading/Loading.jsx";
import ShowFront from "../ShowFront.jsx";

function Layout() {
  // Initialize state from localStorage or default to true
  const [showFront, setShowFront] = useState(() => {
    const savedState = localStorage.getItem("showFront");
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  const { loading } = useContext(DataContext);

  // Update localStorage whenever showFront changes
  useEffect(() => {
    localStorage.setItem("showFront", JSON.stringify(showFront));
  }, [showFront]);

  return (
    <>
      <div className="matte fixed block h-[100vh] w-[100vw] brightness-90 contrast-90 blur-2 bg-slate-900/10 grayscale-[10%] z-50 pointer-events-none "></div>

      {loading ? (
        <Loading />
      ) : (
        <>
          {showFront ? (
            <ShowFront
              onClick={() => setShowFront(false)} // Close ShowFront and persist state
            />
          ) : (
            <div className="relative lg:flex sm:flex-col">
              {/* Sidebar Left */}
              <header className="lg:w-[12%] sm:w-full  lg:h-screen sm:h-auto fixed top-0 left-0 rounded-full z-[99999]">
                <Header />
              </header>

              {/* Main Content */}
              <main className="flex-grow lg:ml-[12%] lg:mr-[12%] lg:mt-0 sm:m-0 sm:mt-9">
                <Outlet />
              </main>

              {/* Sidebar Right */}
              <footer className="lg:w-[12%] sm:w-full  lg:h-screen sm:h-auto fixed bottom-0 right-0 z-[99999]">
                <Footer />
              </footer>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Layout;

