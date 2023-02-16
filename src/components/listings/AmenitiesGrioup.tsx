
import { ListingAmenities } from "../../utils/api/listings";
import Select from "react-select";
import { LandListingProps } from './../../utils/api/listings';
import Creatable, { useCreatable } from 'react-select/creatable';
import { useState } from "react";
import { Checkbox } from "@mantine/core";

interface AmenitiesGrioupProps {
amenities:ListingAmenities | null 
}

export const AmenitiesGrioup = ({amenities}:AmenitiesGrioupProps) => {
const [checked, setChecked] = useState(false);   

if (!amenities){
    return <></>
}

const getOptions=()=>{
return Object.keys(amenities).map((amenity)=>{
    return{
        value:amenity,
        label:amenity
    }
})
}

const landTypeOptions = [
    { value: "land", label: "Land" },
    { value: "apartment", label: "Apartment" },
    { value: "house", label: "House" },
]
const sizeOptions=[
    { value: "50 * 100", label: "Small 50 * 100" },
    { value: "100 * 200", label: "Medium 100 * 200" },
    { value: "200 * 300", label: "Large 200 * 300" },
    { value: "300 * 400", label: "Extra Large 300 * 400" },
]
const waterSourceoptions=[
    { value: "piped", label: "Piped" },
    { value: "borehole", label: "Borehole" },
    { value: "river", label: "River" },]

const facilityDisance=[
{ value: "less than 20 minutes away", label: "less than 20 minutes away" },
{ value: "20 to 40 minutes away", label: "20 to 40 minutes away" },
{ value: "40 to 60 minutes away", label: "40 to 60 minutes away" },
]

const numberOfOptions=[
{ value: "1", label: "One" },
{ value: "2", label: "Two" },
{ value: "3", label: "Three" },
{ value: "4", label: "Four" },
{ value: "5", label: "Five" },
{ value: "6", label: "Six" },
{ value: "7", label: "Seven" },
{ value: "8", label: "Eight" },
{ value: "9", label: "Nine" },
{ value: "10", label: "Ten" },
]

return (
 <div className='w-full h-full flex flex-col gap-2 items-center justify-center'>
        
        <div className='w-full h-full flex flex-col gap-2 items-center justify-center'>
            <Select options={landTypeOptions} defaultValue={landTypeOptions[0]} />
            <Creatable isClearable options={sizeOptions} defaultValue={sizeOptions[0]} />
            <Creatable isMulti options={waterSourceoptions} defaultValue={waterSourceoptions[0]} />
            <Select options={facilityDisance} defaultValue={facilityDisance[0]} />
            <Select options={numberOfOptions} defaultValue={numberOfOptions[0]} />
            <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />   
        </div>
         

            {/* and so on */}

    

 </div>
);
}
