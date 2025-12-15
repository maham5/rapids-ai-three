'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup3 } from '@/util/swiperOptions'
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/assets/imgs/template/dark-logo.png"


export default function Section7() {
	return (
		<>

			<footer>
   <Image src={logo}
   alt="hello"
   width={150}
   />

    <p>Copyright © 2025 <a href="/">RapidsAI</a>. All rights reserved.</p>
<div><a href="https://businessfirms.co/e-commerce-development-companies-in-united-states" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/hk-business-firm.appspot.com/o/badge%2Ftop-ecommerce-development-company-badge-1.png?alt=media&token=19d3a959-60de-452e-b433-96645e8cb72c" title="Top AI Developing Company" alt="Top AI Developing Company" style={{width: '120px', height: 'auto'}} /></a></div>

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
</footer>
		</>
	)
}
