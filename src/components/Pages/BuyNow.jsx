import { useLoaderData } from "react-router-dom";

const BuyNow = () => {
  const service = useLoaderData();

  return (
    <div>
      <h1>{service.title}</h1>
      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          style={{ display: "block", maxWidth: "100%" }}
        />
      )}
      <p>{service.description}</p>
    </div>
  );
};

export default BuyNow;
