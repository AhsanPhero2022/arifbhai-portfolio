// const services2 = [
//   {
//     title: "WEBSITE DESIGN & DEVELOPMENT",
//     description: `Need a fresh Shopify store or a complete redesign? Our expert Shopify web designers are ready to bring your vision to life. We collaborate with you to build a high-quality Shopify store tailored to your brand, business objectives, and budget. Our skilled Shopify developers take your ideas and transform them into a thriving e-commerce store that drives success.`,
//     image:
//       "https://ecomposer.io/cdn/shop/articles/image25_8b513e16-a8fa-4d40-84ff-53e2ea6dceaa_1100x.png?v=1719816085",
//   },
//   {
//     title: "WEBSITE REDESIGN & COMPATIBLE ALL DEVICES",
//     description: `Looking to scale your Shopify store? We have the expertise to enhance customer experience and maximize your revenue. Our Shopify web developers specialize in conversion optimization, offering:
// 1. Website performance & speed enhancements
// 2. User experience and interface improvements`,
//     image:
//       "https://pictonix.co/cdn/shop/articles/pictonix_11.webp?v=1718023796",
//   },
// ];

const WebsiteDesign = () => {
  return (
    <div className="bg-white py-12 px-4">
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row mb-10">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-full object-cover rounded-t lg:rounded-none lg:rounded-l"
            src="https://ecomposer.io/cdn/shop/articles/image25_8b513e16-a8fa-4d40-84ff-53e2ea6dceaa_1100x.png?v=1719816085"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-[#00838d] to-orange-400 py-8 px-6 rounded-b lg:rounded-none lg:rounded-r text-white">
          <h1 className="text-3xl font-bold">WEBSITE DESIGN & DEVELOPMENT</h1>
          <p className="mt-3 tracking-wide leading-relaxed">
            Need a fresh Shopify store or a complete redesign? Our expert
            Shopify web designers are ready to bring your vision to life.
            <br />
            <br />
            We collaborate with you to build a high-quality Shopify store
            tailored to your brand, business objectives, and budget. Our skilled
            Shopify developers take your ideas and transform them into a
            thriving e-commerce store that drives success.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-[#00838d] to-orange-400 py-8 px-6 rounded-t lg:rounded-none lg:rounded-l text-white order-2 lg:order-1">
          <h1 className="text-3xl font-bold">WEBSITE DESIGN & DEVELOPMENT</h1>
          <p className="mt-3 tracking-wide leading-relaxed">
            Need a fresh Shopify store or a complete redesign? Our expert
            Shopify web designers are ready to bring your vision to life.
            <br />
            <br />
            We collaborate with you to build a high-quality Shopify store
            tailored to your brand, business objectives, and budget. Our skilled
            Shopify developers take your ideas and transform them into a
            thriving e-commerce store that drives success.
          </p>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <img
            className="w-full h-full object-cover rounded-b lg:rounded-none lg:rounded-r"
            src="https://pictonix.co/cdn/shop/articles/pictonix_11.webp?v=1718023796"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesign;
