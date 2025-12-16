// import Layout from "@/components/layout/Layout"
// import Section1 from '@/components/sections/home1/Section1'
// import Section10 from '@/components/sections/home1/Section10'
// import Section11 from '@/components/sections/home1/Section11'
// import Section2 from '@/components/sections/home1/Section2'
// import Section3 from '@/components/sections/home1/Section3'
// import Section4 from '@/components/sections/home1/Section4'
// import Section5 from '@/components/sections/home1/Section5'
// import Section6 from '@/components/sections/home1/Section6'
// import Section7 from '@/components/sections/home1/Section7'
// import Section8 from '@/components/sections/home1/Section8'
// import WhoWeAre from "@/components/sections/home1/Section8"
// // import Section9 from '@/components/sections/home1/Section9'
// export default function Home() {

// 	return (
// 		<>

// 			<Layout headerStyle={1} >
// 				<Section1 />
// 				<Section2 />
// 				<WhoWeAre/>
// 				<Section3 />
// 				<Section4 />
// 				<Section5 />
// 				<Section6 />
// 				<Section7 /> 
// 				{/* */}
// 				{/* 
				
// 				<Section8 />
// 				<Section9 />
// 				<Section10 />
// 				<Section11 /> */}
				
// 			</Layout>
// 		</>
// 	)
// }

import Layout from "@/components/layout/Layout"
import Section1 from '@/components/sections/home1/Section1'
import Section2 from '@/components/sections/home1/Section2'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// ✅ Lazy load sections below the fold
const WhoWeAre = dynamic(() => import('@/components/sections/home1/Section8'))
const Section3 = dynamic(() => import('@/components/sections/home1/Section3'))
const Section4 = dynamic(() => import('@/components/sections/home1/Section4'))
const Section5 = dynamic(() => import('@/components/sections/home1/Section5'))
const Section6 = dynamic(() => import('@/components/sections/home1/Section6'))
const Section7 = dynamic(() => import('@/components/sections/home1/Section7'))

// Loading skeleton component
function LoadingSkeleton() {
	return (
		<div className="w-full py-20">
			<div className="container mx-auto">
				<div className="animate-pulse">
					<div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
					<div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="h-64 bg-gray-200 rounded"></div>
						<div className="h-64 bg-gray-200 rounded"></div>
						<div className="h-64 bg-gray-200 rounded"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function Home() {
	return (
		<>
			<Layout headerStyle={1}>
				{/* ❌ NO Suspense - User sees these immediately */}
				<Section1 />
				<Section2 />
				
				{/* ✅ WITH Suspense - Loads progressively as user scrolls */}
				<Suspense fallback={<LoadingSkeleton />}>
					<WhoWeAre />
				</Suspense>
				
				<Suspense fallback={<LoadingSkeleton />}>
					<Section3 />
				</Suspense>
				
				<Suspense fallback={<LoadingSkeleton />}>
					<Section4 />
				</Suspense>
				
				<Suspense fallback={<LoadingSkeleton />}>
					<Section5 />
				</Suspense>
				
				<Suspense fallback={<LoadingSkeleton />}>
					<Section6 />
				</Suspense>
				
				<Suspense fallback={<LoadingSkeleton />}>
					<Section7 />
				</Suspense>
			</Layout>
		</>
	)
}