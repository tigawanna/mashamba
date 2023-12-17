import { getFileURL } from "@/lib/pb/client";
import { MashambaListingsResponse, MashambaOwnerResponse } from "@/lib/pb/db-types";
import Link from "next/link";
import { TypedRecord } from "typed-pocketbase";
import { Button, Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Mail, Phone } from "lucide-react";
import { Icons } from "../icons/Iconts";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

interface ListingsProps {
  listings: TypedRecord<
    MashambaListingsResponse,
    {
      owner: TypedRecord<MashambaOwnerResponse>;
    }
  >[];
}

export function Listings({ listings }: ListingsProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[90%] p-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-3 lg:gap-4">
        {listings &&
          listings.map((land) => {
            //   const alt_img_url = getFileURL({
            //     collection_id_or_name: "mashamba_listings",
            //     file_name: (land.images[0] as string) + "?thumb=100x100",
            //     record_id: land.id,
            //   });

            return (
              // <Link
              //   href={`/listings/${land.id}`}
              //   key={land.id}
              //   className=" w-full flex flex-col items-start shadow-lg border hover:shadow-lg
              // hover:shadow-slate-300 rounded-2xl ">
              //   <div className=" h-full w-full flex items-center justify-center relative">
              //     {land.status === "sold" ? (
              //       <div
              //         className="w-full h-full absolute font-bold font-serif
              //           flex items-center justify-center  text-6xl  text-slate-50 bg-slate-500 bg-opacity-30">
              //         SOLD
              //       </div>
              //     ) : null}

              //     <Image as={NextImage} width={300} height={200} alt={land?.location} src={img_url} />
              //   </div>

              //   <div className=" p-3">
              //     <h1 className="text-2xl font-bold">{land.location}</h1>
              //     <p className="text-sm line-clamp-3 font-serif  py-1">{land.description}</p>

              //     <p className="text-sm rounded-lg border-t">{land.amenities?.size}</p>
              //     <p className="font-semibold font-sans text-lg text-purple-900">
              //       {land.price.toLocaleString("en-US")} Ksh
              //     </p>

              //     <div className="border-t p-1 m-1">
              //       <span className="text-sm flex font-semibold">Owner: {land.expand.owner.name}</span>
              //       <div className="text-sm flex gap-1">
              //         <Phone className="w-5 h-5" />
              //         {land.expand.owner.phone}
              //       </div>
              //       <div className="text-sm flex gap-1">
              //         <Icons.facebook className="w-5 h-5" />
              //         {land.expand.owner.whatsapp}
              //       </div>
              //       <div className="text-sm flex gap-1">
              //         <Icons.whatsapp className="w-5 h-5" />
              //         {land.expand.owner.whatsapp}
              //       </div>
              //       <div className="text-sm flex gap-1">
              //         <Mail className="w-5 h-5" />
              //         {land.expand.owner.email}
              //       </div>
              //     </div>
              //   </div>
              // </Link>
              <ListingsCard key={land.id} listing={land} />
            );
          })}
      </div>
    </div>
  );
}

interface ListingsCardProps {
  listing: TypedRecord<
    MashambaListingsResponse,
    {
      owner: TypedRecord<MashambaOwnerResponse>;
    }
  >;
}

export function ListingsCard({ listing }: ListingsCardProps) {
  const img_url = getFileURL({
    collection_id_or_name: "mashamba_listings",
    file_name: listing.images[0] as string,
    record_id: listing.id,
  });
  return (
    <Card isFooterBlurred className="w-full h-[400px] flex flex-col justify-between">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        {/* <p className="text-tiny text-white/60 uppercase font-bold">{listing.location}</p> */}
        <h4 className="text-white/90 font-medium text-3xl bg-slate-700/40 px-3 ">
          {listing.location}
        </h4>
      </CardHeader>
      <div className=" min-hh-[200px] h-[60%] w-full flex items-center justify-center relative">
        {listing.status === "sold" ? (
          <div
            className="w-full h-full absolute font-bold font-serif
        flex items-center justify-center  text-6xl  text-slate-50 bg-slate-500 bg-opacity-30">
            SOLD
          </div>
        ) : null}
        <Image
          removeWrapper
          alt={listing?.location}
          className="z-0 w-full h-full object-cover"
          src={img_url}
        />
      </div>
      <CardFooter
        className="z-10 border-t-1
      border-default-600 dark:border-default-100 ">
        <div className="flex flex-col gap-2 items-center w-full h-full">
          <div className="flex  gap-2 items-center justify-between w-full">
            <p className="text-3xl ">{listing.location}</p>
            <p className="text-sm rounded-lg border-t">{listing.amenities?.size}</p>
            <p className=" text-lg">Ksh {listing.price}</p>
          </div>
          <p className="text-sm line-clamp-1 font-serif py-5 ">{listing.description}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
