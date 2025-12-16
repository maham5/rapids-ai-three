"use client"
import Link from "next/link"

export default function Section1() {
  return (
    <section className="video-banner-section">
      {/* Background video */}
      <div className="video-background">
        <img
          src="/assets/imgs/template/head.gif"
          alt="Background animation"
          className="video-element"
        />
       
      </div>

      {/* Dark overlay */}
      <div className="video-overlay" />

      {/* Content */}
      <div className="video-content">
        <div className="container">
          <div className="banner-wrapper">
            <h1 className="banner-title" data-aos="fade-up">
              Making AI Rapidly <br className="d-none d-lg-block" />
              Accessible for Everyone
            </h1>
            <p className="banner-description" data-aos="fade-up">
              Welcome to RapidsAI! We're a passionate team, transforming ideas
              into reality with our expertise in AI-based software development
            </p>

            <Link href="/contact">
              <div className="">
                <button className="rainbow-button">
                  Get Started
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}