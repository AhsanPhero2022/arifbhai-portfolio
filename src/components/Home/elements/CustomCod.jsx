import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";
import data from "../../../../public/data.json";

const CustomCod = () => {
  const products = data.products;
  return (
    <div className="mx-4 my-8">
      <h1 className="my-16 text-center text-[#00838d] text-[40px] font-semibold">
        Custom Code Service
      </h1>
      <div className="px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
          {products.map((product) => (
            <div className="w-full max-w-sm" key={product.id}>
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
