'use client'
import CountUp from 'react-countup'
import Layout from "@/components/layout/Layout"
import { sliderGroup2 } from '@/util/swiperOptions'
import { FaInstagram,  FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import badge from "@/public/assets/imgs/template/logo1.png"
import badge2 from "@/public/assets/imgs/template/logo2.png"
import logo from "@/public/assets/imgs/template/dark-logo.png"

import { sliderGroup3 } from '@/util/swiperOptions'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import Image from 'next/image';
// import React, { useEffect } from "react";







import img1 from "@/public/assets/imgs/template/cth.png";
import img2 from "@/public/assets/imgs/template/goodf.png";

import img3 from "@/public/assets/imgs/template/uppww.png";
import img4 from "@/public/assets/imgs/template/fivr.png";
import img5 from "@/public/assets/imgs/template/link.png";
import img6 from "@/public/assets/imgs/template/7p.png";

import img8 from "@/public/assets/imgs/template/6p.png";
import img9 from "@/public/assets/imgs/template/5p.png";
import img11 from "@/public/assets/imgs/template/2p.png";
import img12 from "@/public/assets/imgs/template/3p.png";
import img13 from "@/public/assets/imgs/template/4p.png";
import QuickFacts from './facts';





// const slides = [
//   {
//     title: "SUSTAINABLE",
//     heading: "GROWTH WITH AI",
//     text: "We build AI Solutions that can drive sustainable growth by creating innovative solutions, optimizing production processes, and enabling personalized experiences, thereby reducing resource consumption and enhancing efficiency across various sectors.",
//     img: "https://via.placeholder.com/400x280.png?text=Slide+1",
//   },
//   {
//     title: "INNOVATION",
//     heading: "TRANSFORMING INDUSTRIES",
//     text: "Our AI-powered innovations are designed to transform industries, improve productivity, and create new opportunities for growth and efficiency.",
//     img: "https://via.placeholder.com/400x280.png?text=Slide+2",
//   },
//   {
//     title: "EFFICIENCY",
//     heading: "SMARTER SOLUTIONS",
//     text: "We focus on delivering smarter AI solutions that enhance decision-making, reduce waste, and streamline workflows for organizations worldwide.",
//     img: "https://via.placeholder.com/400x280.png?text=Slide+3",
//   },
// ];

const logos = [img1,img2,img3,img4,img5,img6,img8,img9, img11 , img12 , img13];

function Row({ prefix = "A" }) {
  return (
    <div className="row-container">
      {logos.map((src, i) => (
        <div key={`${prefix}-${i}`} className="logo-wrapper">
          <Image
            src={src}
            alt={`Logo ${i + 1}`}
            width={80}
            height={80}
            className="logo-image"
          />
        </div>
      ))}
    </div>
  );
}
export default function AboutUs() {
const [isOpen, setOpen] = useState(false)

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>

				{/* prettier-ignore */}
				{/* Blog Sidebar Section 1 */}
				<section className="box-faq-single-banner @@class">
					<div className="box-faq-single-banner-inner">
						<div className="container">
							<h1 className="display-ag-2xl color-white">About Us</h1>
							<div className="box-breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link href="/">Home</Link>
									</li>
									<li className="breadcrumb-item">
										<span>About Us</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/* About Us 2 Section 1 */}
				<section className="box-section2 box-about-us-2">
					<div className="container" data-aos="fade-up">
						<div className="row">
							<div className="col-lg-6">
								<div className="box-image-about-us-2">
									<div className="image-about-1">
										<img className="wow img-custom-anim-left" src="/assets/imgs/template/about1.jpg" alt="Vatech" />
									</div>
									<div className="image-about-2">
										<img className="wow img-custom-anim-right" src="/assets/imgs/template/about2.jpg" alt="Vatech" />
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="box-info-about-top">
									<div className="banner-small-title-black ">About us</div>
									<h2 className="heading-ag-3xl  mb-3">
										Building Intelligent Vision<br className="d-none d-lg-block" />
										 for Your Business
									</h2>
								</div>
								<div className="box-info-about-line">
									<p className="mb-20 paragraph-rubik-r neutral-1700">We are a forward-thinking team passionate about Computer Vision, Artificial Intelligence, and Machine Learning. By blending expertise with innovation, we craft intelligent software solutions designed to match your unique business needs. At RapidsAI, we don’t just build technology — we transform ideas into reality.</p>
									
										
									
								</div>
							</div>
						</div>
					</div>
				</section>


				<QuickFacts/>
				<section className="position-relative overflow-hidden box-testimonial-2">
								<div className="container" data-aos="fade-up">
									<div className="row position-relative align-items-end">
										<div className="col-lg-9">
											<h6 className="banner-small-title-white mb-20" data-aos="fade-up">Mission and Vision</h6>
											<h3 className="heading-ag-3xl color-white" data-aos="fade-up">
												Our Mission and Vision
												
											</h3>
										</div>
										<div className="col-lg-3 text-end">
											
										</div>
									</div>
									<div className="box-testimonials-lists mt-5" data-aos="fade-up">
										<div className="box-swiper">
										
												<div className="swiper-wrapper">
												
														<div className="card-testimonials-2">
															<div className="card-author">
																<div className="author-image">
																	<img src="/assets/imgs/pages/home2/mison.png" alt="Vatech" />
																</div>
																<div className="author-info">
																	
																	<h5 className="sub-heading-ag-xl">Mission</h5>
														
																</div>
															</div>
															<div className="comment-text">We collaborate with clients to develop software solutions that contribute to making the world a better place.</div>
														</div>
													
													
														<div className="card-testimonials-2">
															<div className="card-author">
																<div className="author-image1">
																	<img src="/assets/imgs/pages/home2/vison.png" alt="Vatech" />
																</div>
																<div className="author-info">
																	
																	<h5 className="sub-heading-ag-xl">Vision</h5>
																	
																</div>
															</div>
															<div className="comment-text1">Our company’s vision encompasses the advancement of global development on a significant scale.</div>
														</div>
											
											
												
														<div className="card-testimonials-2">
															<div className="card-author">
																<div className="author-image">
																	<img src="/assets/imgs/pages/home2/value.png" alt="Vatech" />
																</div>
																<div className="author-info">
																	
																	<h5 className="sub-heading-ag-xl">Values</h5>
																
																</div>
															</div>
															<div className="comment-text">We excel at what we love, taking pride in our evolving team while achieving results through flexible and open collaboration.</div>
														</div>
													
													
												</div>
									
									</div>
								</div>
							</div>
						</section >


						
			<section className="box-section overflow-hidden box-section bg-secondery-500 box-process-16">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-30">
							<div className="paragraph-base-fitree-medium text-uppercase color-white mb-3">Challenges</div>
							<h2 className="heading-ag-3xl color-white mb-3">
								Challenges We Help <br className="d-none d-lg-block" />
								To Solve
							</h2>
							
						</div>
						<div className="col-lg-6 mb-30">
  <div className="row cards-row">
    <div className="col-md-6">
      <div className="card-work-process-2 card-work-process-3">
        <div className="card-icon">
          <div className="icon-left"></div>
        </div>
        <div className="card-info">
          <h4>IT Expertise Gap</h4>
          <p>Rapidsai Group offers global IT outsourcing with cost-effective turn key solutions</p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card-work-process-2 card-work-process-3">
        <div className="card-icon">
          <div className="icon-left"></div>
        </div>
        <div className="card-info">
          <h4>Cost Reduction</h4>
          <p>

Rapidsai Group provides cost-effective IT outsourcing solutions</p>
        </div>
      </div>
    </div>

    
    <div className="col-md-6">
      <div className="card-work-process-2 card-work-process-3">
        <div className="card-icon">
          <div className="icon-left"></div>
        </div>
        <div className="card-info">
          <h4>Digital Transformation</h4>
          <p>Rapidsai Group drives digital transformation, unlocking business growth with expertise.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
			</section>

			<section className="section1">
   

      <div className="marquee-wrapper">
        <div className="marquee-track">
          <Row prefix="A" />
          <Row prefix="B" />
        </div>
      </div>
	  </section>

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