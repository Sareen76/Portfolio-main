import { Children, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> }
        // { path: "/something", element: <Point to somenthing at the outlet part in Layout.jsx /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;
