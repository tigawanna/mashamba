import { getFileURL } from "@/lib/pb/client";
import { MashambaListingsResponse, MashambaOwnerResponse } from "@/lib/pb/db-types";
import Link from "next/link";
import { TypedRecord } from "typed-pocketbase";
import { Image } from "@nextui-org/react";
import { Card, CardFooter } from "@nextui-org/react";

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
    <Link
      href={`/listings/${listing.id}`}
      className=" w-full flex flex-col items-start rounded-2xl hover:brightness-75">
      <Card
        isFooterBlurred
        className="w-full h-[400px] flex flex-col justify-between ">
        {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white/90 font-medium text-3xl bg-slate-700/40 px-3 ">
          {listing.location}
        </h4>
      </CardHeader> */}
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
              <p className="text-3xl font-bold">{listing.location}</p>
              <p className="text-sm rounded-lg border-t">{listing.amenities?.size}</p>
              <p className=" text-lg">{listing.price.toLocaleString("en-US")} Ksh</p>
            </div>
            <div className="flex flex-col  items-start justify-between w-full gap-2">
              <span className="text-sm flex font-semibold">Owner: {listing.expand.owner.name}</span>
              <p className="text-sm line-clamp-1 font-serif pb-5 ">{listing.description}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
