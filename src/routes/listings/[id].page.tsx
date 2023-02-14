import { Page, PageProps, useServerSideQuery } from "rakkasjs";
import { getOneListing } from "../../utils/api/listings";
import { Location } from "../../components/location/Location";


const OneListingPage: Page = function OneListingPage({ params }: PageProps) {


    // console.log("land id ====> ",params)
    const land_id= parseInt(params.id)

    const { data, refetch } = useServerSideQuery(
        () => {
            if (typeof land_id !== "number") {
                throw new Error("Invalid request , param prod_id must be of type number");
            }
            return getOneListing(land_id)
        },
        {
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
        });
    // console.log("product data ===> ",data)

    if(!data){
        return <div>Loading...</div>
    }
    const land = data
    
    return (
        <main className="w-full h-full min-h-screen flex flex-col items-center justify-center">
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                
         
                
                <div
                    key={land.latitude + land.longitude + land.owner}
                    className="h-[100%] max-h-[400px]  
                        flex md:flex-row flex-col items-center justify-center rounded-2xl m-2">
     
                   <div className="font-serif p-3 md:w-[40%]">
                        <h1 className='text-2xl font-bold'>{land.location}</h1>
                        <p className='text-sm'>{land.description}</p>
                        <div className="border-t ">
                            <p className='text-sm'>Owner: {land.owner}</p>
                            <p className='text-sm'>{land.phonw}</p>
                            <p className='text-sm'>{land.email}</p>
                        </div>
                    </div>

                    <img className='h-auto w-[90%]  md:w-[30%]  object-cover rounded'
                        src={`https://picsum.photos/id/${29}/200/200`}
                        alt={land.location}
                        height={'200px'} width={'200px'} />

                </div>

                <div className="w-full">
                    <Location display={false} coords={{ lat: land.longitude, lng: land.longitude }} />
                </div>


            </div>

        </main>

    );
};

export default OneListingPage;

