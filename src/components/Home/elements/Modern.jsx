import { FaDesktop, FaMedal, FaMoneyCheckAlt, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaDesktop size={40} />,
    title: "MODERN DESIGN",
  },
  {
    icon: <FaMedal size={40} />,
    title: "PREMIUM QUALITY",
  },
  {
    icon: <FaMoneyCheckAlt size={40} />,
    title: "UNBEATABLE PRICE",
  },
  {
    icon: <FaHeadset size={40} />,
    title: "LIFETIME SUPPORT",
  },
];

const Modern = () => {
  return (
    <div className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div className="text-black text-4xl">{feature.icon}</div>
            <p className="font-semibold tracking-wide text-gray-800">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modern;
