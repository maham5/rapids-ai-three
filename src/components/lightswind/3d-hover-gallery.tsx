import React, { useRef, useEffect, useState } from "react";

const cn = (...classes: (string | boolean | undefined | null)[]) =>
  classes.filter(Boolean).join(" ");

export interface ThreeDHoverGalleryProps {
  images?: string[];
  titles?: string[];
  links?: string[];
  itemWidth?: number;
  itemHeight?: number;
  gap?: number;
  perspective?: number;
  hoverScale?: number;
  transitionDuration?: number;
  backgroundColor?: string;
  grayscaleStrength?: number;
  brightnessLevel?: number;
  activeWidth?: number;
  rotationAngle?: number;
  zDepth?: number;
  enableKeyboardNavigation?: boolean;
  autoPlay?: boolean;
  autoPlayDelay?: number;
  className?: string;
  style?: React.CSSProperties;
  onImageClick?: (index: number, image: string) => void;
  onImageHover?: (index: number, image: string) => void;
  onImageFocus?: (index: number, image: string) => void;
}

const ThreeDHoverGallery: React.FC<ThreeDHoverGalleryProps> = ({
  images = [
    "https://images.pexels.com/photos/26797335/pexels-photo-26797335/free-photo-of-scenic-view-of-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/12194487/pexels-photo-12194487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/32423809/pexels-photo-32423809/free-photo-of-aerial-view-of-kayaking-at-robberg-south-africa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ],
  titles = [
    "AI & Data Intelligence",
    "Product Engineering & Application Development",
    "Consulting & Research",
  ],
  links = [],
  itemWidth = 12,
  itemHeight = 20,
  gap = 1.2,
  perspective = 50,
  hoverScale = 15,
  transitionDuration = 1.25,
  backgroundColor,
  grayscaleStrength = 1,
  brightnessLevel = 0.5,
  activeWidth = 45,
  rotationAngle = 35,
  zDepth = 10,
  enableKeyboardNavigation = true,
  autoPlay = false,
  autoPlayDelay = 3000,
  className,
  style,
  onImageClick,
  onImageHover,
  onImageFocus,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const startAutoPlay = () => {
    if (!autoPlay || images.length === 0) return;

    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % images.length;
      });
    }, autoPlayDelay);
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [autoPlay, autoPlayDelay, images.length]);

  const handleImageClick = (index: number, image: string) => {
    if (links[index]) {
      window.location.href = links[index];
    }
    setActiveIndex(activeIndex === index ? null : index);
    onImageClick?.(index, image);
  };

  const handleImageHover = (index: number, image: string) => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }

    setActiveIndex(index);
    onImageHover?.(index, image);
  };

  const handleImageLeave = () => {
    if (autoPlay) {
      startAutoPlay();
    } else {
      setActiveIndex(null);
    }
  };

  const handleImageFocus = (index: number, image: string) => {
    setFocusedIndex(index);
    onImageFocus?.(index, image);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (!enableKeyboardNavigation) return;

    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        handleImageClick(index, images[index]);
        break;
      case "ArrowLeft": {
        event.preventDefault();
        const prevIndex = index > 0 ? index - 1 : images.length - 1;
        (containerRef.current?.children[prevIndex] as HTMLElement)?.focus();
        break;
      }
      case "ArrowRight": {
        event.preventDefault();
        const nextIndex = index < images.length - 1 ? index + 1 : 0;
        (containerRef.current?.children[nextIndex] as HTMLElement)?.focus();
        break;
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 const getItemStyle = (index: number): React.CSSProperties => {
  const isActive = activeIndex === index;
  const isFocused = focusedIndex === index;
  const baseWidthPx = 10;

  let width: string;

  if (isMobile) {
    width = isActive ? "80vw" : "70vw";
  } else {
    width = isActive
      ? `${activeWidth}vw`
      : `calc(${itemWidth}vw + ${baseWidthPx}px)`;
  }

  return {
    width,
    height: `calc(${itemHeight}vw + ${itemHeight}vh)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor,
    cursor: "pointer",
    filter:
      isActive || isFocused
        ? "inherit"
        : `grayscale(${grayscaleStrength}) brightness(${brightnessLevel})`,
    transform: isActive
      ? `translateZ(calc(${hoverScale}vw + ${hoverScale}vh))`
      : "none",
    transition: `transform ${transitionDuration}s cubic-bezier(.1, .7, 0, 1), filter 3s cubic-bezier(.1, .7, 0, 1), width ${transitionDuration}s cubic-bezier(.1, .7, 0, 1)`,
    willChange: "transform, filter, width",
    zIndex: isActive ? 100 : "auto",
    margin: isActive ? "0 0.3vw" : "0",  // Adjusted margin
    outline: isFocused ? "2px solid #3b82f6" : "none",
    outlineOffset: "2px",
    borderRadius: "0.5rem",
  };
};


  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen w-full overflow-hidden bg-background",
        className
      )}
      style={backgroundColor ? { backgroundColor, ...style } : style}
    >
      <div
        ref={containerRef}
        className="flex flex-col lg:flex-row justify-center items-center w-full px-4"
        style={{
          perspective: `calc(${perspective}vw + ${perspective}vh)`,
          gap: `${gap}rem`,
        }}
      >
        {images.map((media, index) => (
          <div
            key={index}
            className="relative will-change-transform rounded-lg shadow-lg overflow-hidden w-full md:w-auto"
            style={getItemStyle(index)}
            tabIndex={enableKeyboardNavigation ? 0 : -1}
            onClick={() => handleImageClick(index, media)}
            onMouseEnter={() => handleImageHover(index, media)}
            onMouseLeave={handleImageLeave}
            onFocus={() => handleImageFocus(index, media)}
            onBlur={() => setFocusedIndex(null)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="button"
            aria-label={`Media ${index + 1} of ${images.length}`}
            aria-pressed={activeIndex === index}
          >
            {/* Display GIF or image */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${media})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              onClick={(e) => {
                if (links[index]) {
                  e.stopPropagation();
                  window.location.href = links[index];
                }
              }}
            >
              <h3 className="text-white text-lg md:text-2xl font-bold text-center px-4 drop-shadow-lg">
                {titles[index] || `Service ${index + 1}`}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDHoverGallery;