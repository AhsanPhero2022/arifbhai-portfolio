import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AcademicCapIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import ContactUs from "./ContactUs";

const Faq = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto text-center mt-16 mb-8">
        <h2 className="text-3xl font-bold">Got Questions? We've Got Answers</h2>
        <p className="text-xl font-semibold mt-2">
          Find answers to the most commonly asked questions. If you still need
          help. <br /> feel free to reach out directly.
        </p>
      </div>
      <div className="w-1/2 my-4 mx-auto">
        <div className="mx-auto  divide-y text-white rounded-xl ">
          <Disclosure
            as="div"
            className="p-4 bg-[#00838d] rounded"
            defaultOpen={false}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <div className="flex gap-2">
                <AcademicCapIcon className="h-6 w-6 " />
                <span className="font-medium">
                  1. WHAT SERVICES DOES DREAM TECH ZONE OFFER?
                </span>
              </div>
              <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 ">
              <p>
                We specialize in Shopify E-commerce Website Design &
                Development. Our services include Shopify Store Build & Setup,
                Custom Design, Store Optimization, Migration, Product Add,
                Graphic Design, Digital Marketing, Video Editing & Ongoing
                Support to help businesses create and maintain their online
                stores
              </p>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      <div className="w-1/2 my-4 mx-auto">
        <div className="mx-auto  divide-y text-white rounded-xl ">
          <Disclosure
            as="div"
            className="p-4 bg-[#00838d] rounded"
            defaultOpen={false}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <div className="flex gap-2">
                <AcademicCapIcon className="h-6 w-6 " />
                <span className="font-medium">
                  2. HOW LONG DOES IT TAKE TO COMPLETE A SHOPIFY STORE PROJECT?
                </span>
              </div>
              <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 ">
              <p>
                Most Shopify store projects are completed within 5 to 7 days,
                depending on the complexity of the design and specific
                requirements.
              </p>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      <div className="w-1/2 my-4 mx-auto">
        <div className="mx-auto  divide-y text-white rounded-xl ">
          <Disclosure
            as="div"
            className="p-4 bg-[#00838d] rounded"
            defaultOpen={false}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <div className="flex gap-2">
                <AcademicCapIcon className="h-6 w-6 " />
                <span className="font-medium">
                  3. DO YOU OFFER SUPPORT AFTER THE PROJECT IS COMPLETED?
                </span>
              </div>
              <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 ">
              <p>
                Absolutely! We offer ongoing support and maintenance services to
                ensure your Shopify store runs smoothly and remains up to date.
              </p>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      <div className="w-1/2 my-4 mx-auto">
        <div className="mx-auto  divide-y text-white rounded-xl ">
          <Disclosure
            as="div"
            className="p-4 bg-[#00838d] rounded"
            defaultOpen={false}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <div className="flex gap-2">
                <AcademicCapIcon className="h-6 w-6 " />
                <span className="font-medium">
                  4. HOW MUCH DO YOUR SERVICES COST?
                </span>
              </div>
              <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 ">
              <p>
                Our pricing is competitive and varies based on the scope of the
                project. Contact us with your specific requirements, and we will
                provide a tailored quote that fits your budget.
              </p>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      <div className="w-1/2 my-4 mx-auto">
        <div className="mx-auto  divide-y text-white rounded-xl ">
          <Disclosure
            as="div"
            className="p-4 bg-[#00838d] rounded"
            defaultOpen={false}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <div className="flex gap-2">
                <AcademicCapIcon className="h-6 w-6 " />
                <span className="font-medium">
                  5. CAN YOU ASSIST WITH SHOPIFY STORE MIGRATION?
                </span>
              </div>
              <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 ">
              <p>
                Yes, we can help migrate your existing store to Shopify,
                ensuring a smooth transition with minimal downtime and no data
                loss.
              </p>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      <div className="w-1/2 my-4 mx-auto">
        <div className="mx-auto  divide-y text-white rounded-xl ">
          <Disclosure
            as="div"
            className="p-4 bg-[#00838d] rounded"
            defaultOpen={false}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <div className="flex gap-2">
                <AcademicCapIcon className="h-6 w-6 " />
                <span className="font-medium">
                  6. WHY SHOULD I CHOOSE DREAM TECH ZONE?
                </span>
              </div>
              <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 ">
              <p>
                At Dream Tech Zone, we prioritize quality, professionalism, and
                client satisfaction. Our team is experienced, reliable, and
                dedicated to delivering results that exceed expectations.
              </p>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      <div className="w-1/2 my-4 mx-auto">
        <div className="mx-auto  divide-y text-white rounded-xl ">
          <Disclosure
            as="div"
            className="p-4 bg-[#00838d] rounded"
            defaultOpen={false}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <div className="flex gap-2">
                <AcademicCapIcon className="h-6 w-6 " />
                <span className="font-medium">
                  7. DO YOU WORK WITH CLIENTS INTERNATIONALLY?
                </span>
              </div>
              <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 ">
              <p>
                Yes, we work with clients from all over the world, providing
                expert Shopify services to businesses of all sizes and
                industries.
              </p>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      <div className="w-1/2 my-4 mx-auto">
        <div className="mx-auto  divide-y text-white rounded-xl ">
          <Disclosure
            as="div"
            className="p-4 bg-[#00838d] rounded"
            defaultOpen={false}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <div className="flex gap-2">
                <AcademicCapIcon className="h-6 w-6 " />
                <span className="font-medium">
                  8. HOW DO I GET STARTED WITH DREAM TECH ZONE?
                </span>
              </div>
              <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 ">
              <p>
                Getting started is easy! Simply contact us via email or
                WhatsApp, and share your project requirements. We’ll guide you
                through the next steps.
              </p>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      <div className="w-1/2 my-4 mx-auto">
        <div className="mx-auto  divide-y text-white rounded-xl ">
          <Disclosure
            as="div"
            className="p-4 bg-[#00838d] rounded"
            defaultOpen={false}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <div className="flex gap-2">
                <AcademicCapIcon className="h-6 w-6 " />
                <span className="font-medium">
                  9. WHAT IS THE BEST WAY TO CONTACT DREAM TECH ZONE?
                </span>
              </div>
              <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 ">
              <p>
                You can reach us through the following channels: <br /> 📧
                Email: nafijhossain10@gmail.com <br /> 📞 Phone/WhatsApp:
                +8801868810598
              </p>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      <h1 className="text-3xl text-orange-500 font-semibold text-center my-12">
        STILL HAVE QUESTIONS? GET IN TOUCH NOW
      </h1>
      <ContactUs />
    </div>
  );
};

export default Faq;
