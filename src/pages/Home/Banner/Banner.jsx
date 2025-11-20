import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div
      style={{
        position: "relative", // IMPORTANT
        width: "100%",
        maxWidth: "1280px",
        margin: "auto",
      }}
    >
      {/* BUTTONS OVER IMAGE */}
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "60px",

          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          gap: "14px",
        }}
      >
        <button
          style={{
            padding: "10px 15px",
            borderRadius: "999px",
            background: "#C7F075",
            color: "#062B1F",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 6px 12px rgba(54, 110, 30, 0.18)",
          }}
        >
          Track Your Parcel
          <span
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            →
          </span>
        </button>

        <button
          style={{
            padding: "10px 35px",
            borderRadius: "10px",
            background: "white",
            border: "1px solid #e3e3e3",
            fontWeight: "600",
            color: "#222",
            cursor: "pointer",
          }}
        >
          Be A Rider
        </button>
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
        <div>
          <img src={bannerImg1} alt="" />
        </div>
        <div>
          <img src={bannerImg2} alt="" />
        </div>
        <div>
          <img src={bannerImg3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
