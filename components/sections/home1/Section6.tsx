"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import ModalVideo from "react-modal-video";
import dynamic from "next/dynamic";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

const Map = dynamic(() => import("./Section10"), {
  ssr: false,
});

export default function Section6() {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Loading");

    emailjs
      .sendForm(
        "service_0y155z9",
        "template_dfscj0b",
        e.currentTarget,          // ✅ typed correctly
        "q1nciNYtQDcyT7bFC"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          alert("Message Sent Successfully!");
          console.log(result.text);
        },
        (error: EmailJSResponseStatus) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Side - Form */}
          <div className="contact-form-wrapper">
            <span className="contact-subtitle">Contact Us</span>
            <h2 className="contact-title">Let's Get In Touch</h2>

            <form onSubmit={sendEmail} className="contact-form">
              <div className="input-row1">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input-field"
                  name="name"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input-field"
                  name="phone"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address Here"
                className="input-field"
                name="email"
              />

              <select className="input-field" name="budget">
                <option>Estimated Budget</option>
                <option>$500 - $1000</option>
                <option>$1000 - $5000</option>
                <option>$5000+</option>
              </select>

              <select className="input-field" name="industry">
                <option>Industry</option>
                <option>IT</option>
                <option>Health</option>
                <option>Education</option>
              </select>

              <textarea
                rows={4}
                placeholder="Message Here"
                className="input-field"
                name="message"
              ></textarea>

              <div className="glow-border">
                <button className="glow-button" type="submit">
                  Contact Us
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Map */}
          <div className="contact-map">
            <Map />
          </div>
        </div>
      </section>
    </>
  );
}
