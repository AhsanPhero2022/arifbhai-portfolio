import search from "../../../assets/search.png";
import backgroundVideo from "../../../assets/banner_video.mp4";

const Banner = () => {
  return (
    <div className="relative h-screen lg:h-[600px] flex justify-center items-center text-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="relative z-20">
        <div className="flex justify-center items-center text-center flex-col">
          <h2 className="text-5xl font-bold text-white">
            Grow your business with <br /> E-commerce Dropshipping.
          </h2>

          <p className="text-[#F9FAFB] mt-8  mb-12">
            Seamlessly connecting you to the heartbeat of India is prime
            properties.
          </p>
          <div>
            <button className="bg-[#00838d] border border-[#00838d] hover:bg-[#005EAE] hover:border-[#00838d] text-white px-4 py-2 flex justify-center items-center rounded-[8px]">
              <span>
                <img src={search} alt="" />
              </span>
              <span className="ml-1 md:text-lg">Buy our services</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
