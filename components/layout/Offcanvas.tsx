'use client'
import { useState } from 'react';
import Link from 'next/link'

type Category = "AI & Data Intelligence" | "Product Engineering & Application Development" | "Consulting & Research";

const menuItems: Record<Category, { name: string; href: string }[]> = {
  "AI & Data Intelligence": [
    { name: "Generative & Agentic AI", href: "/ai-ml" },
    { name: "GeoSpatial Intelligence", href: "/ai-ml" },
    { name: "Computer Vision Systems", href: "/ai-ml" },
    { name: "Bioinformatics & Precision AI", href: "/ai-ml" },
    { name: "Predictive & Decision Intelligence", href: "/ai-ml" },
  ],
  "Product Engineering & Application Development": [
    { name: "Web Engineering", href: "/dashboard-services" },
    { name: "Mobile Experience Design", href: "/dashboard-services" },
    { name: "Data & Insight Dashboards", href: "/dashboard-services" },
    { name: "DevOps & Cloud Engineering", href: "/dashboard-services" },
    { name: "Blockchain & Smart Systems", href: "/dashboard-services" },
  ],
  "Consulting & Research": [
    { name: "AI & Digital Transformation Consulting", href: "/consultant-research" },
    { name: "Research & Development (R&D) ", href: "/consultant-research" },
    { name: "Training & Capacity Building", href: "/consultant-research" },
    { name: "Data Strategy & Analytics Consulting", href: "/consultant-research" },
    { name: "Technical Advisory & Innovation Partnerships", href: "/consultant-research" },
  ],
};

export default function Offcanvas({ isMobileMenu, handleMobileMenu }: any) {
	const [openCategory, setOpenCategory] = useState<Category | null>(null);

	const toggleCategory = (category: Category) => {
		setOpenCategory(openCategory === category ? null : category);
	};

	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	
	return (
		<>
			<div className={`offCanvas__info ${isMobileMenu ? "active" : ""}`}>
				<div className="offCanvas__close-icon menu-close" onClick={handleMobileMenu}>
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 24 24">
							<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
						</svg>
					</button>
				</div>
				<div className="offCanvas__logo mb-20">
					<Link href="/"><img src="/assets/imgs/template/dark-logo.png" alt="Logo" /></Link>
				</div>
				<div className="offCanvas__side-info mb-30">
					<ul className="navbar-nav navbar-nav-mobile">
						<li className="nav-item ">
							<a href="/" className="nav-link fw-medium" onClick={() => handleAccordion(1)} role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
						</li>
						<li className="nav-item ">
							<a href="/about-us" className="nav-link fw-medium" onClick={() => handleAccordion(2)} role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link fw-medium" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Services
							</a>
							<ul className="mobile-dropdown">
								{(Object.keys(menuItems) as Category[]).map((category) => (
									<li key={category} className="mobile-dropdown-category">
										<button
											className="mobile-category-btn"
											onClick={() => toggleCategory(category)}
										>
											{category}
											<span className={`arrow ${openCategory === category ? "open" : ""}`} />
										</button>

										{openCategory === category && (
											<ul className="mobile-dropdown-items">
												{menuItems[category].map((item) => (
													<li key={item.href}>
														<Link href={item.href} className="mobile-dropdown-item">
															{item.name}
														</Link>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
						</li>
						<li className="nav-item ">
							<a href="/projects" className="nav-link fw-medium" onClick={() => handleAccordion(4)} role="button" data-bs-toggle="dropdown" aria-expanded="false">industries</a>
						</li>
						<li className="nav-item ">
							<a href="/contact" className="nav-link fw-medium" onClick={() => handleAccordion(6)} role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact Us</a>
						</li>
					</ul>
				</div>
			</div>

			{isMobileMenu &&
				<div className="offCanvas__overly active" onClick={handleMobileMenu} />
			}
		</>
	)
}