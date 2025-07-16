import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/home";
import App from "../App";
import Faq from "../components/Pages/Faq";
import AboutUs from "../components/Pages/AboutUs";
import AllServices from "../components/Pages/AllServices";
import ContactUs from "../components/Pages/ContactUs";
import BuyNow from "../components/Pages/BuyNow";
import ServiceCategory from "../components/Pages/ServiceCategory";
import Register from "../components/Layout/Register";

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
      { path: "/serviceCategory", element: <ServiceCategory /> },
      { path: "/register", element: <Register /> },
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

          throw new Response("Data Not Found", { status: 404 });
        },
      },
    ],
  },
]);
