// components/TeamSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

const teamMembers = [
  {
    name: "Ahsan Abir",
    title: "Web Developer",
    description: "Expert in web development and Shopify integration.",
    image:
      "https://t3.ftcdn.net/jpg/07/39/11/40/360_F_739114067_LDV4cgfuNNzIlo9lJXA8vGz7bnDwjtWE.jpg",
  },
  {
    name: "Nusrat Jahan",
    title: "UI/UX Designer",
    description: "Designs clean, user-focused interfaces.",
    image:
      "https://billey-4437.kxcdn.com/wp-content/uploads/2019/08/team-member-01.jpg",
  },
  {
    name: "Fahim Rahman",
    title: "Full Stack Developer",
    description: "Handles frontend and backend development.",
    image: "https://audifintax.com/eng/wp-content/uploads/2017/04/team1.jpg",
  },
  {
    name: "Mim Akter",
    title: "Marketing Manager",
    description: "Boosts brand visibility and reach.",
    image:
      "https://billey-4437.kxcdn.com/wp-content/uploads/2019/08/team-member-02.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12 text-[#00838d]">Meet Our Team</h2>

      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,

            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide
              key={index}
              className="transition-transform duration-300 hover:scale-105"
              style={{
                width: "250px",
              }}
            >
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-52 object-cover rounded-xl"
                />
                <h3 className="text-lg font-semibold mt-3 text-[#00838d]">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.title}</p>
                <p className="text-xs mt-1 text-gray-600">
                  {member.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
