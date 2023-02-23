import { ClientSuspense, Link, Page, PageProps, useServerSideQuery } from "rakkasjs";
import { getPbListings } from "../../utils/api/listings";
// import ReactLeafletMapCard from "../../components/location/ReactLeafletMapCard";
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa/index.js';
import { TheIcon } from './../../components/shared/wrappers/TheIcon';
import { makeImageUrl } from "../../utils/api/pocketbase";
import { GrNext, GrPrevious } from 'react-icons/gr/index.js'
import { lazy } from 'react';
const ReactLeafletMapCard = lazy(() => import('../../components/location/ReactLeafletMapCard'));
import { useState } from 'react';
import { GoodImage } from "../../components/shared/wrappers/GoodImage";


const OneListingPage: Page = function OneListingPage({ params }: PageProps) {



    const { data, refetch } = useServerSideQuery(
        () => {
            if (typeof params.id !== "string") {
                throw new Error("Invalid request , params.id must be of type string");
            }
            return getPbListings(params.id)
        },
        {
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
    });

    // console.log("product data ===> ",data)
    const [image,setImage] = useState({img:data?.items[0]?.images[0] as string,idx:0})
    if(!data){
        return <div>Loading...</div>
    }
    const land = data.items[0]
    const img_url = makeImageUrl(
        'listings',
        land?.id as string,
        image.img as string
    );
    const alt_img_url = makeImageUrl('listings', land.id, land.images[1] as string);
    return (
        <main className="w-full h-full min-h-screen flex flex-col items-center justify-center">
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <Link className="text-lg text-purple-900 hover:text-purple-500"
                href={`../admin/${land?.id}`}> Edit </Link>
                <div
                    key={land.id}
                    className="w-[90%]  flex flex-col md:flex-row  items-center justify-center rounded-2xl m-2">

                    <div className=" w-[90%] md:w-[50%] h-[50%] flex items-center justify-center gap-2 ">
                        {image.idx !== 0 ?
                            <TheIcon Icon={GrPrevious} iconAction={() => {
                                setImage((prev) => {
                                    if (prev.idx > 0) {
                                        return { img: data.items[0].images[prev.idx - 1] as string, idx: prev.idx - 1 }
                                    }
                                    return prev
                                })
                            }} /> :
                            null}


                        <div className="w-[90%] h-[30%]">
                            <GoodImage
                                props={{
                                    className: 'w-[60%]',
                                    src: img_url as string,
                                    alt: land?.location,
                                }}
                                placeholderSrc={
                                    img_url ? alt_img_url : undefined
                                }
                                height={'300px'}
                                width={'600px'}
                            />
                        </div>




                        {image.idx !== data.items[0].images.length - 1 ? 
                        <TheIcon Icon={GrNext} iconAction={()=>{
                            setImage((prev)=>{
                                if(prev.idx<data.items[0].images.length-1){
                                    return {img:data.items[0].images[prev.idx+1] as string,idx:prev.idx+1}
                                }
                                return prev
                            })
                        }}/>:
                        null}
         

                    </div>

     
                    <div className="font-serif p-5 w-[90%] md:w-[40%]">
                        <h1 className='text-2xl font-bold'>{land.location}</h1>
                        <p className='text-sm'>
                            {land.description}
                        </p>

                        <div className="border-t ">
                            <p className='text-sm font-semibold'>Owner: {land.expand.owner.name}</p>
                            <p className='text-sm flex gap-1'><TheIcon Icon={FaPhone} />{land.expand.owner.phone}</p>
                            <p className='text-sm flex gap-1'><TheIcon Icon={FaWhatsapp}/>{land.expand.owner.whatsapp}</p>
                            <p className='text-sm flex gap-1'><TheIcon Icon={FaEnvelope} />{land.expand.owner.email}</p>
                        </div>
                    </div>

        </div>

                <div className="w-full flex flex-row  items-center justify-center">
             
                    <div className="w-[90%] md:w-[70%] p-5 ">
                        <ClientSuspense fallback="loading" >
                        <ReactLeafletMapCard
                            display={false} coords={{ lat: land.longitude, lng: land.longitude }}
                        />
                        </ClientSuspense>
                    </div>
                </div>


            </div>

        </main>

    );
};

export default OneListingPage;

