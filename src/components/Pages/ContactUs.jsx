import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "0f5a21de-8641-45fe-9883-8c15012e9c2c",
        ...data,
      }),
    });

    if (response.ok) {
      Swal.fire("Message sent successfully!");
      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: { errors },
      });
    }
  };

  return (
    <section className="w-full px-4 py-12 bg-[#00838d] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Let's work with me</h2>
          <p className="mb-6 text-gray-300">
            Let's join forces and bring your ideas to life! With collaboration
            and creativity, we can achieve something truly amazing. I'm excited
            to work together and turn your vision into a reality. Don't wait any
            longer, reach out now and let's get started!
          </p>

          <div className="space-y-4">
            <div className="bg-white text-black p-4 rounded shadow">
              <p>
                <strong>📞 Phone:</strong> +8801862476402
              </p>
            </div>
            <div className="bg-white text-black p-4 rounded shadow">
              <p>
                <strong>📧 Email:</strong> ahsanabir567@gmail.com
              </p>
            </div>
            <div className="bg-white text-black p-4 rounded shadow">
              <p>
                <strong>📍 Address:</strong> Sirajganj | Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="hidden"
            name="access_key"
            value="your_web3forms_access_key" // Replace with your Web3Forms Access Key
          />

          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className="w-full bg-white text-black border border-gray-600 rounded p-3 "
          />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full bg-white text-black border rounded p-3 "
            />
            <input
              type="text"
              placeholder="Phone Number"
              {...register("phone", { required: false })}
              className="w-full bg-white text-black border border-gray-600 rounded p-3 "
            />
          </div>
          <textarea
            rows="6"
            placeholder="Message"
            {...register("message", { required: true })}
            className="w-full bg-white rounded p-3 text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-orange-500 text-black text-xl px-6 py-3 rounded shadow hover:opacity-90 transition-all w-full"
          >
            Send Message 📩
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
