import React from 'react'
import Layout from "@/components/layout/Layout"
import Link from 'next/link'
import { ScrollTimeline } from '@/src/components/lightswind/scroll-timeline';
import BeamCircle from '@/src/components/lightswind/beam-circle';
import Section4 from './service';
import { FaInstagram,  FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Smartphone, Globe, BarChart3, Map, ShieldCheck } from "lucide-react";


import logo from "@/public/assets/imgs/template/dark-logo.png"
import Image from 'next/image'
import BenefitsSection from './section';
import ConsultingServices from './section';
import Section2 from './section2';

function page() {

   const stacks = [
	{
	  title: "Programming Language",
	  items: [
		{ name: "python", img: "/assets/imgs/template/python-removebg-preview.png" },
		{ name: "type", img: "/assets/imgs/template/type-removebg-preview.png" },
		{ name: "type", img: "/assets/imgs/template/jssss.png" },

		{ name: "java", img: "/assets/imgs/template/java-removebg-preview.png" },
		{ name: "flutter", img: "/assets/imgs/template/flutter.png" },
		{ name: "kotlin", img: "/assets/imgs/template/kotlin.png" },

		{ name: "swifty", img: "/assets/imgs/template/swifty.png" },
		{ name: "solidity", img: "/assets/imgs/template/solidity-removebg-preview.png" },

	  ],
	},
	{
	  title: "Front-End",
	  items: [
		{ name: "Next.js", img: "/assets/imgs/template/next-removebg-preview.png" },
		 { name: "react", img: "/assets/imgs/template/react-removebg-preview.png" },
		
		{ name: "streamlit", img: "/assets/imgs/template/streamlit-removebg-preview.png" },
		{ name: "leaf", img: "/assets/imgs/template/leaf.png" },
		{ name: "gis", img: "/assets/imgs/template/gis-removebg-preview.png" },
		{ name: "cesium", img: "/assets/imgs/template/cesiumgis.png" },
		{ name: "gis", img: "/assets/imgs/template/chART-removebg-preview.png" },


	   
	  ],
	},
	{
	  title: "Tools & Platforms",
	  items: [
	{ name: "arc gis", img: "/assets/imgs/template/arc-removebg-preview.png" },
		{ name: "aws", img: "/assets/imgs/template/aws-removebg-preview.png" },

		{ name: "express", img: "/assets/imgs/template/express-removebg-preview.png" },
		{ name: "google", img: "/assets/imgs/template/google-removebg-preview.png" },
		{ name: "netlify", img: "/assets/imgs/template/netlify-removebg-preview.png" },
	  { name: "nodes", img: "/assets/imgs/template/nodes-removebg-preview.png" },
	  { name: "powerbi", img: "/assets/imgs/template/powerbi-removebg-preview.png" },
	  { name: "andriod", img: "/assets/imgs/template/andriodd.png" },
	  { name: "flask", img: "/assets/imgs/template/flaskk.png" },
	  { name: "qgis", img: "/assets/imgs/template/qgiss.png" },
	  { name: "vercel", img: "/assets/imgs/template/vercell.png" },
	  { name: "vite", img: "/assets/imgs/template/vitee.png" },



	  
	

	  ],
	},
	{
	  title: "Database",
	  items: [
		{ name: "MongoDB", img: "/assets/imgs/template/mongodb.png" },
		{ name: "postgres", img: "/assets/imgs/template/postgres.png" },

		{ name: "SQL Server", img: "/assets/imgs/template/mysql-removebg-preview.png" },

		{ name: "gis", img: "/assets/imgs/template/sqlite-removebg-preview.png" },
		{ name: "ifps", img: "/assets/imgs/template/ipfs-removebg-preview.png" },

		{ name: "redis", img: "/assets/imgs/template/reedis.png" },
		{ name: "neo", img: "/assets/imgs/template/fire.png" },
		{ name: "wv", img: "/assets/imgs/template/snoe-removebg-preview.png" },
		{ name: "postgis", img: "/assets/imgs/template/postgre-removebg-preview.png" },
		{ name: "gis", img: "/assets/imgs/template/geo.png" },
		



	  ],
	},
  ];


 const events = [
  {
    title: "Mobile Application",
    icon: <Smartphone size={40} className=" text-[#af2025]" />,
    description:
      "We design and develop cross-platform mobile applications with intuitive interfaces, seamless performance, and secure integrations, ensuring a superior user experience across Android and iOS.",
  },
  {
    title: "Web Application",
    icon: <Globe size={40} className="\ text-[#af2025]" />,
    description:
      "Our web applications combine modern front-end frameworks and scalable backend architectures, delivering responsive, fast, and feature-rich solutions tailored to your business needs.",
  },
  {
    title: "Analytics Dashboard",
    icon: <BarChart3 size={40} className=" text-[#af2025]" />,
    description:
      "We build data-driven dashboards that visualize key metrics, providing real-time insights to enhance decision-making, monitor performance, and optimize operations.",
  },
  {
    title: "GIS Dashboard",
    icon: <Map size={40} className=" text-[#af2025]" />,
    description:
      "Our GIS dashboards transform spatial data into interactive visualizations, enabling geographical analysis, asset tracking, and smart planning for industries like logistics, environment, and infrastructure.",
  },
  {
    title: "Blockchain Development",
    icon: <ShieldCheck size={40} className=" text-[#af2025]"/>,
    description:
      "We create secure and transparent blockchain solutions, from smart contracts to decentralized dashboards, ensuring data integrity, traceability, and trust across digital ecosystems.",
  },
];
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
		 
		  <section className="box-faq-single-banner @@class">
			<div className="box-faq-single-banner-inner">
			  <div className="container">
				<h1 className="display-ag-2xl color-white">Product Engineering & Application Development</h1>
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
<Section4 />
 

		<div className='bgcolor'>

{/* 
  <ScrollTimeline
	events={events}
	title="Industry-Specific AI ML Development Solution We Deliver"
	subtitle="We develop tailored Artificial Intelligence and Machine Learning solutions designed for real-world impact across industries. From intelligent agents to bioinformatics pipelines and spatial intelligence — our solutions empower organizations with automation, accuracy, and innovatio"
	progressIndicator={true}
	cardAlignment="alternating"
	revealAnimation="fade"
  /> */}

 

   <Section2/>

   <ConsultingServices/>

  <section className="tech-stack-section py-16 text-center text-[#fafbec]">
	  <div className="max-w-6xl mx-auto px-6">
		{/* Title */}
		<h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fafbec]">
		  Technology Stack Our{" "}
		  <span className="text-highlight px-2 rounded-md text-[#fafbec] ">Application Developers </span>{" "}
		  Are Proficient In
		</h2>

		<p className="text-gray-300 mb-12 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
	   

Our developers specialize in modern frameworks and tools to build powerful web, mobile, and blockchain solutions. From cloud deployment to data-driven dashboards, we deliver secure, scalable, and innovative digital experiences.
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




		  <footer className='bgcolor'>
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

export default page