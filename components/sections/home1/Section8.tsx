"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCube, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

export default function WhoWeAre() {
  return (
    <section className="who-section">
       {/* Corner Circle Video */}
       <div className="corner-circle-wrapper">
 <video 
    src="/assets/imgs/template/circle.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="corner-circle"
  />
       </div>
  

      {/* Centered Heading */}
      <div className="who-heading">
        <h2>
          Who <span className="highlight">We Are</span>
        </h2>
      </div>

      {/* Swiper */}
      <Swiper
        className="who-slider"
        modules={[Pagination, EffectCube, Autoplay]}
        effect="cube"
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 0,
          shadowScale: 0.94,
        }}
        slidesPerView={1}
        speed={900}
        pagination={{
          clickable: true,
          el: ".who-pagination",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="who-content">
            <div className="who-left">
              <div className="who-text">
                <h3>
                  <span className="green-text">SUSTAINABLE</span><br />
                  <span className="dark-text">GROWTH WITH AI</span>
                </h3>
                <p>
                  We build AI solutions that drive sustainable growth by optimizing processes,
                  enabling personalized experiences and reducing resource consumption.
                </p>
              </div>
              
            </div>

            <div className="who-image">
              <img src="/assets/imgs/template/SOIL.jpg" alt="Who we are"   className="growth-img"/>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="who-content">
            <div className="who-left">
              <div className="who-text">
                <h3>
                  <span className="green-text">INNOVATIVE</span><br />
                  <span className="dark-text">TECHNOLOGY SOLUTIONS</span>
                </h3>
                <p>
                  We build scalable solutions focused on automation, data insights, and great UX.
                </p>
              </div>
             
            </div>
            <div className="who-image">
              <img src="/assets/imgs/template/INNOVATIONN.jpg" alt="Innovation"  className="innovation-img" />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="who-content">
            <div className="who-left">
              <div className="who-text">
                <h3>
                  <span className="green-text">FUTURE-READY</span><br />
                  <span className="dark-text">DIGITAL SOLUTIONS</span>
                </h3>
                <p>
                  We prepare businesses for tomorrow with cloud-native, AI-driven, and secure digital products.
                </p>
              </div>
              
            </div>
            <div className="who-image">
              <img src="/assets/imgs/template/FUTUREE.jpg" alt="Future Ready" className="future-img"/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

