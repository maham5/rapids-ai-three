"use client";
import React, { useEffect } from "react";
import AOS from "aos";

const Mainpage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      id: "01",
      title: "AI & Digital Transformation Consulting",
      description:
        "Our consultants harness the power of AI to automate operations and drive smarter decision-making.We design intelligent systems and digital strategies that accelerate innovation and business growth.By merging data-driven insights with emerging technologies, we enable seamless digital transformation.",
    },
    {
      id: "02",
      title: "Research & Development (R&D)",
      description:
        "Our R&D team explores next-generation technologies to build innovative and impactful solutions.We experiment, prototype, and refine ideas that shape the future of digital products and platforms.By combining creativity with technical excellence, we turn visionary concepts into real-world results."
    },
        {
      id: "03",
      title: "Training & Capacity Building",
      description:
        "Our experts design interactive training programs that enhance technical skills and digital capability.We equip teams with hands-on knowledge of modern tools, frameworks, and best practices.By fostering innovation through learning, we help organizations build resilient digital talent.",
    },
    {
      id: "04",
      title: "Data Strategy & Analytics Consulting",
      description:
        "Our analysts craft tailored data strategies that convert information into business intelligence.We develop analytics systems and dashboards that reveal patterns, trends, and opportunities.By leveraging predictive insights and visualization, we help organizations make smarter decisions.",
    },
     {
      id: "05",
      title: "Technical Advisory & Innovation Partnerships",
      description:
        "Our advisors collaborate closely with businesses to design and implement forward-thinking solutions.We provide strategic technical guidance that ensures scalability, security, and performance.By partnering for innovation, we turn technology into a catalyst for sustainable growth.",
    },
  ];

  return (
    <section className="game-process-section">
      <h2
        className="game-process-heading"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        Our <span className="highlight1">  Consulting & Research    </span>   Services Include 
      </h2>

      <div className="process-wrapper">
        <div className="vertical-line"></div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className="process-item"
             data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
  data-aos-delay={index * 200}
          >
            <div className="process-number">{step.id}</div>
            <div className="process-card">
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mainpage;
