import {
  FaStore,
  FaCogs,
  FaExchangeAlt,
  FaCode,
  FaLaptopCode,
  FaLifeRing,
} from "react-icons/fa";

const services = [
  {
    title: "SHOPIFY STORE SETUP",
    icon: FaStore,
    description:
      "Our Expert Store Setup Services Make Launching Your Shopify Site Easy And Fast, Getting Your Online Store Live Effortlessly.",
  },
  {
    title: "THEMES & CUSTOMIZATION",
    icon: FaCogs,
    description:
      "Customize Your Shopify Store With Endless Options. Our Expert Designers Create Remarkable Mobile & Web Experiences With Top-Tier UX.",
  },
  {
    title: "SHOPIFY INTEGRATION",
    icon: FaExchangeAlt,
    description:
      "Effortless Shopify Integration For Better Functionality. Easily Connect Third-Party Tools And Create A Flexible ECommerce Experience.",
  },
  {
    title: "CUSTOM SHOPIFY DEVELOPMENT",
    icon: FaCode,
    description:
      "Custom Shopify Development That Integrates Essential Features, Designed To Meet All The Needs Of Your E-Commerce Business.",
  },
  {
    title: "SHOPIFY MIGRATION",
    icon: FaLaptopCode,
    description:
      "We Make Your Shopify Transition Seamless, Whether From A Physical Store Or Another Platform. Experts Handle All Migration Needs.",
  },
  {
    title: "MAINTENANCE & SUPPORT",
    icon: FaLifeRing,
    description:
      "We Ensure Zero Downtime For Your Store. Our Shopify Support Keeps Your Website Secure, Smooth, And Bug-Free.",
  },
];

const Complete = () => {
  return (
    <div className="bg-yellow-700 py-8 px-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-2">
        YOUR COMPLETE SOLUTION FOR SHOPIFY GROWTH & SUCCESS
      </h2>
      <p className="text-center mb-12 text-lg">
        We're A Dedicated Team, Focused On Empowering ECommerce Businesses &
        Personal Brands
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-center text-3xl text-yellow-700 mb-4">
                <Icon />
              </div>
              <h3 className="font-bold text-lg text-center mb-2">
                {service.title}
              </h3>
              <p className="text-center text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Complete;
