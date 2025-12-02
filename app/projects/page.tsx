'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import Image from "next/image";
import logo from "@/public/assets/imgs/template/dark-logo.png"
  // Import the CSS file

const blogs = [
  {
    id: 1,
    img: "/assets/imgs/pages/blog/blog.png",
    title: "Webdoc Scripted Conversational Bot for Mobile Insurance Sales",
    description: "Rapids AI built an Urdu-first hybrid conversational bot for Webdoc and Telenor that intuitively sells mobile insurance add-ons, streamlines onboarding, answers queries, and boosts conversion through an optimized, low-friction chat experience.",
  },
  
  {
    id: 2,
    img: "/assets/imgs/pages/blog/blog2.png",
    title: "JazzCash Accident Insurance Conversational Call Bot",
    description: "Rapids AI developed a fully conversational, Urdu-first call bot for JazzCash insurance customers that understands natural speech, assists in reporting accidents, initiating claims, and requesting emergency support, and replaces manual helplines by collecting all essential details without rigid scripts.",
  },
  {
    id: 3,
    img: "/assets/imgs/pages/blog/blog3.png",
    title: "RapidsAI Conversational Voice & Chat Bot for Service Inquiry & Appointment Booking",
    description: "Rapids AI developed an Urdu-first conversational assistant that understands free-form natural language to handle service inquiries, answer questions about offerings, and automate appointment booking and demo requests with human-like interaction across channels.",
  },
  {
    id: 4,
    img: "/assets/imgs/pages/blog/blog4.png",
    title: "Weather-Integrated Multilingual Agentic Chatbot (Rapids AI x WeatherWalay)",
    description: "Rapids AI partnered with WeatherWalay to build a multilingual, agentic chatbot that delivers hyper-local weather insights, personalized alerts, and agricultural guidance in English, Urdu, and Roman Urdu, using real-time API calls for accurate conditions, forecasts, and risk updates.",
  },
  {
    id: 5,
    img: "/assets/imgs/pages/blog/blog5.png",
    title: "Custom Voice Generation & AI Lip-Sync Video Re-Dubbing (Talent Labs)",
    description: "Rapids AI built a custom voice-generation and lip-sync system for Talent Labs that creates natural, perfectly synchronized videos by generating new voice-overs in the speaker’s own voice and reanimating facial movements to match any provided script.",
  },
  {
    id: 6,
    img: "/assets/imgs/pages/blog/blog6.png",
    title: "AI Video-to-Video Translation & Lip-Sync Engine (Talent Labs)",
    description: "Rapids AI built a multilingual AI video-to-video translation system that translates speech, clones voices, re-dubs audio, and performs AI lip-sync to produce natural, identity-preserving localized videos from Estonian (and other languages) into English or any target language.",
  },
    {
    id: 7,
    img: "/assets/imgs/pages/blog/blog8.png",
    title: "Surgeonix — AI Surgical Information Chatbot",
    description: "Rapids AI built Surgeonix, a medical information chatbot that provides clear, validated answers on surgeries, procedures, risks, preparation, and recovery through natural multi-turn conversations to help patients make informed decisions.",
  },
  
  {
    id: 8,
    img: "/assets/imgs/pages/blog/blog8.png",
    title: "SuiteBot — Smart Hotel Concierge & Booking Assistant",
    description: "Rapids AI built SuiteBot, a hotel AI concierge that provides friendly 24/7 assistance by answering guest queries, managing room bookings, taxi requests, hotel services, amenities, and offering local activity recommendations.",
  },
  {
    id: 9,
    img: "/assets/imgs/pages/blog/blog9.png",
    title: "Dreamify — AI-Based Dream Analyzer",
    description: "Rapids AI created Dreamify, an AI assistant that analyzes dreams with religion-specific interpretations, asking clarifying questions and providing culturally-aware, contextual insights aligned with the user’s beliefs.",
  },
  {
    id: 10,
    img: "/assets/imgs/pages/blog/blog.png",
    title: "German–English Bilingual Voice AI Assistant",
    description: "Rapids AI developed a bilingual (German-English) AI voice assistant for AUD BAU UG that automates inbound calls, handles code-mixed speech, manages service queries, and supports real-time dynamic call flows, reducing reliance on human agents.",
  },
  {
    id: 11,
    img: "/assets/imgs/pages/blog/blog2.png",
    title: "Enterprise Customer Support Conversational AI Platform",
    description: "Rapids AI built a multi-channel enterprise AI support platform integrated with CRM and Helpdesk systems. The system automates ticket categorization, customer replies, and support journeys using LLM reasoning and RAG pipelines.",
  },
  {
    id: 12,
    img: "/assets/imgs/pages/blog/blog3.png",
    title: "Corporate Website + AI Conversational Bot Solution",
    description: "Rapids AI delivered a combined solution consisting of a fully responsive corporate website and an intelligent AI chatbot handling leads, inquiries, and automated customer conversations tuned for the company’s services.",
  },
  {
    id: 13,
    img: "/assets/imgs/pages/blog/blog4.png",
    title: "Smart Hospitality Conversational AI Assistants",
    description: "Rapids AI created a conversational hospitality assistant that supports hotel guests with room requests, recommendations, and smart-room controls through bilingual (English–Dutch) natural conversation.",
  },
  {
    id: 14,
    img: "/assets/imgs/pages/blog/blog5.png",
    title: "Antix Realtime Speech — Live Transcription, Translation & Subtitles (Mic/Tab/URL/File)",
    description: "Rapids AI built a real-time speech transcription and translation web app for Antix Digital that ingests audio from multiple sources to provide live speech-to-text, multi-language translation, and synchronized subtitles for professional broadcasts and live events.",
  },
  {
    id: 15,
    img: "/assets/imgs/pages/blog/blog6.png",
    title: "Live US Senate Captioning ASR API for Broadcast Encoder",
    description: "Rapids AI created an open-source Speech-to-Text API for Antix Digital’s StreamZ Live 9000EX that generates real-time captions for a Southern U.S. Senator’s live streams, reinjects them into the broadcast, and archives text for compliance and future reference.",
  },
 


]

export default function NewsGrid() {
  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(blogs.length / itemsPerPage)

  return (
    <Layout headerStyle={1} footerStyle={1}>

			<section className="box-faq-single-banner @@class">
					<div className="box-faq-single-banner-inner">
						<div className="container">
							<h1 className="display-ag-2xl color-white">Projects</h1>
							<div className="box-breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link href="/">Home</Link>
									</li>
									<li className="breadcrumb-item">
										<span>Projects</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
      <section className="box-section box-contact-section-2 bgcolor">
        <div className="container">
          <div className="row">
            {currentItems.map((blog) => (
              <div key={blog.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card-blog">
                  {/* Image */}
                  <div className="card-image">
                    <Link href="">
                      <img src={blog.img} alt={blog.title} />
                    </Link>
                  </div>

                  {/* Title & Description */}
                  <div className="card-body">
                    <Link href="/news-details" className="card-title1">
                      {blog.title}
                    </Link>
                    <p className="card-description">{blog.description}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination-container">
            <button
              className="page-btn"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              ◀ Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="page-btn"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next ▶
            </button>
          </div>
        </div>
      </section>
	  <footer className="bgcolor">
			   <Image src={logo}
			   alt="hello"
			   width={150}
			   />
			
				<p>Copyright © 2025 <a href="/">RapidsAI</a>. All rights reserved.</p>
				
			
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


    </Layout>
  )
}

