'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import Image from "next/image";
import logo from "@/public/assets/imgs/template/dark-logo.png"
import badge from "@/public/assets/imgs/template/logo1.png"
import badge2 from "@/public/assets/imgs/template/logo2.png"

const blogs = [
  {
    id: 1,
    video: "/assets/imgs/template/zamindarbot.mp4",
    title: "ZamindarBot",
  },
  {
    id: 2,
    video: "/assets/imgs/template/call-agent.mp4",
    title: "Webdoc Scripted Conversational Bot for Mobile Insurance Sales",
  },
  {
    id: 3,
    video: "/assets/imgs/template/jazzz.mp4",
    title: "Jazz Cash Call Agent",
  },
  {
    id: 4,
    video: "/assets/imgs/template/rapids.mp4",
    title: "RapidsAI Conversational Voice  Chatbot",
  },
  {
    id: 5,
    video: "/assets/imgs/template/customvoice.mp4",
    title: "Custom Voice Generation & AI Lip-Sync Video Re-Dubbing (Talent Labs)",
  },
  {
    id: 6,
    video: "/assets/imgs/template/antix1.mp4",
    title: "Antix Realtime Speech(1) — Live Transcription, Translation & Subtitles (Mic/Tab/URL/File)",
  },
  {
    id: 7,
    video: "/assets/imgs/template/antix2.mp4",
    title: "Antix Realtime Speech(2) — Live Transcription, Translation & Subtitles (Mic/Tab/URL/File)",
  },
  {
    id: 8,
    video: "/assets/imgs/template/antix3.mp4",
    title: "Antix Realtime Speech(3) — Live Transcription, Translation & Subtitles (Mic/Tab/URL/File)",
  },
  {
    id: 9,
    img: "/assets/imgs/template/Weatherwalay.png",
    title: "Weather-Integrated Multilingual Agentic Chatbot",
  },
]

// Lazy video component
function LazyVideo({ blog, hoveredVideo, onMouseEnter, onMouseLeave }: any) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={videoRef}>
      {shouldLoad ? (
        <video 
          src={blog.video} 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="metadata"
          controls={hoveredVideo === blog.id}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ) : (
        <div style={{ width: '100%', height: '250px', backgroundColor: '#f0f0f0' }} />
      )}
    </div>
  )
}

export default function NewsGrid() {
  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(blogs.length / itemsPerPage)

  return (
    <Layout headerStyle={1} footerStyle={1}>

      <section className="box-faq-single-bannerproject @@class">
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
                  <div className="card-image">
                    <Link href="">
                      {blog.video ? (
                        <LazyVideo 
                          blog={blog}
                          hoveredVideo={hoveredVideo}
                          onMouseEnter={() => setHoveredVideo(blog.id)}
                          onMouseLeave={() => setHoveredVideo(null)}
                        />
                      ) : (
                        <img 
                          src={blog.img} 
                          alt={blog.title}
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                    </Link>
                  </div>

                  <div className="card-body">
                    <Link href="" className="card-title1">
                      {blog.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

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

    </Layout>
  )
}