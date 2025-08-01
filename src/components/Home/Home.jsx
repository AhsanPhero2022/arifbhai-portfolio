import WebDevelopment from "../Pages/ServiceCategories/WebDevelopment";
import Achievement from "./elements/Achievement";
import Banner from "./elements/Banner";
import Complete from "./elements/Complete";
import CustomCod from "./elements/CustomCod";
import Design from "./elements/Design";
import Modern from "./elements/Modern";
import WebsiteDesign from "./elements/WebsiteDesign";

const Home = () => {
  return (
    <div>
      <Banner />
      <Achievement />
      <Design />
      <CustomCod />
      <WebDevelopment />
      <Complete />
      <WebsiteDesign />
      <Modern />
    </div>
  );
};

export default Home;
