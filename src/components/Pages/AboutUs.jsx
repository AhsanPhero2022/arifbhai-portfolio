import TeamSection from "./TeamSection";

const AboutUs = () => {
  return (
    <div>
      <div className="mockup-window border border-base-300 w-3/4 mx-auto px-5 py-5">
        <div className="">
          <h1 className="text-5xl font-semibold py-5 px-3">About Us</h1>
          <p className="line-clamp-4">
            Welcome to{" "}
            <span className="text-xl text-orange-500">Dream Tech Zone</span>,
            your trusted partner in transforming ideas into exceptional digital
            experiences. We specialize in Store Build & Setup, Custom Design,
            Migration, Product Add, Graphic Design, Distal Marketing, Video
            Editing, and optimizing Shopify e-commerce websites tailored to your
            unique business needs.
          </p>
          <br />
          <p>
            With years of expertise and a passion for innovation, our team is
            dedicated to helping businesses establish a strong online presence.
            At Dream Tech Zone, we pride ourselves on delivering high-quality
            solutions that combine functionality, creativity, and user-friendly
            design.
          </p>
          <br />
          <p>
            Our mission is simple: to empower entrepreneurs and businesses with
            cutting-edge e-commerce solutions that drive growth and success.
            Whether you're launching a new store, revamping an existing one, or
            seeking expert guidance, Dream Tech Zone is here to bring your
            vision to life.
          </p>
          <br />
          <p>
            We value professionalism, transparency, and collaboration, ensuring
            every project is a seamless and rewarding experience for our
            clients. Your success is our priority, and we’re committed to going
            above and beyond to exceed your expectations.
          </p>
          <br />
          <br />
          <p>Let’s build something amazing together!</p>
          <br />
          <p className="text-xl ">
            Contact us today and take the first step toward achieving your
            e-commerce dreams.
          </p>
        </div>
      </div>
      <TeamSection />
    </div>
  );
};

export default AboutUs;
