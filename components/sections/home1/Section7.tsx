'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup3 } from '@/util/swiperOptions'
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/assets/imgs/template/dark-logo.png"

import badge from "@/public/assets/imgs/template/logo1.png"
import badge2 from "@/public/assets/imgs/template/logo2.png"
export default function Section7() {
	return (
		<>

			
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
    width={100}
    height={100}
    className="py-2 w-[100px] h-[100px] object-contain"
  />

  <Image
    src={badge2}
    alt="Certification Badge"
    width={100}
    height={100}
    className="py-2 w-[100px] h-[100px] object-contain"
  />
</div>

			</footer>
		</>
	)
}
