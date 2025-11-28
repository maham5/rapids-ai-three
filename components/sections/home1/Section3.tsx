

'use client'
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { sliderGroup3Tab } from '@/util/swiperOptions'

export default function Section3() {
	const [isTab, setIsTab] = useState(1)
    const handleTab = (i: number) => {
        setIsTab(i)
    }
	return (
		<>

			<section className="position-relative overflow-hidden box-latest-projects-9">
				<div className="container swiper-root position-relative" data-aos="fade-up">
					<div className="row position-relative align-items-end">
						<div className="col-lg-9 mb-4 text-center text-lg-start">
							<h6 className="text-border-square mb-20 text-uppercase">Latest project</h6>
							<h3 className="heading-48-fitree color-white">
								We Have Complete<br className="d-none d-lg-block" />
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
							<li><a className={`${isTab === 1 ? 'active' : ''}`}  onClick={() => handleTab(1)}data-bs-toggle="tab" type="button" role="tab" aria-controls="affordable" aria-selected="true" data-index={1}>Story Character Generation</a></li>
							<li><a className={`${isTab === 2 ? 'active' : ''}`}  onClick={() => handleTab(2)}data-bs-toggle="tab" type="button" role="tab" aria-controls="knowledge" aria-selected="false" data-index={2}>Censorship of Profanities</a></li>
							<li><a className={`${isTab === 3 ? 'active' : ''}`}  onClick={() => handleTab(3)}data-bs-toggle="tab" type="button" role="tab" aria-controls="savetimes" aria-selected="false" data-index={3}>Brand and Product Detection</a></li>
							<li><a className={`${isTab === 4 ? 'active' : ''}`}  onClick={() => handleTab(4)}data-bs-toggle="tab" type="button" role="tab" aria-controls="fastquality" aria-selected="false" data-index={4}>Logo Detection</a></li>
							<li><a className={`${isTab === 5 ? 'active' : ''}`}  onClick={() => handleTab(5)}data-bs-toggle="tab" type="button" role="tab" aria-controls="experienced" aria-selected="false" data-index={5}>Inappropriate Gesture Detection</a></li>
						</ul>
					</div>
					<div className="box-content-tab">
						<div className="tab-content">
							<div  className={isTab == 1 ? "tab-pane show active" : "tab-pane"} id="affordable" role="tabpanel" aria-labelledby="affordable-tab" tabIndex={0}>
								<div className="box-swiper">
									<Swiper {...sliderGroup3Tab} className="swiper-container slider-group-3-tab-1">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img className="wow img-custom-anim-left" src="/assets/imgs/pages/home9/project2.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Story Character Generation</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img className="wow img-custom-anim-left" src="/assets/imgs/pages/home9/project3.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Censorship of Profanities</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img className="wow img-custom-anim-left" src="/assets/imgs/pages/home9/project4.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Brand and Product Detection</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img className="wow img-custom-anim-left" src="/assets/imgs/pages/home9/project3.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Logo Detection</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img className="wow img-custom-anim-left" src="/assets/imgs/pages/home9/project2.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Real-Time Explicit Content Detection with Dynamic Blurring</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>
							<div  className={isTab == 2 ? "tab-pane show active" : "tab-pane"} id="knowledge" role="tabpanel" aria-labelledby="knowledge-tab" tabIndex={0}>
								<div className="box-swiper">
									<Swiper {...sliderGroup3Tab} className="swiper-container slider-group-3-tab-2">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project2.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Smart Driving Assistant</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project3.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Gender Classification</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project4.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Logo Detection</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project2.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Echocardiography Segmentation</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project3.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Review Fox</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>
							<div  className={isTab == 3 ? "tab-pane show active" : "tab-pane"} id="savetimes" role="tabpanel" aria-labelledby="savetimes-tab" tabIndex={0}>
								<div className="box-swiper">
									<Swiper {...sliderGroup3Tab} className="swiper-container slider-group-3-tab-3">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project3.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Woo Commerce Application</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project2.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Travel Agency Website</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project4.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Omega</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project3.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">ONEXTE</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project2.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">TA Maison</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>
							<div  className={isTab == 4 ? "tab-pane show active" : "tab-pane"} id="fastquality" role="tabpanel" aria-labelledby="fastquality-tab" tabIndex={0}>
								<div className="box-swiper">
									<Swiper {...sliderGroup3Tab} className="swiper-container slider-group-3-tab-4">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project4.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Empower</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project2.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Travel Agency Website</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project3.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Kalim Website</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project4.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Gender Classification</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project3.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Clothes Type Detection</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>
							<div  className={isTab == 5 ? "tab-pane show active" : "tab-pane"} id="experienced" role="tabpanel" aria-labelledby="experienced-tab" tabIndex={0}>
								<div className="box-swiper">
									<Swiper {...sliderGroup3Tab} className="swiper-container slider-group-3-tab-5">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project3.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Real-Time Explicit Content Detection with Dynamic Blurring</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project2.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Inappropriate Gesture Detection</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project3.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Smart Driving Assistant</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project2.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Multilingual Audio-Visual Translation</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-project-4">
													<div className="card-image">
														<img src="/assets/imgs/pages/home9/project4.png" alt="Vatech" />
													</div>
													<div className="card-info">
														<h6 className="heading-24-fitree-bold">Story Character Generation</h6>
														<Link href="#" className="link-more">
															<svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.00005 13C8.00005 13 14 8.58107 14 6.99995C14 5.41884 8 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M1.00005 13C1.00005 13 6.99999 8.58107 7 6.99995C7.00001 5.41884 1 1 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
