import { Link } from "react-router";
import data from "../../../../public/data.json";

const WebDevelopment = () => {
  const webDevelopment = data.webDevelopment;

  return (
    <div className="">
      <h1 className="text-3xl font-semibold my-12 mx-8 text-center text-[#00838d]">
        Web Development Services
      </h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-4">
        {webDevelopment.map((service) => (
          <div
            key={service.id}
            className="card bg-base-100 w-96 shadow-sm mx-auto"
          >
            <figure>
              <img
                src={service.image}
                className="w-full h-full max-h-60"
                alt="Loading"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <p>{service.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/buyNow/${service.id}`}>
                  <button className=" transition-colors duration-500 btn text-white border border-[	#e5e7eb] bg-[#00838d] hover:bg-cyan-500">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopment;
