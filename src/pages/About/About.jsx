import React, { useState } from "react";

const About = () => {
  const [active, setActive] = useState("story");

  const tabClass = (tab) =>
    `pb-2 cursor-pointer transition-all duration-200 ${
      active === tab
        ? "text-black font-semibold border-b-2 border-lime-400"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <div className="w-full rounded-2xl md:my-10 flex justify-center py-10 md:py-16 bg-white">
      <div className="w-full max-w-5xl px-4">
        {/* Top Section */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">About Us</h1>
        <p className="text-gray-500 max-w-xl mb-8 leading-relaxed">
          A space for sellers comfortably within the trading and finance fields
          to host their personal packages to customers worldwide — with ease
          every time.
        </p>

        {/* White Rounded Container */}
        <div className="bg-white rounded-2xl p-6 md:p-10 ">
          {/* Custom Underline Tabs */}
          <div className="flex gap-8 border-b border-gray-200 mb-8">
            <div
              className={tabClass("story")}
              onClick={() => setActive("story")}
            >
              Story
            </div>
            <div
              className={tabClass("mission")}
              onClick={() => setActive("mission")}
            >
              Mission
            </div>
            <div
              className={tabClass("success")}
              onClick={() => setActive("success")}
            >
              Success
            </div>
            <div className={tabClass("team")} onClick={() => setActive("team")}>
              Team & Others
            </div>
          </div>

          {/* Content Section */}
          <div className="text-gray-600 leading-relaxed space-y-4">
            {/* STORY */}
            {active === "story" && (
              <>
                <p>
                  We began with a simple yet powerful promise — to make product
                  delivery fast, reliable, and effortless for everyone. What
                  started as a small initiative quickly grew into a dynamic
                  platform trusted by thousands of sellers, brands, and
                  customers. Over the years, we have refined our system with
                  real-time tracking, improved logistics workflows, and
                  continuous customer-driven upgrades to ensure a smooth
                  delivery experience every time.
                </p>
                <p>
                  Today, our platform supports a wide range of delivery needs —
                  from personal packages to bulk orders — all handled with
                  precision and care. No matter the distance, we are committed
                  to making sure your packages reach the right hands safely,
                  quickly, and with complete transparency.
                </p>
              </>
            )}

            {/* MISSION */}
            {active === "mission" && (
              <>
                <p>
                  Our mission is simple: to create a delivery ecosystem where
                  reliability, speed, and transparency come together seamlessly.
                  We aim to empower businesses and individuals with tools that
                  remove the stress traditionally associated with shipping.
                  Whether you are a small seller or a growing enterprise, we
                  want to make logistics easy, intuitive, and accessible.
                </p>
                <p>
                  With expanding technology, smarter automation, and a dedicated
                  support team, we are committed to building solutions that not
                  only meet today’s delivery challenges but also anticipate the
                  needs of tomorrow.
                </p>
              </>
            )}

            {/* SUCCESS */}
            {active === "success" && (
              <>
                <p>
                  Our journey has been filled with meaningful milestones —
                  reaching new regions, building strong logistic partnerships,
                  and powering successful deliveries for thousands of customers
                  daily. Each accomplishment reflects our dedication to
                  providing consistent performance and a user experience that
                  our clients genuinely trust.
                </p>
                <p>
                  What makes our success meaningful is the success of the people
                  who depend on us. Every business that grows with our platform,
                  every customer who receives their package on time, and every
                  seller who finds convenience in our tools — they are the real
                  reason we continue to evolve and improve.
                </p>
              </>
            )}

            {/* TEAM */}
            {active === "team" && (
              <>
                <p>
                  Behind our service is a passionate team of highly skilled
                  developers, designers, logistics specialists, and customer
                  support professionals. Each member of our team contributes to
                  building a delivery experience that is simple on the outside
                  yet powered by strong, intelligent systems behind the scenes.
                </p>
                <p>
                  We value innovation, teamwork, and honest communication. Our
                  culture is built around learning, experimenting, and solving
                  real-world problems that matter. As we grow, we remain
                  committed to providing solutions that are not only effective
                  but also meaningful for our users and partners.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
