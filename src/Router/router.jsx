import { createBrowserRouter } from "react-router";
import Home from "../components/Home/home";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Page not found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
