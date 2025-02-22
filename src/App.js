import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";import Home from "./pages/home";
import { loader } from "./loader";

const homeUrl = "/api/images";
const personalUrl = "your-personal-api-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => loader(homeUrl)
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
