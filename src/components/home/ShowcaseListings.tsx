import { useServerSideQuery } from "rakkasjs"
import { useState } from "react"
import { GetPbListingsParams, getPbListings } from "../../utils/api/listings"
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa"
import { GoodImage } from "../shared/wrappers/GoodImage"
import { TheIcon } from "../shared/wrappers/TheIcon"
import { makeImageUrl } from "../../utils/api/pocketbase"

interface ShowcaseListingsProps {

}

export const ShowcaseListings = ({}:ShowcaseListingsProps) => {
    const [params, setParams] = useState<GetPbListingsParams>({
        filter_id: "",
        perPage: 3,
        page: 1,
        sort: "-created",
        expand: "owner",
    })
    const updatePage = (page: number) => {
        setParams({ ...params, page: page })
    }
    const { data, refetch } = useServerSideQuery(
        () => {
            // if (typeof land_id !== "string") {
            //     throw new Error("Invalid request , param prod_id must be of type number");
            // }
            return getPbListings(params);
        },
        {
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
        }
    )
const [current,setCurrent]=useState({idx:0,listing:data?.items[0]})

if(!current.listing){
    return <div></div>
}

const land = current.listing
    const img_url = makeImageUrl(
        "listings",
        land.id,
        land.images[0] as string
    );
return (
 <div className='w-full h-full flex items-center justify-center'>

  <div className=" w-full flex flex-col items-start shadow-lg border rounded-2xl ">
       <div className=" h-full w-full flex items-center justify-center relative">
                {land.status === "sold" ? (
                    <div
                        className="w-full h-full absolute font-bold font-serif
                      flex items-center justify-center  text-6xl  text-slate-50 bg-slate-500 bg-opacity-30">
                        SOLD
                    </div>
                ) : null}

                <GoodImage
                    props={{ src: img_url as string, alt: land?.location }}
                    placeholderSrc={img_url+"?thumb=100x100"}
                    height={"100px"}
                    width={"200px"}
                />
            </div>

            <div className=" p-3">
                <h1 className="text-2xl font-bold">{land.location}</h1>
                <p className="text-sm line-clamp-3 font-serif  py-1">{land.description}</p>

                <p className="text-sm rounded-lg border-t">{land.amenities?.size}</p>
                <p className="font-semibold font-sans text-lg text-purple-200">
                    {land.price.toLocaleString("en-US")} Ksh
                </p>

                <div className="border-t p-1 m-1">
                    <p className="text-sm flex font-semibold">
                        Owner: {land.expand.owner.name}
                    </p>
                    <p className="text-sm flex gap-1">
                        <TheIcon Icon={FaPhone} />
                        {land.expand.owner.phone}
                    </p>
                    <p className="text-sm flex gap-1">
                        <TheIcon Icon={FaWhatsapp} />
                        {land.expand.owner.whatsapp}
                    </p>
                    <p className="text-sm flex gap-1">
                        <TheIcon Icon={FaEnvelope} />
                        {land.expand.owner.email}
                    </p>
                </div>
            </div>
        </div>

 </div>
);
}
