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
    title: "Story Character Generation",
    description: "Focusing on using artificial intelligence to create narratives and stories featuring user-defined characters, tailoring the plot and interactions to the unique traits and backgrounds of these characters.",
  },
  
  {
    id: 2,
    img: "/assets/imgs/pages/blog/blog2.png",
    title: "Censorship of Profanities",
    description: "An audio processing tool that transcribes content, filters out offensive language with beeps, and exports the sanitized audio, providing an all-encompassing content moderation solution for audio files.",
  },
  {
    id: 3,
    img: "/assets/imgs/pages/blog/blog3.png",
    title: "Multilingual Audio-Visual Translation",
    description: "Enhancing audio-visual translations with Whisper seamless language conversion, Tortoise TTS for voice generation, Wav2Lip GAN for accurate lip-sync, achieving synchronized, natural audio-visual presentations.",
  },
  {
    id: 4,
    img: "/assets/imgs/pages/blog/blog4.png",
    title: "Brand and Product Detection",
    description: "This YOLO (You Only Look Once)-based project is designed for efficient brand and product detection in images and live streams. The system is capable of identifying various brands and products, including Apple iPhone, Samsung Mobile, Apple MacBook, iPad, Lenovo Laptop, Swissgear Bag, HP Bag, HP Laptop, and more.",
  },
  {
    id: 5,
    img: "/assets/imgs/pages/blog/blog5.png",
    title: "Smart Driving Assistant",
    description: "The YOLOv8-based Smart Driving Assistant is a Python-based project that employs the YOLO model and image processing techniques to enhance the driving experience. This intelligent assistant computes essential information such as speed, distance between cars, and overtaking status to ensure safe and efficient driving.",
  },
  {
    id: 6,
    img: "/assets/imgs/pages/blog/blog6.png",
    title: "Logo Detection",
    description: "The Logo Detection with YOLOv8 project is designed to identify and locate logos within images, videos, and live streams using the YOLO model. The project encompasses the entire pipeline, including dataset creation, annotation, model fine-tuning, and the development of a Flask web application for processing videos and live streams.",
  },
    {
    id: 7,
    img: "/assets/imgs/pages/blog/blog8.png",
    title: "Travel Agency Website",
    description: "A mobile application for travel guide business|Mobile Development| Custom Software|",
  },
  
  {
    id: 8,
    img: "/assets/imgs/pages/blog/blog8.png",
    title: "Inappropriate Gesture Detection",
    description: "Inappropriate Gesture Detection using YOLO v8 and Image Processing Techniques.",
  },
  {
    id: 9,
    img: "/assets/imgs/pages/blog/blog9.png",
    title: "Clothes Type Detection",
    description: "Clothes Type Detection Model| Computer Vision| Machine Learning| Deep Learning",
  },
  {
    id: 10,
    img: "/assets/imgs/pages/blog/blog.png",
    title: "ONEXTE",
    description: "Focusing on using artificial intelligence to create narratives and stories featuring user-defined characters, tailoring the plot and interactions to the unique traits and backgrounds of these characters.",
  },
  {
    id: 11,
    img: "/assets/imgs/pages/blog/blog2.png",
    title: "Omega",
    description: "A web application for a construction company| Web Development| Custom Software| Backend Development| Frontend",
  },
  {
    id: 12,
    img: "/assets/imgs/pages/blog/blog3.png",
    title: "Empower",
    description: "A freelance guide custom WordPress website |Web Development| Custom Software| Backend Development| Frontend",
  },
  {
    id: 13,
    img: "/assets/imgs/pages/blog/blog4.png",
    title: "TA Maison",
    description: "Custom Software of a Food Business| Web Development| Frontend Development| Backend Development",
  },
  {
    id: 14,
    img: "/assets/imgs/pages/blog/blog5.png",
    title: "Kalim Website",
    description: "A software solution for a construction company|Custom Softwares| Web Development| Frontend Development| Backend Development",
  },
  {
    id: 15,
    img: "/assets/imgs/pages/blog/blog6.png",
    title: "Review Fox",
    description: "A custom web application for Review Fox |Custom Softwares| Web Development",
  },
  {
    id: 16,
    img: "/assets/imgs/pages/blog/blog7.png",
    title: "Woo Commerce Application",
    description: "The Real-Time Explicit Content Detection with Dynamic Blurring project utilizes YOLO version 8 (v8), OpenCV, Flask, and WebSockets to perform live nudity detection live streams. Additionally, the project incorporates a dynamic blurring feature to ensure privacy. This solution is ideal for applications where content moderation is crucialA custom WooCommerce Application |Custom Softwares| Web Development| WordPress|WooCommerce.",
  },
  {
    id: 17,
    img: "/assets/imgs/pages/blog/blog7.png",
    title: "Real-Time Explicit Content Detection with Dynamic Blurring",
    description: "The Real-Time Explicit Content Detection with Dynamic Blurring project utilizes YOLO version 8 (v8), OpenCV, Flask, and WebSockets to perform live nudity detection live streams. Additionally, the project incorporates a dynamic blurring feature to ensure privacy. This solution is ideal for applications where content moderation is crucial.",
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
                    <Link href="/news-details">
                      <img src={blog.img} alt={blog.title} />
                    </Link>
                  </div>

                  {/* Title & Description */}
                  <div className="card-body">
                    <Link href="/news-details" className="card-title">
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

