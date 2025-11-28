"use client";
import React from "react";
import { FaBrain, FaGamepad, FaUsers, FaHandshake, FaGlobe , FaMobileAlt } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { MdCalendarToday } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const QuickFacts = () => {
  const factsTop = [
    { icon: <FaBrain />, number: 50, label: "AI Solutions Delivered" },
    { icon: <FaUsers />, number: 200, label: "Software Projects Completed" },
    { icon: <SiBlockchaindotcom />, number: 10, label: "Blockchain Systems Built" },
    { icon: <FaMobileAlt />, number: 50, label: "Digital Experiences Designed" },
  ];

  const factsBottom = [
    { icon: <GiPartyPopper />, number: 90, label: "Client Retention Rate" },
    { icon: <FaHandshake />, number: 20, label: "Strategic Partnerships" },
    { icon: <FaUsers />, number: 250, label: "Global Clients Served" },
    { icon: <FaGlobe />, number: 2, label: "Countries of Presence" },
  ];

  return (
    <section className="quickfacts-section">
      <h2 className="quickfacts-title">
        Key Insights About <span className="highlight">Who We Are</span>
      </h2>

      <div className="quickfacts-container">
        {/* Top Row */}
        <div className="quickfacts-row">
          {factsTop.map((fact, i) => (
            <div key={i} className="quickfact-card">
              <div className="icon">{fact.icon}</div>

              {/* ✅ VisibilitySensor wrapped in a div */}
              <div className="number">
                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div>
                      {isVisible ? <CountUp end={fact.number} duration={2} /> : 0}+
                    </div>
                  )}
                </VisibilitySensor>
              </div>

              <p>{fact.label}</p>
            </div>
          ))}
        </div>

        {/* Center Highlight Card */}
        <div className="highlight-card">
          <div className="icon">
           
          </div>
          <h3>2022</h3>
          <p>Founded in the Year</p>
        </div>

        {/* Bottom Row */}
        <div className="quickfacts-row">
          {factsBottom.map((fact, i) => (
            <div key={i} className="quickfact-card">
              <div className="icon">{fact.icon}</div>

              <div className="number">
                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div>
                      {isVisible ? <CountUp end={fact.number} duration={2} /> : 0}+
                    </div>
                  )}
                </VisibilitySensor>
              </div>

              <p>{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
