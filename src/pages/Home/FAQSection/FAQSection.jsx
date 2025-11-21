import React, { useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions."
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes, our posture corrector is designed with adjustable straps and flexible materials to accommodate various body types and sizes. It's suitable for adults of all ages."
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Regular use can significantly reduce back pain by properly aligning your spine. Many users see noticeable improvements within 2-3 weeks."
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer:
        "Yes! Our advanced posture corrector includes smart vibration alerts that notify you when you're slouching using intelligent posture detection."
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer:
        "Enter your email on the product page and you will receive an instant alert as soon as the product is restocked."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="py-20 ">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about posture correction and product usage.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer p-6 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>

                <FiChevronDown
                  className={`text-2xl text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 pt-1">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="btn btn-lg rounded-full
           bg-[#CAEB66]
             font-semibold px-8 shadow-lg hover:shadow-xl transition-all">
            See More FAQ’s
            <FiArrowRight className="ml-2 -rotate-45 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
