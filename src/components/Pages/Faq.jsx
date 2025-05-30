import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router";

const Faq = () => {
  return (
    <div>
      <div className="p-2 m-2">
        <Link
          className="flex gap-1 items-center hover:underline font-bold "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          1. HOW LONG DOES IT TAKE TO COMPLETE A SHOPIFY STORE PROJECT?
          <FaArrowDown />
        </Link>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="text-xl py-2">
              HOW LONG DOES IT TAKE TO COMPLETE A SHOPIFY STORE PROJECT?
            </h3>
            <p className="py-4">
              Most Shopify store projects are completed within 5 to 7 days,
              depending on the complexity of the design and specific
              requirements.
            </p>
          </div>
        </dialog>
      </div>
      <div className="p-2 m-2">
        <Link
          className="flex gap-1 items-center hover:underline font-bold "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          2. WHAT SERVICES DOES DREAM TECH ZONE OFFER?
          <FaArrowDown />
        </Link>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="text-xl py-2">
              WHAT SERVICES DOES DREAM TECH ZONE OFFER?
            </h3>
            <p className="py-4">
              We specialize in Shopify E-commerce Website Design & Development.
              Our services include Shopify Store Build & Setup, Custom Design,
              Store Optimization, Migration, Product Add, Graphic Design,
              Digital Marketing, Video Editing & Ongoing Support to help
              businesses create and maintain their online stores
            </p>
          </div>
        </dialog>
      </div>

      <div className="p-2 m-2">
        <Link
          className="flex gap-1 items-center hover:underline font-bold "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          3. DO YOU OFFER SUPPORT AFTER THE PROJECT IS COMPLETED?
          <FaArrowDown />
        </Link>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="text-xl py-2">
              DO YOU OFFER SUPPORT AFTER THE PROJECT IS COMPLETED?
            </h3>
            <p className="py-4">
              Absolutely! We offer ongoing support and maintenance services to
              ensure your Shopify store runs smoothly and remains up to date.
            </p>
          </div>
        </dialog>
      </div>
      <div className="p-2 m-2">
        <Link
          className="flex gap-1 items-center hover:underline font-bold "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          4. HOW MUCH DO YOUR SERVICES COST?
          <FaArrowDown />
        </Link>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="text-xl py-2">HOW MUCH DO YOUR SERVICES COST?</h3>
            <p className="py-4">
              Our pricing is competitive and varies based on the scope of the
              project. Contact us with your specific requirements, and we’ll
              provide a tailored quote that fits your budget.
            </p>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Faq;
