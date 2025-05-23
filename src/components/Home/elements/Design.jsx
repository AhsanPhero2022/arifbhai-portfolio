import React from "react";

const Design = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-4">
      <div className="card bg-base-100 w-96 shadow-sm mx-auto">
        <figure>
          <img
            src="https://thegenielab.com/cdn/shop/articles/Shopify_free_themes_1024x1024.jpg?v=1675078336"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shopify Theme Customize</h2>
          <p>Make your old shopify theme to upgrade the new version</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm mx-auto">
        <figure>
          <img
            src="https://the4.co/cdn/shop/articles/image6_c3e8227e-a280-4532-9146-ea4c73227b74.png?v=1692675723"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shopify Dropshipping</h2>
          <p>
            Create your own shopify store and start your dropshipping business.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm mx-auto">
        <figure>
          <img
            src="https://ecomposer.io/cdn/shop/articles/29d9008f-e1a7-4784-88ae-ffd7e5075a90-cover.png?v=1712039322"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shopify Store Create & Design</h2>
          <p>Make your old shopify theme to upgrade the new version</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
