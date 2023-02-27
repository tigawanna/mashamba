import { HeroImage } from "../components/home/HeroImage";
import { Listings } from "../components/listings/Listings";
export default function HomePage() {
  return (
    <main>

        <HeroImage />


      <div className="w-full   bg-opacity-60 rounded-xl">
        <div className="text-xl text-center p-1 font-serif">Top Picks</div>
        {/* <HomePageComponent/> */}
        {/* <ShowcaseListings /> */}
        <Listings 
        show_page_controls={false}
        list_params={
          {
            filter_id:"",
            perPage:4,
            page:1,
            sort:"-created",
            expand:"owner",
          }
        }/>
      </div>
    </main>
  );
}
