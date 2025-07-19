import { useLoaderData } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/20/solid";
import {
  AcademicCapIcon,
  TruckIcon,
  ChatBubbleLeftEllipsisIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";

import WpBtn from "./buyNowComponents/WpBtn";
import Payment from "./buyNowComponents/Payment";

const BuyNow = () => {
  const service = useLoaderData();
  console.log(service);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
      <div className="flex justify-center my-5 lg:sticky lg:top-10 self-start">
        <div className="lg:ms-4 xl:ms-4 ">
          <img
            src={service.image}
            alt=""
            className="px-6 w-full h-auto object-contain"
          />
        </div>
      </div>

      <div>
        <h1 className="my-5 text-4xl ps-2 font-semibold text-[#00838d]">
          {service.title}
        </h1>
        <div className="flex gap-1  p-2 rounded">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} className="w-5 h-5 text-[#00838d]" />
          ))}
        </div>
        {/* ths closer start from here */}
        <div className="w-full">
          <div className="mx-auto  divide-y  rounded-xl ">
            <Disclosure as="div" className="p-4 border-y" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <div className="flex gap-2">
                  <AcademicCapIcon className="h-6 w-6 text-[#00838d]" />
                  <span className="font-medium">
                    What is your refund policy?
                  </span>
                </div>
                <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 ">
                <p>
                  Launch your Shopify store with confidence, backed by the
                  expertise of our Shopify professionals and design partners. We
                  specialize in store setup and design, making your Shopify
                  store visually captivating and professionally polished to
                  attract potential customers.
                </p>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
        <WpBtn />
        <div className="my-3">
          <Payment />
        </div>
        {/* Disclosure 2 */}
        <div className="w-full ">
          <div className="mx-auto  divide-y  rounded-xl ">
            <Disclosure as="div" className="p-4 border-y" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <div className="flex gap-2">
                  <TruckIcon className="w-6 h-6 text-orange-500" />
                  <span className="font-medium">DELIVERY TIME</span>
                </div>
                <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 ">
                <p>10 Business Days</p>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
        {/* Disclosure 3 */}
        <div className="w-full ">
          <div className="mx-auto  divide-y  rounded-xl ">
            <Disclosure as="div" className="p-4 border-b" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <div className="flex gap-2">
                  <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-blue-500" />
                  <span className="font-medium">CUSTOMER SUPPORT</span>
                </div>
                <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 ">
                <p>7 Days After Delivery</p>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
        {/* Disclosure 4 */}
        <div className="w-full ">
          <div className="mx-auto  divide-y  rounded-xl ">
            <Disclosure as="div" className="p-4 border-b" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <div className="flex gap-2">
                  <ArrowUturnLeftIcon className="w-6 h-6 text-red-500" />
                  <span className="font-medium">MONEY GUARANTEE</span>
                </div>
                <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 ">
                <p>100% Money Back Guarantee</p>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
