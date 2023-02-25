// admin page
import { useState } from 'react';
import { ClientSuspense, PageProps, useMutation, useServerSideQuery} from 'rakkasjs';
import { PBListings, getPbListings } from '../../utils/api/listings';
import { concatErrors } from '../../utils/helper/concatErrors';
import { useGeoLocation } from '../../utils/hooks/useGeoLocation';
import { lazy } from 'react'
import { pb } from '../../utils/api/pocketbase';


const ListingsForm = lazy(() => import('../../components/listings/ListingsForm'));

export type ListingFormInputs = Omit<PBListings, "id" | "collectionId" | "collectionName" | "created" | "updated" |"expand">

export default function AdminPage({ params }: PageProps) {
    const { position } = useGeoLocation();
    const [error, setError] = useState({ name: "", message: "" });

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



    if (!data) {
        return <div>Loading...</div>
    }
    const land = data.items[0]
    
    const defalut_input = {
        location: "",
        longitude: position.lng,
        latitude: position.lat,
        description: "",

        status: "available",
        images: [],
        amenities: {
            type: "land",
            size: "",

            water_source: "piped",
            elecricity_source: "utility pole",

            bathrooms: 1,
            bedrooms: 1,
            fireplace: 1,
            garages: 1,
            swimming_pool: 1,

            closest_hospital: "less than 20 minutes away",
            closest_police_station: "less than 20 minutes away",
            closest_school: "less than 20 minutes away",
            closest_town: "less than 20 minutes away",

            gated_community: false,
            parking: false,
            pavements: false,
            street_lights: false
        },

        owner: ""
    }

    const [input, setInput] = useState<ListingFormInputs>(land??defalut_input);
//   console.log("input ===== ",input)
    
    async function saveListing(input: ListingFormInputs){
    //   console.log("input on fetch === ",input)
        const excludeKeys = ['amenities','images']

        const formdata = new FormData();
        if(input.images){
            input.images?.forEach(image=>{
                formdata.append('images',image as Blob)
            })
        }

        if(input.amenities){
            formdata.append("amenities", JSON.stringify(input.amenities));
        }
        for (const key in input) {
            if (!excludeKeys.includes(key) && input[key as keyof typeof input] !== "") {
                // @ts-expect-error
                formdata.append(key, input[key]);
            }
        }
        const res = await pb.collection('listings').create<PBListings>(formdata);
        // console.log("res ==== ",res)
        return res
    } 

    const mutation = useMutation<PBListings,ListingFormInputs>(
        (input)=>saveListing(input),
        { 
        onSuccess:()=>{

        setError({ name: "", message:"" });

        },onError:(err)=>{
            console.log("rakkas useMutaion error  === ",err)
            setError({ name: "main", message:concatErrors(err)});
        }
    })

    return (
        <main className="w-full min-h-screen h-full flex flex-col justify-center items-center">
        <ClientSuspense fallback={'loading...'}>
          <ListingsForm
             label='Add New Listing' 
             mutation={mutation}
             input={input}
             setInput={setInput}
             error={error}
             setError={setError}
            />
        </ClientSuspense>
        </main>
    );
}
