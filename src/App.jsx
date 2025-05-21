import { Outlet } from "react-router";
import "./App.css";

import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
