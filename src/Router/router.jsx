import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/home";
import App from "../App";
import Faq from "../components/Pages/Faq";
import AboutUs from "../components/Pages/AboutUs";
import AllServices from "../components/Pages/AllServices";
import ContactUs from "../components/Pages/ContactUs";
import BuyNow from "../components/Pages/BuyNow";
import Register from "../components/Layout/Register";
import Login from "../components/Layout/Login";
import UserProfilePage from "../components/Layout/UserProfilePage";
import PrivateRoute from "../components/Layout/PrivateRoute";
import MyService from "../components/Pages/MyService";
import WebDevelopment from "../components/Pages/ServiceCategories/WebDevelopment";
import GraphicsDesign from "../components/Pages/ServiceCategories/GraphicsDesign";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Page not found</h1>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/faq", element: <Faq /> },
      { path: "/aboutUs", element: <AboutUs /> },
      { path: "/allServices", element: <AllServices /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/myservice", element: <MyService /> },
      { path: "/webdevelopment", element: <WebDevelopment /> },
      { path: "/graphicsDesign", element: <GraphicsDesign /> },

      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <UserProfilePage /> },
      {
        path: "/buyNow/:id",
        element: <BuyNow />,
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();

          const service = data.services.find((item) => item.id === params.id);
          if (service) return { ...service, type: "service" };

          const product = data.products.find((item) => item.id === params.id);
          if (product) return { ...product, type: "product" };

          const category1 = data.webDevelopment.find(
            (item) => item.id === params.id
          );
          if (category1) return { ...category1, type: "category1" };

          throw new Response("Data Not Found", { status: 404 });
        },
      },
    ],
  },
]);
