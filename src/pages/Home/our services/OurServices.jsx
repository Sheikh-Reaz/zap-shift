import React from "react";
import service from "../../../assets/service.png";

const OurServices = () => {
  return (
    <div className="bg-secondary  rounded-[40px] py-16 px-4">
      <div className="max-w-6xl mx-auto  p-10 md:p-14">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl font-semibold mb-2">Our Services</h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD TEMPLATE — REUSABLE */}
          {[
            {
              title: "Express & Standard Delivery",
              desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
            },
            {
              title: "Nationwide Delivery",
              desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
            },
            {
              title: "Fulfillment Solution",
              desc: "We offer customized service with inventory management support, online order processing, packaging, and after sales support."
            },
            {
              title: "Cash on Home Delivery",
              desc: "100% cash-on delivery anywhere in Bangladesh with guaranteed safety of your product."
            },
            {
              title: "Corporate Service / Contract In Logistics",
              desc: "Customized corporate services which includes warehouse and inventory management support."
            },
            {
              title: "Parcel Return",
              desc: "Through our reverse logistics facility we allow customers to return or exchange their products with online business merchants."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="
                rounded-2xl p-6 shadow-md cursor-pointer
                bg-[#F8F8F8]
                transition-all duration-300
                hover:bg-[#D4F05F]
                hover:scale-[1.02]
              "
            >
              {/* Icon */}
              <div className="flex justify-center">
                <img src={service} className="w-14 h-14 object-contain" />
              </div>

              {/* Title */}
              <h3
                className="
                  text-center mt-3 text-xl font-semibold transition-all duration-300
                  text-[#033A32]
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-center mt-2 text-sm transition-all duration-300
                  text-gray-600
                "
              >
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default OurServices;
