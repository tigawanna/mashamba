import BigLand from "../../assets/land-big.webp";
import { TheIcon } from "../shared/wrappers/TheIcon";
import css from "./home.module.css";
import { Link } from "rakkasjs";
import { BsArrowRight } from "react-icons/bs/index.js";
import { ShowcaseListings } from "./ShowcaseListings";




interface HeroImageProps { }
export const HeroImage = ({ }: HeroImageProps) => {

    return (
        <div className="w-full h-full flex items-center justify-center relative text-white">
            <img
                src={BigLand}
                alt="big land"
                width="800"
                height="400"
                loading="lazy"
                className={css.home_img}
            />



            <div className="h-full w-full bg-opacity-40 z-3 absolute  bg-slate-700 
                flex flex-col md:flex-row items-center justify-center  ">
                
                <div className="w-[90%] md:w-[40%] flex flex-col items-start justify-start gap-5">
                <div className="w-full  text-6xl font-bold font-serif capitalize first-letter:text-purple-400">
                {" "}<div>find</div> your Dream property with us</div>
                
                <div className=" w-full ">
                <Link href={"listings"}
                className="flex gap-2 w-fit items-center justify-center
                animate-bounce 
                border-b-4 border-b-slate-400 text-purple-400 text-3xl font-bold p-2 mt-2 ">
                Browse catalog{" "}
                <TheIcon Icon={BsArrowRight} iconstyle="hover:scale-105" />
                </Link>
                </div>
                </div>

                <div className="w-[30%] h-fit bg-slate-900 bg-opacity-60 rounded-xl">
                    {/* <HomePageComponent/> */}
                 <ShowcaseListings/>
                </div>


            </div>




        </div>
    );
};

