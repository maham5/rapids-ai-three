"use client";
import ThreeDHoverGallery from "@/src/components/lightswind/3d-hover-gallery";

import Link from "next/link";
import Image from "next/image";
import blc from "@/public/assets/imgs/template/bbbi.png";
import gis from "@/public/assets/imgs/template/gisss__1_-removebg-preview.png";
import ai from "@/public/assets/imgs/template/aiouu-removebg-preview.png";
import bio from "@/public/assets/imgs/template/bio-removebg-preview.png";
import circle from "@/public/assets/imgs/template/circle.gif";

export default function Section4() {
  const images = [
    "/assets/imgs/template/aiii.gif",
    "/assets/imgs/template/mble.gif",
    "/assets/imgs/template/researchh.gif",
  ];

  const handleImageClick = (index: number, image: string) => {
    console.log("Clicked:", index, image);
  };

  const handleImageHover = (index: number, image: string) => {
    console.log("Hovered:", index, image);
  };

  return (
    <section className="w-full bg-[#0a0a0a] py-12">
      <div className="max-w-screen mx-auto px-4">
        {/* Top centered heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Our Services
        </h2>

        <ThreeDHoverGallery
          images={images}
          itemWidth={15}
          itemHeight={12}
          links={["/ai-ml", "/dashboard-services", "/consultant-research"]}
          gap={0.6}
          perspective={40}
          hoverScale={12}
          transitionDuration={1.5}
          backgroundColor="#0a0a0a"
          grayscaleStrength={0.1}
          brightnessLevel={0.6}
          activeWidth={35}
          enableKeyboardNavigation={true}
          autoPlay={true}
          autoPlayDelay={3000}
          onImageClick={(index, image) => handleImageClick(index, image)}
          onImageHover={(index, image) => handleImageHover(index, image)}
        />
      </div>
    </section>
  );
}
