import Design from "../Home/elements/Design";
import CustomCod from "../Home/elements/CustomCod";
import WebDevelopment from "./ServiceCategories/WebDevelopment";

const AllServices = () => {
  return (
    <div>
      <h1 className="  text-[#00838d] text-3xl font-bold text-center mt-12">
        All Services
      </h1>
      <h1 className="  text-[#00838d]  font-semibold text-center my-6">
        Chose a service and hit the BUY NOW button.
      </h1>
      <div>
        <Design />
        <CustomCod />
        <WebDevelopment />
      </div>
    </div>
  );
};

export default AllServices;
