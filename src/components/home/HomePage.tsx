import BigLand from "../../assets/land-big.webp";
import { GoodImageCarousel } from "./../shared/wrappers/GoodCaroussel";
interface HomePageTabsProps {}

export const HomePageComponent = ({}: HomePageTabsProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-[40%] flex justify-center items-center">
        <GoodImageCarousel
          imgs={[BigLand, BigLand]}
          height={"300px"}
          width={"600px"}
          props={{ className: "w-[80%]" }}
        />
        <GoodImageCarousel
          imgs={[BigLand, BigLand]}
          height={"300px"}
          width={"600px"}
          props={{ className: "w-[80%]" }}
          autoScroll={true}
          autoSrollLoop={true}
        />
      </div>
    </div>
  );
};
