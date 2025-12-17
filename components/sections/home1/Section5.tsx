'use client'
import { sliderGroup1 } from '@/util/swiperOptions'
import { Swiper, SwiperSlide } from "swiper/react"

export default function Section7() {
	const testimonials = [
		{ name: "Patrick Gladding", role: "CEO", rating: 5, comment: "Rapids AI is a forward-driven organization with strong potential to excel in Artificial Intelligence through continuous learning and technical excellence." },
		{ name: "Darwn Gafori", role: "Managing Director", rating: 4.5, comment: "It has been a great experience working with the team at Rapids AI, and I am looking forward to collaborating on future projects very soon." },
		{ name: "Dominic Scacci", role: "CTO", rating: 5, comment: "Rapids AI provided a detailed consultation with strong relevant expertise, and we look forward to reviewing their proposal." },
		{ name: "Komi Novissi Maglo", role: "Product Owner", rating: 4.5, comment: "Rapids AI was professional, communicated clearly, and delivered high-quality work on time with a proactive approach." },
		{ name: "Terpstra", role: "CTO", rating: 5, comment: "Rapids AI delivered an excellent mentoring experience, with clear communication and strong expertise in AI, making the learning highly effective and well-received." },
		{ name: "Lucas Sato", role: "Managing Director", rating: 5, comment: "Innovative solutions and excellent project management. The team was responsive and delivered exceptional results." },
		{ name: "Flux De Greef", role: "Product Owner", rating: 4.5, comment: "Great experience working with this team. They brought creative solutions to complex problems and exceeded expectations." },
		{ name: "Jessica Monique Martin", role: "CEO", rating: 5, comment: "Absolutely fantastic service! The attention to detail and quality of work was outstanding from start to finish." },
		{ name: "Sofia Mata", role: "Product Owner", rating: 4.5, comment: "Very professional and knowledgeable team. They delivered a high-quality solution that perfectly met our needs." },
		{ name: "Benjamin O'Bright", role: "Managing Director", rating: 5, comment: "Exceptional AI solutions and outstanding support. The team went above and beyond to ensure our success." },
		{ name: "Micheal Malsoh", role: "CTO", rating: 5, comment: "Rapids AI handled the project efficiently and delivered high-quality AI work on time." },
		{ name: "Joshua Daniel", role: "CEO", rating: 4.5, comment: "Clear communication and strong AI expertise made working with Rapids AI a great experience." },
		{ name: "Dave Foster", role: "CTO", rating: 5, comment: "Rapids AI exceeded expectations with their technical skills and collaborative approach." },
		{ name: "Chris Watson", role: "Product Owner", rating: 5, comment: "Reliable, knowledgeable, and easy to work with RapidsAI delivered excellent AI based results." }
	];

	const renderStars = (rating: number) => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		for (let i = 0; i < fullStars; i++) {
			stars.push(<img key={`full-${i}`} src="/assets/imgs/pages/home8/star.svg" alt="Vatech" />);
		}

		if (hasHalfStar) {
			stars.push(
				<svg key="half-star" width={18} height={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient id="half">
							<stop offset="50%" stopColor="#FFD700" />
							<stop offset="50%" stopColor="#D1D5DB" />
						</linearGradient>
					</defs>
					<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#half)" />
				</svg>
			);
		}

		return stars;
	};
return (
  <>
    <section className="position-relative overflow-hidden box-testimonials-16">
      <div className="container-fluid px-0" data-aos="fade-up">
        <div className="row g-0 justify-content-center">

          {/* LEFT SECTION REMOVED */}
          {/*
          <div className="col-lg-6 testimonial-left-section">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img
                src="/assets/imgs/pages/home16/review.png"
                alt="Vatech"
                className="testimonial-main-image"
              />
            </div>
          </div>
          */}

          <div className="col-12 testimonial-right-section d-flex justify-content-center">
            <div className="testimonial-content text-center w-100" style={{ maxWidth: "1100px" }}>
              <div className="paragraph-base-fitree-bold text-underline text-uppercase color-white mb-3 text-center">
                CUSTOMER TALK
              </div>

              <h2 className="heading-ag-3xl color-white mb-1 text-center">
                What Our Clients Say For
                <br />
                Our Services
              </h2>

              <div className="box-swiper pt-3 pb-6">
                <Swiper {...sliderGroup1} loop={false} className="swiper-container slider-group-1">
                  <div className="swiper-wrapper">
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="card-testimonials-2 card-testimonials-13">
                          <div className="card-info">
                            <div className="comment-text sub-heading-md color-white text-center">
                              "{testimonial.comment}"
                            </div>

                            <div className="card-author justify-content-center">
                              <div className="author-info text-center">
                                <div className="rating justify-content-center">
                                  {renderStars(testimonial.rating)}
                                </div>
                                <h5 className="sub-heading-md color-white">{testimonial.name}</h5>
                                <p className="paragraph-base color-white">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>

                {/* ✅ YOUR SAME SWIPER BUTTONS */}
                <div className="box-button-slider box-button-slider-testimonials-16">
                  <div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-1 swiper-button-prev-style-6">
                    <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>

                  <div className="swiper-button-next swiper-button-inline swiper-button-next-style-1 swiper-button-next-style-6">
                    <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                {/* ✅ END BUTTONS */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
);


}

{/* <div className="box-button-slider box-button-slider-testimonials-16">
										<div className="swiper-button-prev swiper-button-inline swiper-button-prev-style-1 swiper-button-prev-style-6">
											<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="currentColor" strokeWidth="1.5" />
											</svg>
										</div>
										<div className="swiper-button-next swiper-button-inline swiper-button-next-style-1 swiper-button-next-style-6">
											<svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="currentColor" strokeWidth="1.5" />
											</svg>
										</div> */}