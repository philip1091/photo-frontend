import './App.css';
import './index.css';
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Personal from "./pages/personal";
import Commissioned from "./pages/commissioned";
import NavBar from "./components/NavBar";
import { loader } from "./loader";

const homeUrl = "/api/images";
const personalUrl = "your-personal-api-route";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => loader(homeUrl),
      },
      {
        path: "/personal",
        element: <Personal />,
        // loader: () => loader(homeUrl)
      },
      {
        path: "/commissioned",
        element: <Commissioned />,
        // loader: () => loader(homeUrl)
      },
    ],
  },
]);

function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [size, setsize] = useState("medium")
  return (
    <>
      <NavBar currentPath={currentPath} size={size} display={(dis)=>{setsize(dis)}} />
      <Outlet context={{ size }} />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}


export default App;
