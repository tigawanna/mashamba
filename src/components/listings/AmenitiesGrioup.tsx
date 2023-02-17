
import { ListingAmenities } from "../../utils/api/listings";
import Select from "react-select";
import Creatable, { useCreatable } from 'react-select/creatable';
import { useEffect, useState } from "react";
import { Checkbox } from "@mantine/core";


interface AmenitiesGrioupProps {
    amenities: ListingAmenities | null
    setAmenity: (key: keyof ListingAmenities, value:any) => void
}

export const AmenitiesGrioup = ({ amenities,setAmenity }: AmenitiesGrioupProps) => {


    if (!amenities) {
        return <></>
    }

    const landTypeOptions = [
        { value: "land", label: "Land" },
        { value: "apartment", label: "Apartment" },
        { value: "house", label: "House" },
    ]
    const sizeOptions = [
        { value: "50 * 100", label: "Small 50 * 100" },
        { value: "100 * 200", label: "Medium 100 * 200" },
        { value: "200 * 300", label: "Large 200 * 300" },
        { value: "300 * 400", label: "Extra Large 300 * 400" },
    ]
    const waterSourceoptions = [
        { value: "piped", label: "Piped" },
        { value: "borehole", label: "Borehole" },
        { value: "other", label: "Other" }
    ]

    const elecSourceoptions = [
        { value: "utility pole", label: "Utility Pole" },
        { value: "generator", label: "Generator" },
        { value: "other", label: "Other" }
    ]

    const facilityDisance = [
        { value: "less than 20 minutes away", label: "less than 20 minutes away" },
        { value: "20 to 40 minutes away", label: "20 to 40 minutes away" },
        { value: "more than 40 minutes away", label: "more than 40 minutes away" },
    ]

    const numberOfOptions = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "7", label: "7" },
        { value: "8", label: "8" },
        { value: "9", label: "9" },
        { value: "10", label: "10" },
    ]

    const facilities = ["closest_school", "closest_hospital", "closest_police_station", "closest_town"] as const
    const buildingOptions = ["gated_community", "pavements", "street_lights", "parking"] as const
    const countedFacilities = ["bedrooms", "bathrooms", "garages", "fireplace","swimming_pool"] as const

    const getDefaultSelectValue = (key: keyof ListingAmenities, options: { value: string; label: string; }[]) => {
        if (amenities[key]) {
            return { value: amenities[key], label: amenities[key] }
        }
        return options[0]
    }
    const isBoxChecked=(key:keyof ListingAmenities)=>{
        console.log("is box checked === ",amenities[key])
        if(amenities[key]!==undefined || amenities[key] !== null){
            return amenities[key] as boolean
        }
        return false
    }
    // console.log("amenities ", amenities)


    return (
        <div className='w-full h-full flex flex-col gap-2 items-center justify-center'>

            {/* property type */}
            <div className='w-full h-full flex flex-col gap-2 items-center justify-center'>
                <div className="w-[84%]">Property Type</div>
                <Select
                    options={landTypeOptions}
                    defaultValue={getDefaultSelectValue("type", landTypeOptions)}
                    className="w-[85%]" />
            </div>


            {/* land size */}
            <div className='w-full h-full flex flex-col gap-2 items-center justify-center'>
                <div className="w-[84%]">Size</div>
                <Creatable isClearable
                    options={sizeOptions}
                    className="w-[85%]"
                    defaultValue={getDefaultSelectValue("size", sizeOptions)}
                />
            </div>


            {/* water source  */}
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <div className="w-[84%]">Water</div>
                <Creatable isMulti
                    options={waterSourceoptions}
                    defaultValue={getDefaultSelectValue("water_source", waterSourceoptions)}
                    className='w-[85%]'
                />
            </div>

            {/* electrical source */}
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <div className="w-[84%]">Electricity</div>
                <Creatable isMulti
                    options={elecSourceoptions}
                    defaultValue={getDefaultSelectValue("elecricity_source", elecSourceoptions)}
                    className='w-[85%]'
                />
            </div>

            {/* electrical source */}
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <div className="w-[84%]">Electricity</div>
                <Creatable isMulti
                    options={elecSourceoptions}
                    defaultValue={getDefaultSelectValue("elecricity_source", elecSourceoptions)}
                    className='w-[85%]'
                />
            </div>
        
         {/* grouping  distance related*/}
            {
                facilities.map((facility) => (
                    <div 
                    key={facility}
                    className='w-full h-full flex flex-col items-center justify-center'>
                        <div className="w-[84%] capitalize">{facility.replace(/_/g, " ")}</div>

                        <Select
                            options={facilityDisance}
                            className="w-[85%]"
                            defaultValue={getDefaultSelectValue(facility, facilityDisance)}
                        />
                    </div>
                ))
            }
            
            {/* grouoing the boolean options */}
            <div className='w-[85%] h-full flex flex-wrap items-center justify-center gap-2'>
            {
                
                buildingOptions.map((opt) => (
                 <div 
                    key={opt}
                    className='w-fit p-2 gap-2 h-full flex items-center justify-center border rounded'>
                        <div className="capitalize">{opt.replace(/_/g, " ")}</div>
                        <Checkbox
                            checked={amenities[opt]}
                            onChange={(e) => { setAmenity(opt,e.target.checked)}}

                        />

                    </div>
                ))
            }
            </div>

            {/* grouping the counted fields */}
            <div className='w-[85%] h-full flex flex-wrap items-center justify-center gap-2'>
                {
                    countedFacilities.map((opt) => (
                        <div 
                        key={opt}
                        className='w-fit   h-full flex items-center justify-center border rounded'>
                            <div className="capitalize min-w-fit">{opt.replace(/_/g, " ")} :</div>
                            <Select
                                options={numberOfOptions}
                                defaultValue={getDefaultSelectValue(opt, numberOfOptions)}
                            />
                        </div>
                )) 
                
                }
                
            </div>

        
       

        </div>
    );
}


