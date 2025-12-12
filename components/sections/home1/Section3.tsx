'use client'
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { sliderGroup3Tab } from '@/util/swiperOptions'

export default function Section3() {
	const [isTab, setIsTab] = useState(1)

	const handleTab = (i: number) => {
		setIsTab(i)
	}

	const VideoCard = ({ videoSrc, title, videoId }: { videoSrc: string, title: string, videoId: string }) => {
		return (
			<div className="card-project-4">
				<div className="card-image relative video-container">
					<video
						key={videoId}
						className="video-player"
						src={videoSrc}
						autoPlay
						loop
						muted
						playsInline
						controls
						controlsList="nodownload"
						onError={(e) => {
							console.error(`Video load error for ${videoId}:`, e);
						}}
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					></video>
				</div>
				<div className="card-info">
					<h6 className="heading-24-fitree-bold">{title}</h6>
					<Link href="#" className="link-more">
						<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</Link>
				</div>

				<style jsx>{`
					.video-container {
						position: relative;
					}

					.video-container video {
						display: block;
					}

					.video-container video::-webkit-media-controls {
						opacity: 0;
						transition: opacity 0.3s;
					}

					.video-container:hover video::-webkit-media-controls {
						opacity: 1;
					}

					.video-container video::-webkit-media-controls-enclosure {
						opacity: 0;
						transition: opacity 0.3s;
					}

					.video-container:hover video::-webkit-media-controls-enclosure {
						opacity: 1;
					}

					.card-info {
						position: relative;
						z-index: 1;
						background: white;
						pointer-events: auto;
					}
				`}</style>
			</div>
		);
	};

	return (
		<>
			<section className="position-relative overflow-hidden box-latest-projects-9">
				<div className="container swiper-root position-relative" data-aos="fade-up">
					<div className="row position-relative align-items-end">
						<div className="col-lg-9 mb-4 text-center text-lg-start">
							<h6 className="text-border-square mb-20 text-uppercase">Latest project</h6>
							<h3 className="heading-48-fitree color-white">
								We Have Completed<br className="d-none d-lg-block" />
								1000+ Project Here
							</h3>
						</div>
						<div className="col-lg-3 mb-4 text-center text-lg-end">
							<div className="box-button-slider">
								<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-1 swiper-button-prev-style-tab">
									<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="currentColor" strokeWidth="1.5" />
									</svg>
								</div>
								<div className="swiper-button-next swiper-button-inline swiper-button-next-style-1 swiper-button-next-style-tab">
									<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="currentColor" strokeWidth="1.5" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="box-list-projects-9 auto-padding" data-aos="fade-up">
					<div className="box-ul">
						<ul className="nav nav-tabs" id="pills-tab" role="tablist">
							<li><a className={`${isTab === 1 ? 'active' : ''}`} onClick={() => handleTab(1)} data-bs-toggle="tab" type="button" role="tab" aria-controls="affordable" aria-selected="true" data-index={1}>Generative & Agentic AI</a></li>
							<li><a className={`${isTab === 2 ? 'active' : ''}`} onClick={() => handleTab(2)} data-bs-toggle="tab" type="button" role="tab" aria-controls="knowledge" aria-selected="false" data-index={2}>Computer Vision & NLP systems</a></li>
							<li><a className={`${isTab === 3 ? 'active' : ''}`}  data-bs-toggle="tab" type="button" role="tab" aria-controls="savetimes" aria-selected="false" data-index={3}>Geospatial Intelligence</a></li>
							<li><a className={`${isTab === 4 ? 'active' : ''}`}  data-bs-toggle="tab" type="button" role="tab" aria-controls="fastquality" aria-selected="false" data-index={4}>Web development</a></li>
							<li><a className={`${isTab === 5 ? 'active' : ''}`}  data-bs-toggle="tab" type="button" role="tab" aria-controls="experienced" aria-selected="false" data-index={5}>Mobile development</a></li>
							<li><a className={`${isTab === 6 ? 'active' : ''}`}  data-bs-toggle="tab" type="button" role="tab" aria-controls="experienced" aria-selected="false" data-index={6}>Data & Insight Intelligence</a></li>
						</ul>
					</div>
					<div className="box-content-tab">
						<div className="tab-content">
							{/* Tab 1: Generative & Agentic AI */}
							<div className={isTab == 1 ? "tab-pane show active" : "tab-pane"} id="affordable" role="tabpanel" aria-labelledby="affordable-tab" tabIndex={0}>
								<div className="box-swiper">
									<Swiper {...sliderGroup3Tab} className="swiper-container slider-group-3-tab-1">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/zamindarbot.mp4" title="Zamindar Bot" videoId="tab1-video1" />
											</SwiperSlide>
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/jazz.mp4" title="Jazz Cash Call Agent" videoId="tab1-video2" />
											</SwiperSlide>
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/rapids.mp4" title="Rapids AI Bot" videoId="tab1-video3" />
											</SwiperSlide>
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/demo.mp4" title="Call Agent For Telenor Demo RapidsAi" videoId="tab1-video4" />
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>

							{/* Tab 2: Computer Vision & NLP systems */}
							<div className={isTab == 2 ? "tab-pane show active" : "tab-pane"} id="knowledge" role="tabpanel" aria-labelledby="knowledge-tab" tabIndex={0}>
								<div className="box-swiper">
									<Swiper {...sliderGroup3Tab} className="swiper-container slider-group-3-tab-2">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/customvoice.mp4" title="Custom Voice Generator" videoId="tab2-video1" />
											</SwiperSlide>
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/antix1.mp4" title="Antix Realtime Speech Video 1" videoId="tab2-video2" />
											</SwiperSlide>
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/antix2.mp4" title="Antix Realtime Speech Video 2" videoId="tab2-video3" />
											</SwiperSlide>
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/antix3.mp4" title="Antix Realtime Speech Video 3" videoId="tab2-video4" />
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>

							{/* Tab 3: Geospatial Intelligence */}
							{/* <div className={isTab == 3 ? "tab-pane show active" : "tab-pane"} id="savetimes" role="tabpanel" aria-labelledby="savetimes-tab" tabIndex={0}>
								<div className="box-swiper">
									<Swiper {...sliderGroup3Tab} className="swiper-container slider-group-3-tab-3">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/zamindar.mp4" title="Custom Voice Generation & AI Lip-Sync Video Re-Dubbing (Talent Labs)" videoId="tab3-video1" />
											</SwiperSlide>
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/Jazz.mp4" title="AI Video-to-Video Translation & Lip-Sync Engine (Talent Labs)" videoId="tab3-video2" />
											</SwiperSlide>
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/zamindar.mp4" title="Antix Realtime Speech — Live Transcription, Translation & Subtitles" videoId="tab3-video3" />
											</SwiperSlide>
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/Jazz.mp4" title="Live US Senate Captioning ASR API for Broadcast Encoder" videoId="tab3-video4" />
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div> */}

							{/* Tab 4: Web development */}
							{/* <div className={isTab == 4 ? "tab-pane show active" : "tab-pane"} id="fastquality" role="tabpanel" aria-labelledby="fastquality-tab" tabIndex={0}>
								<div className="box-swiper">
									<Swiper {...sliderGroup3Tab} className="swiper-container slider-group-3-tab-4">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/zamindar.mp4" title="Enterprise Customer Support Conversational AI Platform" videoId="tab4-video1" />
											</SwiperSlide>
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/Jazz.mp4" title="Corporate Website + AI Conversational Bot Solution" videoId="tab4-video2" />
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div> */}

							{/* Tab 5: Mobile development */}
							{/* <div className={isTab == 5 ? "tab-pane show active" : "tab-pane"} id="experienced" role="tabpanel" aria-labelledby="experienced-tab" tabIndex={0}>
								<div className="box-swiper">
									<Swiper {...sliderGroup3Tab} className="swiper-container slider-group-3-tab-5">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/zamindar.mp4" title="Surgeonix — AI Surgical Information Chatbot" videoId="tab5-video1" />
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div> */}

							{/* Tab 6: Data & Insight Intelligence */}
							{/* <div className={isTab == 6 ? "tab-pane show active" : "tab-pane"} id="data-intelligence" role="tabpanel" aria-labelledby="data-intelligence-tab" tabIndex={0}>
								<div className="box-swiper">
									<Swiper {...sliderGroup3Tab} className="swiper-container slider-group-3-tab-6">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<VideoCard videoSrc="/assets/imgs/template/Jazz.mp4" title="Data Analytics & Business Intelligence Dashboard" videoId="tab6-video1" />
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}