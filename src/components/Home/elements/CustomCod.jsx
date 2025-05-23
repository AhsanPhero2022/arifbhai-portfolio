import { FaLaptopCode } from "react-icons/fa";
import { ServerRouter } from "react-router";

const services = [
  {
    id: 1,
    title: "ACCORDION FOOTER FOR SHOPIFY FREE THEME",
    description: "Order Now",
  },
  {
    id: 2,
    title: "ADD A MEGA MENU AND DROPDOWN MENU SIMULTANEOUSLY",
    description: "Order Now",
  },
  {
    id: 3,
    title: "ADD BREADCRUMBS FOR SHOPIFY FREE THEME",
    description: "Order Now",
  },
  {
    id: 4,
    title: "AUTOPLAY VIDEO ON SHOPIFY HOMEPAGE",
    description: "Order Now",
  },
];

const CustomCod = () => {
  return (
    <div className="mx-4">
      <h1 className="my-16 text-center text-[40px] font-semibold">
        Custom Code
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((services) => (
            <div className="card" key={services.id}>
              <a className="card1" href="#">
                <p>{services.title}</p>

                <div class="go-corner" href="#">
                  <div class="go-arrow">→</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCod;
