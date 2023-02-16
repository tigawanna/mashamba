// admin page
import { useState } from 'react';
import { ListingsForm } from './../../components/listings/ListingsForm';
import { RequestContext, useServerSideMutation } from 'rakkasjs';
import { PBListings } from '../../utils/api/listings';
import { concatErrors } from '../../utils/helper/concatErrors';
import { useGeoLocation } from './../../utils/hooks/useGeoLocation';

export type ListingFormInputs = Omit<PBListings, "id" | "collectionId" | "collectionName" | "created" | "updated">

export default function AdminPage() {
    const { position } = useGeoLocation();
    const [open, setOpen] = useState(false)
    const [error, setError] = useState({ name: "", message: "" });


    const [input, setInput] = useState<ListingFormInputs>({
        location: "Location",
        longitude: position.lng,
        latitude: position.lat,
        description: "Be descriptive, but don’t go over the top with your praise. Remember, people can tell when you’re trying too hard. For example, we all know “cozy” is code for “very small.” Your real estate listing description is your chance to get creative and paint a picture of your listing. Adding too many extra adjectives will make the readers assume you’re trying to distract them from reality.",
        phone: "",
        status: "",
        image: "",
        amenities:{type:"land"},
        dimensions: "100 x 150",
        owner: ""
    });

    
    async function saveListing(ctx: RequestContext,input: ListingFormInputs){
        console.log("request ctx ",ctx)
        const formdata = new FormData();
        if (input?.image && input.image instanceof File) {
            formdata.append("image", input?.image);
        }
        for (const key in input) {
            if (key !== "image" && input[key as keyof typeof input] !== "") {
                // @ts-expect-error
                formdata.append(key, input[key]);
            }
        }
        const res = await fetch('/api/listings',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                ' Authorization:TOKEN':''
            },
            body:JSON.stringify(formdata)
        })
        return await res.json() as PBListings
    } 

    const mutation = useServerSideMutation<PBListings,ListingFormInputs>((ctx,input)=>saveListing(ctx,input),{
        
        onSuccess:()=>{
       
            setOpen(false)
            setInput({
             location: "",
             longitude: 0,
             latitude: 0,
             description: "",
             phone: "",
             status: "",
             image: "",
             amenities:null,
             dimensions: "",
             owner: ""
            })

        },onError:()=>{
            setError({ name: "", message:concatErrors(error)});
        }
    })

    return (
        <main className="w-full min-h-screen h-full flex flex-coljustify-center items-center">
          <ListingsForm
             label='Add New Listing' 
             mutation={mutation}
             input={input}
             setInput={setInput}
             error={error}
             setError={setError}
            />
        </main>
    );
}
