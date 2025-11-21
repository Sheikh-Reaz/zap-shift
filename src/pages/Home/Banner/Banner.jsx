import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative w-full  mx-auto">
      
      {/* BUTTONS OVER IMAGE */}
<div
  className="
    absolute z-10 flex gap-3 left-[60px] top-[80%]

    /* Mobile (same) */
    max-sm: left-0
    max-sm:top-[72%]
    max-sm:scale-75

    /* Tablet (same) */
    sm:scale-90

    /* Large screen (smaller than before) */
    lg:scale-100     /* was 110 */
    xl:scale-110     /* was 125 */
  "
>
  {/* Track Parcel Button */}
  <button
    className="
      px-4 py-2 
      lg:px-5 lg:py-2.5   /* slightly smaller than before */
      rounded-full 
      bg-[#C7F075] text-[#062B1F] 
      font-semibold 
      flex items-center gap-2 
      shadow-[0_6px_12px_rgba(54,110,30,0.18)]

      text-xs sm:text-sm lg:text-base
    "
  >
    Track Your Parcel
    <span
      className="
        w-6 h-6 
        sm:w-7 sm:h-7 
        lg:w-8 lg:h-8   /* was 9x9 before */
        rounded-full bg-black/5 
        flex items-center justify-center 
        font-bold
      "
    >
      →
    </span>
  </button>

  {/* Rider Button */}
  <Link
    to={"/rider"}
    className="
      px-5 py-2 
      lg:px-6 lg:py-2.5   /* smaller for large screens */
      rounded-lg bg-white border border-[#e3e3e3] 
      font-semibold text-[#222]
      text-xs sm:text-sm lg:text-base
    "
  >
    Be A Rider
  </Link>
</div>


      {/* CAROUSEL */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={3000}
        transitionTime={700}
      >
        <div><img src={bannerImg1} alt="" /></div>
        <div><img src={bannerImg2} alt="" /></div>
        <div><img src={bannerImg3} alt="" /></div>
      </Carousel>
    </div>
  );
};

export default Banner;
