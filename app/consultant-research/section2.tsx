'use client'


export default function Section2() {
    // const [isOpen, setOpen] = useState(false)
    return (
        <>

            <section className="position-relative overflow-hidden box-about-us-2 backgcolor">
                <div className="container" data-aos="fade-up">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 text-center text-lg-end">
                            <div className="box-images-about-9">
                                <div className="image-about-1">
                                    <img src="/assets/imgs/pages/home9/about.png" alt="Vatech" />
                                    {/* <a onClick={() => setOpen(true)} className="btn btn-play-2 popup-video">
                                        <img src="/assets/imgs/pages/home9/play.png" alt="Vatech" />
                                    </a> */}
                                </div>
                                <div className="image-about-2">
                                    <img src="/assets/imgs/pages/home9/about2.png" alt="Vatech" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-10">
                            {/* <p className="paragraph-base-fitree-medium lable-border text-uppercase mb-4">About us</p> */}
                            <h2 className="heading-48-fitree color mb-4">Why Choose us
For Consulting & Research Services?</h2>
                            {/* <p className="paragraph-18-fitree mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p> */}
                            {/* <ul className="d-flex align-items-center flex-wrap list-disc mb-4">
                                <li className="heading-24-fitree-bold">Inventory management</li>
                                <li className="heading-24-fitree-bold">Experienced Team</li>
                            </ul> */}
                            <div className="box-list-ticked">
                                <ul className="list-tick">
                                    <li className="paragraph-20-fitree-medium mb-3">
                                        
                                        Our experts provide AI and Digital Transformation Consulting, Research & Development, Training & Capacity Building, Data Strategy & Analytics Consulting, and Technical Advisory & Innovation Partnerships.
                                    </li>
                                    <li className="paragraph-20-fitree-medium mb-3">
                                        
                                    We design intelligent systems, data-driven dashboards, and modern solutions that empower organizations to innovate and grow.
                                        </li>
                                    <li className="paragraph-20-fitree-medium mb-3">
                                        
                    By combining advanced technologies with secure architecture and creative design, we deliver scalable and future-ready digital experiences.
                                    </li>
  
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}
