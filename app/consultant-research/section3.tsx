"use client";
import React, { useState } from "react";

const industries = [
  {
    title: "AI & Digital Transformation Consulting",
    content: {
      heading: "AI & Digital Transformation Consulting",
      description:
        "We empower organizations to embrace digital change through AI-driven solutions that optimize operations and decision-making. Our team integrates automation, analytics, and innovation strategies to enhance productivity and customer engagement.",
      points: [
        "Developing AI-powered business models",
        "Automating workflows for efficiency",
        "Enhancing customer experience with intelligent insights",
        "Building data-driven decision systems",
      ],
    },
  },
  {
    title: "Research & Development (R&D)",
    content: {
      heading: "Research & Development (R&D)",
      description:
        "We drive innovation by exploring emerging technologies and transforming creative ideas into practical, scalable solutions. Our R&D team focuses on continuous experimentation, prototyping, and data-driven discovery to accelerate digital advancement.",
      points: [
        "Exploring emerging AI and data technologies",
        "Developing innovative software prototypes",
        "Conducting feasibility and performance studies",
        "Translating research into real-world impact",
      ],
    },
  },
    {
    title: "Training & Capacity Building",
    content: {
      heading: "Training & Capacity Building",
      description:
        "We empower teams and individuals through specialized training programs designed to build technical expertise and digital confidence. Our sessions combine hands-on learning with real-world problem-solving to strengthen industry readiness.",
      points: [
        "Conducting AI and data analytics workshops",
        "Building workforce technical capabilities",
        "Designing customized learning programs",
        "Promoting continuous professional growth",
      ],
    },
  },
  {
    title: "Data Strategy & Analytics Consulting",
    content: {
      heading: "Data Strategy & Analytics Consulting",
      description:
        "We help organizations harness the power of data to make informed and strategic decisions. Our analytics experts design frameworks that transform raw data into actionable intelligence for improved efficiency and growth.",
      points: [
        "Creating data-driven business strategies",
        "Building predictive and visual analytics models",
        "Streamlining data collection and governance",
        "Empowering smarter decision-making through insights",
      ],
    },
  },
  {
    title: "Technical Advisory & Innovation Partnerships",
    content: {
      heading: "Technical Advisory & Innovation Partnerships",
      description:
        "We collaborate with clients to guide them through complex technology landscapes, from strategy to implementation. Our advisory team partners with innovators to co-create sustainable digital solutions that deliver measurable impact.",
      points: [
        "Offering expert technical consultation",
        "Building collaborative innovation ecosystems",
        "Supporting digital transformation initiatives",
        "Guiding implementation of emerging technologies",
      ],
    },
  },
];

const Section3: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const activeContent = industries[activeIndex].content;

  return (
  <section className="ai-industries-section">
  <h2 className="ai-heading" data-aos="fade-up">
  We Use AI to Drive Smarter   <span className="highlight1">Research and Transformative</span>  Insights.
  </h2>

  <p className="ai-subtitle" data-aos="fade-up">
    By strategically implementing AI, we continuously improve business
    processes, which lowers costs and increases efficiency.
  </p>

  <div className="ai-container">
    {/* Left Sidebar */}
    <div className="ai-sidebar" data-aos="fade-right" data-aos-duration="1000">
      {industries.map((item, index) => (
        <div
          key={index}
          className={`ai-tab ${activeIndex === index ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          {item.title}
        </div>
      ))}
    </div>

    {/* Right Content */}
    <div className="ai-content" data-aos="fade-left" data-aos-duration="1000">
      <h3>{activeContent.heading}</h3>
      <p>{activeContent.description}</p>
      <ul>
        {activeContent.points.map((point, i) => (
          <li key={i}>— {point}</li>
        ))}
      </ul>
    </div>
  </div>
</section>
  )
};

export default Section3;
