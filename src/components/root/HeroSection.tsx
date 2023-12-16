import Image from "next/image";

interface HeroSectionProps {

}

export function HeroSection({}:HeroSectionProps){
return (
  <div className="w-full h-screen flex items-center justify-center relative">
    <Image
      className="w-full h-full  "
      src="/assets/land-big.webp"
      alt="Mashamba Splash screen"
      width={500}
      height={500}
    />
    <div
      className=" w-full  z-3 absolute top-0 bottom-0 
    flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-5">
      <div className="text-5xl font-bold flex bg-opacity-40 bg-slate-700 p-5">
        <div>find your dream property with us</div>
      </div>
    </div>
  </div>
);
}
