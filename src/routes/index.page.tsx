
import  HeroImageBackground  from './../components/home/Hero';

import {lazy } from 'react'
import { ClientSuspense, Head } from "rakkasjs";
import { HeroImage } from '../components/home/HeroImage';


// const HeroImageBackground = lazy(() => import("../components/home/Hero"));
export default function HomePage() {
	return (
		<main>
		{/* <ClientSuspense fallback="Loading client-only component..."> */}
		{/* <HeroImageBackground/> */}
		{/* </ClientSuspense> */}
		<HeroImage/>
		</main>
	);
}
