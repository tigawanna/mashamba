import { Link, useLocation, useServerSideQuery } from "rakkasjs";
import { getListsings, LandListingProps } from './../../utils/api/listings';

interface ListingsProps {

}




export const Listings = ({}:ListingsProps) => {

const  { data,refetch} = useServerSideQuery(getListsings)
   
// console.log("listings === ",data)
return (
 <div className='w-full h-full flex items-center justify-center'>
    <div className="w-[90%] p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
{
    data&&data?.map((land)=>{
        return (
        <Link  href={`/listings/${land.id}`}
            key={land.latitude+land.longitude+land.owner}
                className="h-full  w-full  shadow-lg border rounded-lx aspect-square accent-fuchsia-400
                        hover:shadow-lg  hover:shadow-slate-300 rounded-2xl 
                        flex flex-col items-start justify-center">
                <img className='h-[300px] w-full  object-cover rounded-t-2xl' 
                    src={`https://picsum.photos/id/${Math.floor(Math.random() * (30 - 9)) + 9}/400/300`} 
                    alt={land.location} 
                 height={'200px'} width={'200px'}/>
                
                <div className="font-serif p-3">
                    <h1 className='text-2xl font-bold'>{land.location}</h1>
                    <p className='text-sm'>{land.description}</p>
                    <div className="border-t ">
                    <p className='text-sm'>Owner: {land.owner}</p>
                    <p className='text-sm'>{land.phonw}</p>
                    <p className='text-sm'>{land.email}</p>
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
