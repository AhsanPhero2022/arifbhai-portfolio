import { createBrowserRouter } from "react-router";
import Home from "../components/Home/home";
import App from "../App";
import Faq from "../components/Pages/Faq";
import AboutUs from "../components/Pages/AboutUs";
import AllServices from "../components/Pages/AllServices";
import ContactUs from "../components/Pages/ContactUs";

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
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/allServices",
        element: <AllServices />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
    ],
  },
]);
