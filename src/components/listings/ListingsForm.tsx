import { UseMutationResult } from "rakkasjs";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { PlainFormButton } from "../shared/form/FormButton";
import { TheIcon } from "../shared/wrappers/TheIcon";
import { ListingAmenities, PBListings } from "../../utils/api/listings";
import { ListingFormInputs } from "../../routes/admin/index.page";
import { FormInput } from "../shared/form/FormInput";
import { FormTextArea } from './../shared/form/FormTextArea';
import { AmenitiesGrioup } from "./AmenitiesGrioup";



interface ListingsFormProps {
    mutation: UseMutationResult<PBListings, ListingFormInputs>
    label: string;
    input: ListingFormInputs;
    setInput: React.Dispatch<React.SetStateAction<ListingFormInputs>>;
    error: { name: string, message: string };
    setError: React.Dispatch<React.SetStateAction<{ name: string, message: string }>>;
}

export const ListingsForm = ({ label,mutation,input,setInput,error,setError }:ListingsFormProps) => {




    const [pic, setPic] = React.useState<File | string | null>();
    const fileInput = React.useRef<HTMLInputElement | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if ("files" in e.target && e.target.files) {
            setPic(e.target.files[0]);
            // @ts-expect-error
            setInput(prev => { return { ...prev, image: e.target.files[0] };
            });
        }

        setInput(prev => {
            return { ...prev, [e.target.id]: e.target.value };
        });
        if (error.message !== "" || error.name !== "") {
            setError({ name: "", message: "" });
        }
    };
    
    const setAmmenity = (key: keyof ListingAmenities,value:any)=>{
        console.log("updationg k,v ",key,value)
        if(key!==undefined && key!==null ){
            setInput(prev => {
                return { ...prev, amenities: { ...prev.amenities, [key]:value } }
            })
        }
    }


    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutation.mutate(input);
    };
    // const isError = (err: typeof error, label: keyof ListingFormInputs) => {
    //     if (err.name === label && err.message !== "") {
    //         return true;
    //     }
    //     return false;
    // };

    // const disableButton = (vals: typeof input) => {
    //     // //no-console("input === ",input)
    //     if (checkIfEmpty(vals)) {
    //         return true;
    //     }
    //     return false;
    // };

    const clearImage = () => {
        setPic(null);
        setInput(prev => { return { ...prev, image: null }});
        if (error.message !== "" || error.name !== "") {
            setError({ name: "", message: "" });
        }
    };




console.log("check if emoty ",checkIfEmpty(input))
return (
    <div
        className="w-full h-fit max-h-[90%] flex flex-col items-center justify-center 
             rounded-xl "
    >

        <form
            onSubmit={handleSubmit}
            className="w-[90%] md:w-[60%] h-full border-2 shadow-xl rounded-xl p-3
            flex flex-col items-center justify-center bg-white dark:bg-black dark:text-white"
        >
            <div className="w-[95%]  text-xl font-bold text-center p-2">
                {label}
            </div>
            {/* location */}
            
            <FormInput<ListingFormInputs>
                error={error}
                handleChange={handleChange}
                input={input}
                prop="location"
                label="Property location"
            />
        
            <FormInput<ListingFormInputs>
                error={error}
                handleChange={handleChange}
                input={input}
                prop="longitude"
                type={'number'}
                label="Property Longitude"
            />
            <FormInput<ListingFormInputs>
                error={error}
                handleChange={handleChange}
                input={input}
                prop="latitude"
                type={'number'}
                label="Property latitude"
            />
            {/* <button className="p-1 border rounded hover:bg-purple-900 " onClick={() => setCurrentLocation()}>use current location</button> */}
            <FormInput<ListingFormInputs>
                error={error}
                handleChange={handleChange}
                input={input}
                prop="dimensions"
                label="Property dimensions"
            />
            <FormInput<ListingFormInputs>
                error={error}
                handleChange={handleChange}
                input={input}
                prop="owner"
                label="Property Owner"
            />
            
            <FormTextArea<ListingFormInputs>
                error={error}
                handleChange={handleChange}
                input={input}
                prop="description"
                label="Property Description"
            />
            <AmenitiesGrioup 
                amenities={input.amenities}
                setAmenity={setAmmenity} 
           

            />

            {/* image input section  */}
            <div className="w-full  h-full flex flex-col items-center justify-center ">
                {/* <input className="hidden" {...register('user')}/> */}
                <input className="hidden" ref={fileInput} type="file" onChange={handleChange} />

    
                {pic && typeof pic === "object" ? (
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="w-[90%] flex items-center justify-end">
                            <TheIcon
                                Icon={AiOutlineCloseCircle}
                                size={"25"}
                                iconAction={() => clearImage()}
                            />
                        </div>
                        <img
                            src={URL.createObjectURL(pic as Blob)}
                            className="max-h-[200px] rounded-lg"
                        />
                    </div>
                ) : null}

                {pic && typeof pic === "string" ? (
                    <img src={pic} className="w-[80%] max-h-[300px] rounded-lg" />
                ) : null}
                <div
                    // onClick={(event) => event.stopPropagation()}
                    className="w-[90%]"
                >
                    <TheIcon
                        Icon={BiImageAdd}
                        size={"30"}
                        iconAction={() => fileInput.current?.click()}
                    />
                </div>
            </div>
        
            



            {/* submit button*/}
            <PlainFormButton
                disabled={checkIfEmpty(input)}
                isSubmitting={mutation.isLoading}
                label={label}
            />


        </form>

        <div className="m-1 w-[90%] flex  flex-col items-center justify-center">
            {error?.message !== "" ? (
                <div
                    className="m-1 w-full text-center  line-clamp-4 p-2 bg-red-100 border-2 
                        border-red-800 text-red-900  rounded-xl"
                >
                    {error.message}
                </div>
            ) : null}
        </div>
    </div>
);
}

//  check if an object has an empty values
export function checkIfEmpty<T=unknown>(obj:T){
    for (const key in obj) {
        if (typeof obj[key as keyof T] ==="string" && obj[key as keyof T] === "") {
            console.log(obj[key as keyof T] ,"  is empty")
            return true;
        }
        if (typeof obj[key as keyof T] === "number" && obj[key as keyof T] === 0) {
            console.log(obj[key as keyof T], "  is empty")
            return true;
        }
        if (obj[key as keyof T] instanceof File  && obj[key as keyof T] ) {
            console.log(obj[key as keyof T], "  is empty")
            return true;
        }
    }
    return false;
}

