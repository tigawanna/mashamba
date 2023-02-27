// admin page
import { useState } from "react";
// import { ListingsForm } from './../../components/listings/ListingsForm';
import { ClientSuspense, useMutation } from "rakkasjs";
import { PBListings } from "../../utils/api/listings";
import { concatErrors } from "../../utils/helper/concatErrors";
import { useGeoLocation } from "./../../utils/hooks/useGeoLocation";
import { lazy } from "react";
import { pb } from "../../utils/api/pocketbase";
const ListingsForm = lazy(
  () => import("./../../components/listings/ListingsForm")
);

export type ListingFormInputs = Omit<
  PBListings,
  "id" | "collectionId" | "collectionName" | "created" | "updated" | "expand"
>;

export default function AdminPage() {
  const { position } = useGeoLocation();
  const [error, setError] = useState({ name: "", message: "" });

  const [input, setInput] = useState<ListingFormInputs>({
    location: "",
    longitude: position.lng,
    latitude: position.lat,
    description: "",
    price: 50000,

    status: "available",
    images: [],
    amenities: {
      type: "land",
      size: "50 x 100",

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
      street_lights: false,
    },

    owner: "",
  });
  //   console.log("input ===== ",input)

  async function saveListing(input: ListingFormInputs) {
    //   console.log("input on fetch === ",input)
    const excludeKeys = ["amenities", "images"];

    const formdata = new FormData();
    if (input.images) {
      input.images?.forEach((image) => {
        formdata.append("images", image as Blob);
      });
    }

    if (input.amenities) {
      formdata.append("amenities", JSON.stringify(input.amenities));
    }
    for (const key in input) {
      if (
        !excludeKeys.includes(key) &&
        input[key as keyof typeof input] !== ""
      ) {
        // @ts-expect-error
        formdata.append(key, input[key]);
      }
    }
    const res = await pb.collection("listings").create<PBListings>(formdata);
    // console.log("res ==== ",res)
    return res;
  }

  const mutation = useMutation<PBListings, ListingFormInputs>(
    (input) => saveListing(input),
    {
      onSuccess: () => {
        //  setOpen(false)
        // setInput({
        //  location: "",
        //  longitude: 0,
        //  latitude: 0,
        //  description: "",
        //  status: "avalilabe",
        //  images:[],
        //  amenities:null,
        //  owner: ""
        // })
        setError({ name: "", message: "" });
      },
      onError: (err) => {
        console.log("rakkas useMutaion error  === ", err);
        setError({ name: "main", message: concatErrors(err) });
      },
    }
  );

  return (
    <main className="w-full min-h-screen h-full flex flex-col justify-center items-center">
      <ClientSuspense fallback={"loading..."}>
        <ListingsForm
          label="Add New Listing"
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
