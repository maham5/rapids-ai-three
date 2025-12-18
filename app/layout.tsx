
import "@/node_modules/react-modal-video/css/modal-video.css"
import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/aos.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css"
import "/public/assets/fonts/boxicons/boxicons.min.css"
import "/public/assets/css/main.css"


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

import SmokeyCursor from "@/src/components/lightswind/smokey-cursor"




// import SmokeyCursor from "./cursor/cursor"
import type { Metadata } from "next"
import { Inter, Figtree, Rajdhani, Plus_Jakarta_Sans, Rubik } from "next/font/google"

const inter = Inter({
    weight: ['300', '400', '500', '600', '700','800','900'],
    subsets: ['latin'],
    variable: "--inter",
    display: 'swap',
})

const figtree = Figtree({
    weight: ['300', '400', '500', '600', '700','800','900'],
    subsets: ['latin'],
    variable: "--figtree",
    display: 'swap',
})

const rajdhani = Rajdhani({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--rajdhani",
    display: 'swap',
})
const rubik = Rubik({
    weight: ['300', '400', '500', '600', '700','800','900'],
    subsets: ['latin'],
    variable: "--rubik",
    display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700','800'],
    subsets: ['latin'],
    variable: "--jakarta",
    display: 'swap',
})

export const metadata: Metadata = {
    title: "RapidsAI",
    description: "Making AI Rapidly Accessible To Everyone",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
       
        <html lang="en">
      
            <body className={`${inter.variable} ${figtree.variable} ${rajdhani.variable} ${rubik.variable} ${jakarta.variable}`}>
                {/* + */}
                
                {children}
 <SmokeyCursor
  simulationResolution={32}      // ✅ Performance optimized
  dyeResolution={256}            // ✅ Good quality
  captureResolution={128}        // ✅ Less memory
  pressureIterations={4}         // ✅ Fast computation
  densityDissipation={6}         // 🔄 Slightly slower fade (more visible)
  velocityDissipation={4}        // 🔄 Slightly slower disappear (bigger trail)
  splatForce={1000}              // ⬆️ Increased - BIGGER splats
  splatRadius={0.35}             // ⬆️ Add this - WIDER cursor effect
  enableShading={false}          
  intensity={0.5}                // ⬆️ Increased - MORE VISIBLE & COLORFUL
  curl={8}                       // ⬆️ Add this - MORE SWIRLY/COLORFUL effect
/>
        
                </body>
            
        </html>
    )
}
