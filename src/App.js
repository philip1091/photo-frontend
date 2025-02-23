import './App.css';
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Personal from "./pages/personal";
import Commissioned from "./pages/commissioned";
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom";import Home from "./pages/home";
>>>>>>> d4844c45b40ab3c840d59d32592ac7f9f3df6f44
import { loader } from "./loader";

const homeUrl = "/api/images";
const personalUrl = "your-personal-api-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => loader(homeUrl)
  },
<<<<<<< HEAD
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
=======
>>>>>>> d4844c45b40ab3c840d59d32592ac7f9f3df6f44
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
