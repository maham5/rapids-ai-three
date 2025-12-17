import React from 'react'
import Layout from "@/components/layout/Layout"
import Link from 'next/link'
import { ScrollTimeline } from '@/src/components/lightswind/scroll-timeline';
import badge2 from "@/public/assets/imgs/template/logo2.png"
import BeamCircle from '@/src/components/lightswind/beam-circle';
import { Bot, Globe, Camera, Cpu, TrendingUp } from "lucide-react";
import Section3 from './about-service';
import { FaInstagram,  FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

import badge from "@/public/assets/imgs/template/logo1.png"
import logo from "@/public/assets/imgs/template/dark-logo.png"
import Image from 'next/image'

function page() {

   const stacks = [
    {
      title: "Programming Language",
      items: [
        { name: "Java", img: "/assets/imgs/template/python-removebg-preview.png" },
        { name: "Python", img: "/assets/imgs/template/type-removebg-preview.png" },
        { name: "C++", img: "/assets/imgs/template/java-removebg-preview.png" },
        { name: "C#", img: "/assets/imgs/template/go-removebg-preview.png" },
        { name: "JavaScript", img: "/assets/imgs/template/c.png" },
      ],
    },
    {
      title: "Front-End",
      items: [
        { name: "Next.js", img: "/assets/imgs/template/next-removebg-preview.png" },
         { name: "react", img: "/assets/imgs/template/react-removebg-preview.png" },
        { name: "sevelte", img: "/assets/imgs/template/svellete-removebg-preview.png" },
        { name: "streamlit", img: "/assets/imgs/template/streamlit-removebg-preview.png" },
        { name: "leaf", img: "/assets/imgs/template/leaf.png" },
        { name: "gis", img: "/assets/imgs/template/gis-removebg-preview.png" },
       
      ],
    },
    {
      title: "Frameworks",
      items: [
        { name: "lang graph", img: "/assets/imgs/template/langgraph-removebg-preview.png" },
        { name: "lang chain", img: "/assets/imgs/template/langchain-removebg-preview.png" },

        { name: "hugging face", img: "/assets/imgs/template/hug.png" },
        { name: "TensorFlow", img: "/assets/imgs/template/tensor-removebg-preview.png" },
        { name: "crewai", img: "/assets/imgs/template/crewai-removebg-preview.png" },
      { name: "pytorch", img: "/assets/imgs/template/pytorch-removebg-preview.png" },
      { name: "openai", img: "/assets/imgs/template/open-removebg-preview.png" },
      { name: "gpt5", img: "/assets/imgs/template/gpt5-removebg-preview.png" },
      { name: "detecttion2", img: "/assets/imgs/template/dtect.png" },
    

      ],
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", img: "/assets/imgs/template/mongodb.png" },
        { name: "postgres", img: "/assets/imgs/template/postgres.png" },

        { name: "SQL Server", img: "/assets/imgs/template/mysql-removebg-preview.png" },

        
        { name: "redis", img: "/assets/imgs/template/reedis.png" },
        { name: "neo", img: "/assets/imgs/template/neo-removebg-preview.png" },
        { name: "wv", img: "/assets/imgs/template/wv-removebg-preview.png" },
        { name: "postgis", img: "/assets/imgs/template/postgre-removebg-preview.png" },
        { name: "gis", img: "/assets/imgs/template/geo.png" },


      ],
    },
  ];


 const events = [
   {
   
    title: "Generative & Agentic AI",
    icon: <Bot size={40} className=" text-[#af2025]"/>,
    description:
    "We design intelligent systems that think, learn, and create autonomously. From AI agents to content generation, our solutions leverage advanced language models and automation to enhance creativity, efficiency, and decision-making across industries — driving innovation through adaptive, human-like intelligence."
   },
  {
   
    title: "GeoSpatial Intelligence",
     icon: <Globe size={40} className=" text-[#af2025]"/>,
    description: "We utilize AI-driven spatial analytics to extract valuable insights from satellite imagery, maps, and geolocation data. Our solutions empower smarter decisions in logistics, urban planning, and environmental management by turning spatial data into actionable intelligenc"
  },
  {
    
    title: "Computer Vision Systems",
    icon: <Camera size={40} className=" text-[#af2025]"/>,
    description: "Our computer vision technologies enable machines to analyze and understand visual data with precision. From facial recognition to defect detection and image classification, we automate complex visual tasks to boost accuracy, speed, and operational intelligence." 
  },
   {
    // year: "2021",
    title: "Bioinformatics & Precision AI",
     icon: <Cpu size={40} className=" text-[#af2025]"/>,
    description: "We combine artificial intelligence with bioinformatics to drive innovation in healthcare and life sciences. Our AI models analyze genomic and clinical data for disease prediction, drug discovery, and personalized medicine — enabling smarter, data-driven healthcare solutions."  
  },
   {
    // year: "2021",
    title: "Predictive & Decision Intelligence",
  icon: < TrendingUp size={40} className=" text-[#af2025]"/>,
    description: "We develop AI-powered predictive systems that transform data into foresight. Our solutions forecast trends, detect risks, and optimize strategies, helping businesses make confident, data-backed decisions that enhance efficiency and long-term growth."
   }
]
  const stats = [
    { icon: "🤖", number: "3 +", label: "Years Experience" },
    { icon: "👨‍💻", number: "27 +", label: "Professionals" },
    { icon: "🚀", number: "65 +", label: "Projects Delivered" },
    { icon: "💡", number: "5 +", label: "AI Solutions" },
  ];
  return (

	<Layout headerStyle={1}  >
  
          {/* prettier-ignore */}
          {/* Blog Sidebar Section 1 */}
         
          <section className="box-faq-single-bannerai @@class">
            <div className="box-faq-single-banner-inner">
              <div className="container">
                <h1 className="display-ag-2xl color-white">AI & Data Intelligence</h1>
                <div className="box-breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <span>Services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* beam circle */}

{/* about services */}
<Section3 />

        <div className='bgcolor'>


  <ScrollTimeline
    events={events}
    title="Industry-Specific AI & Data Intelligence  Solutions We Deliver"
    subtitle="Our Industry-Specific AI & Data Intelligence Solutions are designed to meet the unique needs of each sector we serve.
From healthcare and finance to logistics and smart cities, we build custom AI systems that turn data into actionable insights.
By combining domain expertise with advanced machine learning, we help organizations automate processes, predict outcomes, and make smarter decisions with confidence."
    progressIndicator={true}
    cardAlignment="alternating"
    revealAnimation="fade"
  />

  <section className="tech-stack-section py-16 text-center text-[#fafbec]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fafbec]">
          Technology Stack Our{" "}
          <span className="text-highlight px-2 rounded-md text-[#fafbec] ">AI & Data Intelligence Experts</span>{" "}
          Are Proficient In
        </h2>

        <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
       

Our AI & Data Intelligence experts leverage Python, TensorFlow, PyTorch, Keras, and cloud platforms like AWS and Google Cloud to build intelligent, scalable solutions.
We develop LLMs, Agentic AI, Computer Vision, GeoSpatial, and Bioinformatics systems using advanced frameworks and data-driven models.
This robust tech stack empowers us to deliver precise, adaptive, and high-performing AI solutions across diverse industries.
        </p>

        {/* Stack Sections */}
        {stacks.map((stack, index) => (
		  <div key={index} className="mb-12">
			<h3 className="text-xl font-semibold mb-6 text-[#fafbec]">
			  {stack.title}
			</h3>
			<div className="flex flex-wrap justify-center gap-4 md:gap-6">
			  {stack.items.map((item, i) => (
				<div
				  key={i}
				  className="tech-card w-28 h-20 md:w-36 md:h-28 flex flex-col items-center justify-center"
				>
				  <img
					src={item.img}
					alt={item.name}
				  
					className="w-20 h-20 md:w-32 md:h-24 object-contain"
				  />
				</div>
			  ))}
			</div>
		  </div>
		))}
	  </div>
	</section>

        </div>




          
                    <footer>
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
                {/* <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} />
                </a> */}
              </div>
            <div className="flex items-center gap-2">
            <Image
              src={badge}
              alt="Certification Badge"
             width={140}
    height={100}
    className="py-2 w-[140px] h-[100px] object-contain"
            />
          
            <Image
              src={badge2}
              alt="Certification Badge"
             width={140}
    height={100}
    className="py-2 w-[140px] h-[100px] object-contain"
            />
          </div>
          
                </footer>
          </Layout>
  
  )
}

export default page