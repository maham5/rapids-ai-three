'use client'
import Layout from "@/components/layout/Layout"
import logo from "@/public/assets/imgs/template/dark-logo.png"
import Image from 'next/image'
import badge2 from "@/public/assets/imgs/template/logo2.png"
import Link from "next/link"
import Mainpage from "./section1"
import Section2 from "./section2"
import badge from "@/public/assets/imgs/template/logo1.png"
import { FaInstagram,  FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import Section3 from "./section3"

export default function Services() {


	return (
		<>

			

					<Layout headerStyle={1}  >
				  
						  {/* prettier-ignore */}
						  {/* Blog Sidebar Section 1 */}
						 
						  <section className="box-faq-single-banner @@class">
							<div className="box-faq-single-banner-inner">
							  <div className="container">
								<h1 className="display-ag-2xl color-white">Consulting & Research</h1>
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
						 
						  <Section2/>
				
<Mainpage/>
<Section3/>

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
		  
			</Layout >
		</>
	)
}