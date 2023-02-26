import { UseMutationResult } from "rakkasjs";
import React from "react";
import { PlainFormButton } from "../shared/form/FormButton";
import { ListingAmenities, PBListings } from "../../utils/api/listings";
import { ListingFormInputs } from "../../routes/admin/index.page";
import { FormInput } from "../shared/form/FormInput";
import { FormTextArea } from "./../shared/form/FormTextArea";
import { AmenitiesGroup } from "./AmenitiesGroup";
import ReactLeafletMapCard from "../location/ReactLeafletMapCard";
import { checkIfEmpty } from "../../utils/helper/checkIfObjectHasemptyField";
import Select from "react-select";
import { getOwner } from "../../utils/api/owner";
import { SearchSelect } from "./SearchSelect";
import { ImageInput } from "./../shared/form/ImageInput";

interface ListingsFormProps {
  mutation: UseMutationResult<PBListings, ListingFormInputs>;
  label: string;
  input: ListingFormInputs;
  setInput: React.Dispatch<React.SetStateAction<ListingFormInputs>>;
  error: { name: string; message: string };
  setError: React.Dispatch<
    React.SetStateAction<{ name: string; message: string }>
  >;
}

const ListingsForm = ({
  label,
  mutation,
  input,
  setInput,
  error,
  setError,
}: ListingsFormProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInput((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
    if (error.message !== "" || error.name !== "") {
      setError({ name: "", message: "" });
    }
  };

  const setAmmenity = (key: keyof ListingAmenities, value: any) => {
    // console.log("updationg k,v ",key,value)
    if (key !== undefined && key !== null) {
      setInput((prev) => {
        return { ...prev, amenities: { ...prev.amenities, [key]: value } };
      });
    }
  };

  const setMapLocation = (lat: number, lng: number) => {
    setInput((prev) => {
      return { ...prev, latitude: lat, longitude: lng };
    });
  };
  const setOwner = (value: any) => {
    setInput((prev) => {
      return { ...prev, owner: value };
    });
    // console.log("input ",input)
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("about to save ",input)
    mutation.mutate(input);
  };

  const StatusOptions = [
    { label: "Available", value: "available" },
    { label: "Sold", value: "sold" },
  ];

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
        {/* property location */}
        <FormInput<ListingFormInputs>
          error={error}
          handleChange={handleChange}
          input={input}
          prop="location"
          label="Property location"
        />
        {/*  property owner */}
        <div className="w-[90%] gap-1 py-2 flex flex-col  items-center justify-center">
          <Select
            options={StatusOptions}
            defaultValue={StatusOptions[0]}
            className="w-full"
            onChange={(value) => {
              setInput((prev) => {
                return {
                  ...prev,
                  status: value?.value === "sold" ? "sold" : "available",
                };
              });
            }}
          />
        </div>

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
        <AmenitiesGroup amenities={input.amenities} setAmenity={setAmmenity} />

        {/*  coodinates map and inputs */}
        <div className="w-[90%] p-5 flex flex-row  items-center justify-center">
          <FormInput<ListingFormInputs>
            error={error}
            handleChange={handleChange}
            input={input}
            prop="longitude"
            type={"number"}
            label="Property Longitude"
          />
          <FormInput<ListingFormInputs>
            error={error}
            handleChange={handleChange}
            input={input}
            prop="latitude"
            type={"number"}
            label="Property latitude"
          />
        </div>
        <div className="w-[90%] p-5 flex flex-row  items-center justify-center">
          <ReactLeafletMapCard
            coords={{ lat: input.latitude, lng: input.longitude }}
            setMapLocation={setMapLocation}
            display_only={false}
          />
        </div>

        {/* image input section  */}
        <ImageInput
          error={error}
          setInput={setInput}
          input={input}
          prop={"images"}
          label="Property Images"
          max_images={5}
        />

        <div className="w-[90%] flex  flex-col items-center justify-center">
          {checkIfEmpty(input).empty ? (
            <div
              className="m-1 w-full text-center  line-clamp-4 p-2 bg-red-100 border-b-2 
                        border-red-800 text-red-900  rounded-xl"
            >
              {checkIfEmpty(input).value}
            </div>
          ) : null}
        </div>
        {/* submit button*/}
        <PlainFormButton
          disabled={checkIfEmpty(input).empty}
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
};

export default ListingsForm;
