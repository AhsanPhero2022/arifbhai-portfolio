import { Outlet } from "react-router";
import "./App.css";

import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/footer";
import Welcome from "./components/Home/welcome";
function App() {
  return (
    <>
      <Welcome />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
