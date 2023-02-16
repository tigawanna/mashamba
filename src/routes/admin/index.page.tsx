// admin page
import { useState } from 'react';
import { ListingsForm } from './../../components/listings/ListingsForm';
import { useMutation } from 'rakkasjs';
import { PBListings } from '../../utils/api/listings';
import { concatErrors } from '../../utils/helper/concatErrors';

export type ListingFormInputs = Omit<PBListings, "id" | "collectionId" | "collectionName" | "created" | "updated">

export default function AdminPage() {
    const [open, setOpen] = useState(false)
    const [error, setError] = useState({ name: "", message: "" });

    const [input, setInput] = useState<ListingFormInputs>({
        location: "",
        longitude: 0,
        latitude: 0,
        description: "",
        phone: "",
        status: "",
        image: "",
        amenities: "",
        dimensions: "",
        owner: ""
    });

    async function saveListing(input: ListingFormInputs){
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

    const mutation = useMutation<PBListings,ListingFormInputs>((input)=>saveListing(input),{
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
             amenities: "",
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
