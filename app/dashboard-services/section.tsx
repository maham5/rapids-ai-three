import React from "react";


const ConsultingServices: React.FC = () => {
  return (
    <section className="consulting-section" >
      <div className="consulting-container">
        {/* Heading */}
        <h2 className="consulting-title">
         Some of Our {" "}
          <span className="highlight"> Product Engineering & Application Development Services</span> Include
        </h2>

        {/* Description */}
        <p className="consulting-subtitle">
        The main advantage of our engineering solutions lies in building scalable, data-driven, and secure digital systems — combining modern design, cloud efficiency, and intelligent automation to deliver impactful business results.
        </p>

        {/* Top Row */}
        <div className="consulting-row">
          <div className="consulting-card" data-aos="fade-up">
            <h3 className="card-number">01</h3>
            <div className="card-content">
              <h4 className="card-title">Scalable Web Solutions</h4>
              <p>
                We design and develop robust web applications that grow with your business. 
        Our focus is on creating high-performing, secure, and adaptable digital platforms.
              </p>
            </div>
          </div>

          <div className="consulting-card" data-aos="fade-up">
            <h3 className="card-number">02</h3>
            <div className="card-content">
              <h4 className="card-title">Mobile Experience Design</h4>
              <p>
                Our team crafts user-centric mobile experiences that deliver smooth performance, 
        modern interfaces, and strong brand engagement across all devices.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="consulting-row">
          <div className="consulting-card" data-aos="fade-up">
            <h3 className="card-number">03</h3>
            <div className="card-content">
              <h4 className="card-title">Data & Insight Dashboards</h4>
              <p>
                 We build analytical dashboards that visualize complex data, 
        helping businesses make informed, insight-driven decisions with clarity and confidence.
              </p>
            </div>
          </div>

          <div className="consulting-card" data-aos="fade-up">
            <h3 className="card-number">04</h3>
            <div className="card-content">
              <h4 className="card-title">Cloud & Smart Systems</h4>
              <p>
               From DevOps automation to blockchain integration, we develop 
        intelligent and secure systems that enhance efficiency and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingServices;

