import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom"; // fixed router import
import data from "../../../../public/data.json";

const CustomCod = () => {
  const products = data.products;

  return (
    <div className="mx-auto my-8 max-w-7xl px-4">
      <h1 className="my-16 text-center text-[#00838d] text-[32px] md:text-[40px] font-semibold">
        Custom Code Service
      </h1>
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
          {products.map((product) => (
            <div className="w-full flex justify-center" key={product.id}>
              <div className="card">
                <Link className="card1" to={`/buyNow/${product.id}`}>
                  <p>{product.title}</p>
                  <div className="go-corner">
                    <div className="text-white">
                      <MdOutlineKeyboardDoubleArrowRight />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCod;
