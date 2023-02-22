import { Link,  useServerSideQuery } from "rakkasjs";
import { getPbListings } from './../../utils/api/listings';
import { makeImageUrl } from './../../utils/api/pocketbase';
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa/index.js";
import { TheIcon } from "../shared/wrappers/TheIcon";
import { GoodImage } from "../shared/wrappers/GoodImage";

interface ListingsProps {

}


export const Listings = ({}:ListingsProps) => {

    const { data, refetch } = useServerSideQuery(
        () => {
            // if (typeof land_id !== "string") {
            //     throw new Error("Invalid request , param prod_id must be of type number");
            // }
            return getPbListings("")
        },
        {
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
        });

// console.log("listings === ",data)
if(!data){
    return <div className="w-full h-full flex items-center justify-center">loading</div>
}
return (
 <div className='w-full h-full flex items-center justify-center'>
<div className="w-[90%] p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2 lg:gap-4">
{
    data&&data?.items.map((land)=>{
        const img_url = makeImageUrl('listings',land.id,land.images[0] as string);
        const alt_img_url = makeImageUrl('listings', land.id, land.images[1] as string);
        
        return (
        <Link  href={`/listings/${land.id}`}
                key={land.id}
                className=" w-full  flex flex-col items-start 
                shadow-lg border hover:shadow-lg  hover:shadow-slate-300 rounded-2xl ">
                    
            <div className=" h-full w-full flex items-center justify-center relative">
          {land.status ==="sold"?
          <div className="w-full h-full absolute font-bold font-serif
                    flex items-center justify-center  text-6xl  ">
                    SOLD
                  </div>:null}
                        <GoodImage
                            props={{
                            src: img_url as string,
                                alt:land?.location,
                            }}
                            placeholderSrc={
                            img_url ?alt_img_url:undefined
                            }
                            height={'200px'}
                            width={'300px'}
                        />
                  

                    {/* <img className=' h-auto w-full rounded-t-2xl object-cover'
                        src={makeImageUrl('listings',land.id,land?.images[0] as string)
                        +'?thumb=100x100'
                    }
                        alt={land.location}
                          height={'200px'}
                         width={'200px'}
                         /> */}
                    </div>

                
                <div className="font-serif p-3">
                    <h1 className='text-2xl font-bold'>{land.location}</h1>
                    <p className='text-sm line-clamp-3'>{land.description}</p>
                    <p className='text-sm'>Owner: {land.owner}</p>
                    <p className='text-sm'>{land.status}</p>
                    <p className='text-sm'>{land.amenities?.type}</p>
                    <div className="border-t p-1 m-1">
                        <p className='text-sm flex font-semibold'>Owner: {land.expand.owner.name}</p>
                        <p className='text-sm flex gap-1'><TheIcon Icon={FaPhone} />{land.expand.owner.phone}</p>
                        <p className='text-sm flex gap-1'><TheIcon Icon={FaWhatsapp} />{land.expand.owner.whatsapp}</p>
                        <p className='text-sm flex gap-1'><TheIcon Icon={FaEnvelope} />{land.expand.owner.email}</p>
                    </div>
                </div>
                
            </Link>
        )
    })



}



</div>
 </div>
);
}
