"use client";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react";
import Image from "next/image"
import logo from "@/public/assets/imgs/template/dark-logo.png"
import { FaInstagram,  FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import badge from "@/public/assets/imgs/template/logo1.png"
export default function Contact() {
	 const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    subject: "",
    message: "",
  });

  const [selectedNeed, setSelectedNeed] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", { ...formData, selectedNeed, selectedBudget, selectedIndustry });
  };

  const digitalNeeds = ["Website", "Mobile", "DevOps", "Blockchain", "Other"];
  const budgets = ["Up to $20K", "$20K - $50K", "$50K - $100K", "$100K - $200K", "$200K or More"];
  const industries = ["Finance", "Healthcare", "Education", "Cryptography", "Other"];

	return (
		<>

			<Layout headerStyle={1} >

				{/* prettier-ignore */}
				{/* Blog Sidebar Section 1 */}
				<section className="box-faq-single-banner @@class">
					<div className="box-faq-single-banner-inner">
						<div className="container">
							<h1 className="display-ag-2xl color-white">Contact Us</h1>
							<div className="box-breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link href="#">Home</Link>
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
							<p className="title-line-both " data-aos="fade-up">Contact US</p>
							
              </div>

					 <form className="contact-form1" onSubmit={handleSubmit}>
      {/* Row 1 */}
      <div className="form-row">
        <div className="form-group">
          <label>Name <span>*</span></label>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email <span>*</span></label>
          <input type="email" name="email" placeholder="Your Mail" value={formData.email} onChange={handleChange} required />
        </div>
      </div>

      {/* Row 2 */}
      <div className="form-row">
        <div className="form-group">
          <label>Contact Number <span>*</span></label>
          <input type="text" name="contact" placeholder="Number" value={formData.contact} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Company Name <span>*</span></label>
          <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required />
        </div>
      </div>

      {/* Subject */}
      <div className="form-group full">
        <label>Subject <span>*</span></label>
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
      </div>

      {/* Digital Need */}
      <div className="form-group full">
        <label>What is your Digital Need? <span>*</span></label>
        <div className="options">
          {digitalNeeds.map((item) => (
            <button
              type="button"
              key={item}
              className={selectedNeed === item ? "selected" : ""}
              onClick={() => setSelectedNeed(item)}
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
              className={selectedBudget === item ? "selected" : ""}
              onClick={() => setSelectedBudget(item)}
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
              className={selectedIndustry === item ? "selected" : ""}
              onClick={() => setSelectedIndustry(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="form-group full">
        <label>Message (Optional)</label>
        <textarea
          name="message"
          placeholder="Write your message here"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

     <div className="glow-border">
  <button className="glow-button">Contact Us</button>
</div>
    </form>


	<footer className="form-section">
   <Image src={logo}
   alt="hello"
   width={150}
   />

	<p>Copyright © 2025 <a href="/">RapidsAI</a>. All rights reserved.</p>
	
 <Image 
        src={badge} 
        className="py-2"
        alt="Certification Badge"
    />
	 <div className="social-icons">
      <a href="https://www.instagram.com/rapidsai/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
     
      <a href="https://www.linkedin.com/company/rapidsai" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a href="https://www.facebook.com/rapidsaii/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={24} />
      </a>
    </div>
</footer>

  
				</section>
		




			</Layout >
		</>
	)
}