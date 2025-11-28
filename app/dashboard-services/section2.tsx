"use client";
import React from "react";
import {
  FaGlobe,
  FaMobileAlt,
  FaChartLine,
  FaCloud,
  FaLink,
} from "react-icons/fa";

const Section2 = () => {
  const services = [
    {
    id: 1,
    icon: <FaGlobe size={40} color="#af2025" />,
    title: "Web Engineering",
    description:
      "We build scalable, high-performing, and secure web solutions designed to enhance user experience and business efficiency.",
  },
  {
    id: 2,
    icon: <FaMobileAlt size={40} color="#af2025" />,
    title: "Mobile Experience Design",
    description:
      "Our team crafts intuitive and responsive mobile interfaces that ensure seamless experiences across all devices and platforms.",
  },
  {
    id: 3,
    icon: <FaChartLine size={40} color="#af2025" />,
    title: "Data & Insight Dashboards",
    description:
      "We create analytical dashboards that visualize complex data, empowering businesses to make smarter, data-driven decisions.",
  },
  {
    id: 4,
    icon: <FaCloud size={40} color="#af2025" />,
    title: "DevOps & Cloud Engineering",
    description:
      "From automation to deployment, our DevOps and cloud solutions streamline workflows and boost system reliability.",
  },
  {
    id: 5,
    icon: <FaLink size={40} color="#af2025" />,
    title: "Blockchain & Smart Systems",
    description:
      "We develop secure and transparent blockchain solutions that automate operations and build trust in digital ecosystems.",
  },
  ];

  return (
    <section className="rn-section">
      <div className="rn-container " data-aos="fade-up">
        <h2 className="rn-heading">
          Top <span className="highlight1"> Product Engineering & Application Development  </span>  Company 
        </h2>
        <p className="rn-subheading">
         Empower your business with cutting-edge web, mobile, and cloud solutions tailored to deliver seamless performance, innovation, and measurable results.
        </p>

        <div className="rn-grid" >
          {services.map((service) => (
            <div key={service.id} className="rn-card" data-aos="fade-up">
              <div className="rn-icon">{service.icon}</div>
              <h3 className="rn-title">{service.title}</h3>
              <p className="rn-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
