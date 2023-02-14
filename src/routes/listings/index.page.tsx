// about page

import { Listings } from "../../components/listings/Listings";
import { Location } from "../../components/location/Location";

export default function AboutPage() {
    return (
        <main className="w-full min-h-screen h-full flex justify-center items-center">
            {/* <Location/> */}
            <Listings/>
        </main>
    );
}
