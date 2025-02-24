import './App.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Personal from "./pages/personal";
import Commissioned from "./pages/commissioned";
import { loader } from "./loader";

const homeUrl = "/api/images";
const personalUrl = "your-personal-api-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => loader(homeUrl)
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
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
