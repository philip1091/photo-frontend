import './App.css';
import './index.css';
import { useState, useEffect, lazy, Suspense, useMemo } from "react";
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from "react-router-dom";
// import Home from "./pages/home";
// import Personal from "./pages/personal";
// import Commissioned from "./pages/commissioned";
import NavBar from "./components/NavBar";
import NavSize from "./components/NavSize";
import NavBottom from "./components/NavBottom";
import { loader } from "./loader";

const Home = lazy(() => import("./pages/home"));
const Personal = lazy(() => import("./pages/personal"));
const Commissioned = lazy(() => import("./pages/commissioned"));

const homeUrl = "/api/images";
const personalUrl = "your-personal-api-route";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
        loader: () => loader(homeUrl),
      },
      {
        path: "/personal",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Personal />
          </Suspense>
        ),
        // loader: () => loader(homeUrl)
      },
      {
        path: "/commissioned",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
             <Commissioned />
          </Suspense>
        ),
        // loader: () => loader(homeUrl)
      },
    ],
  },
]);

function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [size, setsize] = useState("90px");
  const [scrollY, setscrollY] = useState(0);
  const contextValue = useMemo(() => ({ size, setscrollY }), [size, setscrollY]);
  return (
    <>
      <NavBar currentPath={currentPath} scrollY={scrollY} size={size} display={(dis)=>{setsize(dis)}} />
      <NavSize scrollY={scrollY} size={size} display={(dis)=>{setsize(dis)}} />
      <NavBottom currentPath={currentPath} />
      <Outlet  context={contextValue} />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}


export default App;
