"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { FaBrain, FaUsers, FaHandshake, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { GiPartyPopper } from "react-icons/gi";
import CountUp from "react-countup";

// -------------------- CUSTOM HOOK --------------------
function useIsVisible(ref: React.RefObject<HTMLDivElement>, threshold = 0.2) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isVisible;
}

// -------------------- MAIN COMPONENT --------------------
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
    { icon: <FaUsers />, number: 1000, label: "Global Clients Served" },
    { icon: <FaGlobe />, number: 2, label: "Countries of Presence" },
  ];

  // -------------------- CREATE REFS --------------------
  const topRef0 = useRef<HTMLDivElement>(null);
  const topRef1 = useRef<HTMLDivElement>(null);
  const topRef2 = useRef<HTMLDivElement>(null);
  const topRef3 = useRef<HTMLDivElement>(null);

  const bottomRef0 = useRef<HTMLDivElement>(null);
  const bottomRef1 = useRef<HTMLDivElement>(null);
  const bottomRef2 = useRef<HTMLDivElement>(null);
  const bottomRef3 = useRef<HTMLDivElement>(null);

  // -------------------- CALL HOOKS AT TOP LEVEL --------------------
  const topVisible0 = useIsVisible(topRef0);
  const topVisible1 = useIsVisible(topRef1);
  const topVisible2 = useIsVisible(topRef2);
  const topVisible3 = useIsVisible(topRef3);

  const bottomVisible0 = useIsVisible(bottomRef0);
  const bottomVisible1 = useIsVisible(bottomRef1);
  const bottomVisible2 = useIsVisible(bottomRef2);
  const bottomVisible3 = useIsVisible(bottomRef3);

  const topRefs = [topRef0, topRef1, topRef2, topRef3];
  const topVisibility = [topVisible0, topVisible1, topVisible2, topVisible3];

  const bottomRefs = [bottomRef0, bottomRef1, bottomRef2, bottomRef3];
  const bottomVisibility = [bottomVisible0, bottomVisible1, bottomVisible2, bottomVisible3];

  return (
    <section className="quickfacts-section">
      <h2 className="quickfacts-title">
        Key Insights About <span className="highlight">Who We Are</span>
      </h2>

      <div className="quickfacts-container">

        {/* -------------------- TOP ROW -------------------- */}
        <div className="quickfacts-row">
          {factsTop.map((fact, i) => (
            <div key={i} className="quickfact-card" ref={topRefs[i]}>
              <div className="icon">{fact.icon}</div>

              <div className="number">
                {topVisibility[i] ? <CountUp end={fact.number} duration={2} /> : 0}+
              </div>

              <p>{fact.label}</p>
            </div>
          ))}
        </div>

        {/* -------------------- CENTER -------------------- */}
        <div className="highlight-card">
          <h3>2022</h3>
          <p>Founded in the Year</p>
        </div>

        {/* -------------------- BOTTOM ROW -------------------- */}
        <div className="quickfacts-row">
          {factsBottom.map((fact, i) => (
            <div key={i} className="quickfact-card" ref={bottomRefs[i]}>
              <div className="icon">{fact.icon}</div>

              <div className="number">
                {bottomVisibility[i] ? <CountUp end={fact.number} duration={2} /> : 0}+
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