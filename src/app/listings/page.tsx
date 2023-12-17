import { Listings } from "@/components/listings/Listings";
import { server_component_pb } from "@/lib/pb/server_component_pb"
import { tryCatchWrapper } from "@/utils/helpers/async"
import { NextPageProps } from "@/utils/types";
import { NextPage } from "next";
import { headers } from "next/headers";
import { expand } from "typed-pocketbase";

export interface PageProps {
  params: Record<string, string | undefined>;
  searchParams:{
    page?:number
  }
}

export default async function ListingsPage({searchParams:{page=1}}:PageProps){

    const {pb} = await server_component_pb()
    const listings = await tryCatchWrapper(pb.collection("mashamba_listings").
    getList(page,12,{
        expand:expand({"owner":true}),
    }))
    console.log("listings ==== ",listings)
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        {listings?.data&&<Listings listings={listings.data?.items}/>}
        </div>
    )
}
