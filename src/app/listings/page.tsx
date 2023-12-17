import { Listings } from "@/components/listings/Listings";
import { ListingsCardLoader } from "@/components/listings/ListingsCradLoader";
import { server_component_pb } from "@/lib/pb/server_component_pb";
import { tryCatchWrapper } from "@/utils/helpers/async";
import { Suspense } from "react";
import { expand } from "typed-pocketbase";

export interface PageProps {
  params: Record<string, string | undefined>;
  searchParams: {
    page?: number;
  };
}

export default async function ListingsPage({ searchParams: { page = 1 } }: PageProps) {
  const { pb } = await server_component_pb();
  const listings = await tryCatchWrapper(
    pb.collection("mashamba_listings").getList(page, 12, {
      expand: expand({ owner: true }),
    })
  );

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl font-bold ">Hello world!</h1>
      <Suspense fallback={<ListingsCardLoader no={12} />}>
        {listings?.data && <Listings listings={listings.data?.items} />}
      </Suspense>
    </div>
  );
}
