
export interface LandListingProps{
 id:number;
    location: string;
    latitude: number;
    longitude: number;
    description: string;
    owner: string;
    phonw: string;
    email: string;
    extra_details: string;
    image: string;

}

export interface PBListings{

  id: string
  collectionId: string
  collectionName: string
  created: string
  updated: string
  location: string
  longitude: number
  latitude: number
  description: string
  phone: string
  status: string
  image: string| File| null
  amenities: string
  dimensions: string
  owner: string

}


export const getListsings=async()=>{
try{
const response =  await fetch('https://my.api.mockaroo.com/land_listings.json?key=30509c40',{
    method:'GET',
})
return await response.json() as LandListingProps[];
}  

catch(err){
    console.log(err)
}
}

export const getOneListing=async(id:number)=>{
try{
const response =  await fetch('https://my.api.mockaroo.com/land_listings.json?key=30509c40',{
    method:'GET',
}) 
const lands = await response.json() as LandListingProps[];

return lands&&lands.filter(land=>land.id===id)[0]
}  

catch(err){
    console.log(err)
}
}
