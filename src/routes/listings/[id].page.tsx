import { ClientSuspense, Head,Link, Page, PageProps, useServerSideQuery } from "rakkasjs";
import { getPbListings } from "../../utils/api/listings";
// import ReactLeafletMapCard from "../../components/location/ReactLeafletMapCard";
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa/index.js';
import { TheIcon } from './../../components/shared/wrappers/TheIcon';
import { makeImageUrl } from "../../utils/api/pocketbase";
import { GrUp, GrDown } from 'react-icons/gr/index.js'

import { useState } from 'react';
import { GoodImage } from "../../components/shared/wrappers/GoodImage";

import { lazy } from 'react';
import { GoodImageCarousel } from "../../components/shared/wrappers/GoodCaroussel";
const ReactLeafletMapCard = lazy(() => import('../../components/location/ReactLeafletMapCard'));

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

    const [hideDetails, setHideDetails] = useState(true);
    // console.log("product data ===> ",data)
    // const [image,setImage] = useState({img:data?.items[0]?.images[0] as string,idx:0})
    if(!data){
        return <div>Loading...</div>
    }
    const land = data.items[0]
    const img_url = makeImageUrl(
        'listings',
        land?.id as string,
        data?.items[0]?.images[0] as string
    );
    
    const getImagesUrls=()=>{
        return land?.images.map((img)=>{
            return makeImageUrl(
                'listings',
                land?.id as string,
                img as string
            ) as string
        })
    }

    // const alt_img_url = makeImageUrl('listings', land.id, land.images[1] as string);
    return (
        <main className="w-full h-full min-h-screen flex flex-col items-center justify-center">
            <Head title={land.location}>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content={land.description} />
                <meta name="keywords" content={land.description} />
   
            </Head>
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                
                <Link className="text-lg text-purple-900 hover:text-purple-500"
                    href={`../admin/${land?.id}`}> Edit </Link>
            
            <div
                key={land.id}
                className="w-[90%]  flex flex-col lg:flex-row  items-center justify-center rounded-2xl m-2">


                    <GoodImageCarousel imgs={getImagesUrls()} 
                        height={'300px'}
                        width={'600px'}
                        props={{
                            className: 'w-[80%]',
                            src: img_url as string,
                            alt: land?.location,
                        }}
                    />

                    <div className="font-serif p-5 w-[90%] lg:w-[40%]">
                        
                        <div className="flex items-center justify-start gap-5">
                        <h1 className='text-2xl font-bold'>{land.location}</h1>
                        <p className='font-semibold font-sans text-2xl text-purple-300'>
                            {land.price.toLocaleString('en-US')} Ksh</p>
                            </div>
                        
                        <p className={hideDetails ?'text-sm line-clamp-5 mt-4':'text-sm mt-4'}>
                            {land.description}
                
                        </p>
                        <button 
                         onClick={()=>setHideDetails(!hideDetails)}
                         className="bg-slate-900 p-1">
                            <TheIcon Icon={hideDetails ? GrDown:GrUp} iconAction={() => {
                                setHideDetails(!hideDetails)
                            }}/>
                         </button>
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

