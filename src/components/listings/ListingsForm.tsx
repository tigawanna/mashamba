import { UseMutationResult } from "rakkasjs";
import React  from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { PlainFormButton } from "../shared/form/FormButton";
import { TheIcon } from "../shared/wrappers/TheIcon";
import { ListingAmenities, PBListings } from "../../utils/api/listings";
import { ListingFormInputs } from "../../routes/admin/index.page";
import { FormInput } from "../shared/form/FormInput";
import { FormTextArea } from './../shared/form/FormTextArea';
import { AmenitiesGroup } from "./AmenitiesGroup";
import ReactLeafletMapCard from "../location/ReactLeafletMapCard";
import { checkIfEmpty } from "../../utils/helper/checkIfObjectHasemptyField";

import { getOwner } from "../../utils/api/owner";
import { SearchSelect } from "./SearchSelect";
import { ImageInput } from './../shared/form/ImageInput';



interface ListingsFormProps {
    mutation: UseMutationResult<PBListings, ListingFormInputs>
    label: string;
    input: ListingFormInputs;
    setInput: React.Dispatch<React.SetStateAction<ListingFormInputs>>;
    error: { name: string, message: string };
    setError: React.Dispatch<React.SetStateAction<{ name: string, message: string }>>;
}

 const ListingsForm = ({ label,mutation,input,setInput,error,setError }:ListingsFormProps) => {




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

    const setMapLocation=(lat:number,lng:number)=>{
        setInput(prev => {
            return { ...prev,latitude:lat,longitude:lng }
        })   
    }
    const setOwner=(value:any)=>{
        setInput(prev => {
            return { ...prev,owner:value }
        })
        console.log("input ",input)
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


                <ImageInput 
                error={error}
                setInput={setInput}
                input={input}
                image_keys={["image","maige2","image3"]}
                label="Property location"
                            />

            {/* location */}
            {/* property location */}
            <FormInput<ListingFormInputs>
                error={error}
                handleChange={handleChange}
                input={input}
                prop="location"
                label="Property location"
            />
       

            {/*  property dimensions */}
            <FormInput<ListingFormInputs>
                error={error}
                handleChange={handleChange}
                input={input}
                prop="dimensions"
                label="Property dimensions"
            />

            {/*  property owner */}
            <div className="w-[90%] gap-1 py-2 flex flex-col  items-center justify-center">
                <label className="text-md capitalize  w-[100%] flex items-start">
                    Property Owner
                </label>
            <SearchSelect gettterFunction={getOwner} setValue={setOwner} />
            </div>



            {/*  property desciption input */}
            <FormTextArea<ListingFormInputs>
                error={error}
                handleChange={handleChange}
                input={input}
                prop="description"
                label="Property Description"
            />
            {/*  amenities sub form */}
            <AmenitiesGroup 
                amenities={input.amenities}
                setAmenity={setAmmenity} 
           />

             {/*  coodinates map and inputs */}
            <div className="w-[90%] p-5 flex flex-row  items-center justify-center">
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
            </div>
            <div className="w-[90%] p-5 flex flex-row  items-center justify-center">
            <ReactLeafletMapCard
            coords={{lat:input.latitude,lng:input.longitude}}
            setMapLocation={setMapLocation}
                />
            </div>



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
                        <img height="200" width="200"
                            src={URL.createObjectURL(pic as Blob)}
                            className="max-h-[200px] rounded-lg"
                        />
                    </div>
                ) : null}

                {pic && typeof pic === "string" ? (
                    <img src={pic} height="200" width="200"
                    className="w-[80%] max-h-[300px] rounded-lg" />
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
                <div className="m-1 w-full text-center  line-clamp-4 p-2 bg-red-100 border-2 
                        border-red-800 text-red-900  rounded-xl">
                    {error.message}
                </div>
            ) : null}
        </div>
    </div>
);
}


export default ListingsForm
