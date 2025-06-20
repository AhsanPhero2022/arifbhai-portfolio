import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

const WpBtn = () => {
  return (
    <div>
      <Link
        to="https://wa.me/8801868810598?text=Hello%2C%20I'm%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="inline-flex items-center gap-2 btn w-full my-4 text-white bg-[#00838d] hover:bg-orange-500">
          <FaWhatsapp className="text-xl" />
          ORDER ON WHAT'S APP
        </button>
      </Link>
    </div>
  );
};

export default WpBtn;
