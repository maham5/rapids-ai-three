"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/imgs/template/dark-logo.png";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import badge from "@/public/assets/imgs/template/logo1.png";
import badge2 from "@/public/assets/imgs/template/logo2.png";
import emailjs from "emailjs-com";

export default function Contact() {
  // 🔐 EmailJS (hardcoded as requested)
  const EMAILJS_SERVICE_ID = "service_0y155z9";
  const EMAILJS_TEMPLATE_ID = "template_z8209hz";
  const EMAILJS_PUBLIC_KEY = "q1nciNYtQDcyT7bFC";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    subject: "",
    message: "",
  });

  // ✅ MULTI-SELECT STATES
  const [selectedNeed, setSelectedNeed] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ toggle helper (multi-select)
  const toggleSelection = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ validation
    if (
      selectedNeed.length === 0 ||
      selectedBudget.length === 0 ||
      selectedIndustry.length === 0
    ) {
      alert("Please select Digital Need, Budget, and Industry");
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      company: formData.company,
      subject: formData.subject,
      message: formData.message || "No message provided",
      digital_need: selectedNeed.join(", "),
      budget: selectedBudget.join(", "),
      industry: selectedIndustry.join(", "),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");

      // ✅ correct reset
      setFormData({
        name: "",
        email: "",
        contact: "",
        company: "",
        subject: "",
        message: "",
      });
      setSelectedNeed([]);
      setSelectedBudget([]);
      setSelectedIndustry([]);
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Failed to send message. Please try again.");
    }
  };

  const digitalNeeds = ["Website", "Mobile", "DevOps", "Blockchain", "Other"];
  const budgets = [
    "Up to $20K",
    "$20K - $50K",
    "$50K - $100K",
    "$100K - $200K",
    "$200K or More",
  ];
  const industries = ["Finance", "Healthcare", "Education", "Cryptography", "Other"];

  return (
    <>
      <Layout headerStyle={1}>
        <section className="box-faq-single-bannerds @@class">
          <div className="box-faq-single-banner-inner">
            <div className="container">
              <h1 className="display-ag-2xl color-white">Contact Us</h1>
              <div className="box-breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <span>Contact Us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="form-section">
          <div className="text-center form-heading">
            <p className="title-line-both" data-aos="fade-up">
              Contact US
            </p>
          </div>

          <form className="contact-form1" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="form-row">
              <div className="form-group">
                <label>Name <span>*</span></label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email <span>*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            {/* Row 2 */}
            <div className="form-row">
              <div className="form-group">
                <label>Contact Number <span>*</span></label>
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Company Name <span>*</span></label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required />
              </div>
            </div>

            {/* Subject */}
            <div className="form-group full">
              <label>Subject <span>*</span></label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            {/* Digital Need */}
            <div className="form-group full">
              <label>What is your Digital Need? <span>*</span></label>
              <div className="options">
                {digitalNeeds.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={selectedNeed.includes(item) ? "selected" : ""}
                    onClick={() => toggleSelection(item, selectedNeed, setSelectedNeed)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="form-group full">
              <label>Your Estimated Budget? <span>*</span></label>
              <div className="options">
                {budgets.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={selectedBudget.includes(item) ? "selected" : ""}
                    onClick={() => toggleSelection(item, selectedBudget, setSelectedBudget)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Industry */}
            <div className="form-group full">
              <label>Select your Industry <span>*</span></label>
              <div className="options">
                {industries.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={selectedIndustry.includes(item) ? "selected" : ""}
                    onClick={() => toggleSelection(item, selectedIndustry, setSelectedIndustry)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="form-group full">
              <label>Message (Optional)</label>
              <textarea name="message" value={formData.message} onChange={handleChange} />
            </div>

            <div className="glow-border">
              <button className="glow-button" type="submit">
                Contact Us
              </button>
            </div>
          </form>

          <footer>
            <Image src={logo} alt="logo" width={150} />
            <p>Copyright © 2025 <a href="/">RapidsAI</a>. All rights reserved.</p>

            <div className="social-icons">
              <FaInstagram />
              <FaLinkedin />
              <FaFacebook />
            </div>

            <div className="flex items-center gap-2">
              <Image src={badge} alt="badge" width={140} height={100} />
              <Image src={badge2} alt="badge" width={140} height={100} />
            </div>
          </footer>
        </section>
      </Layout>
    </>
  );
}
