import { Listings } from "@/components/listings/Listings";
import { ListingsCardLoader } from "@/components/listings/ListingsCradLoader";
import { Suspense } from "react";


export interface PageProps {
  params: Record<string, string | undefined>;
  searchParams: {
    q?: string;
    p?: number;
  };
}

export default async function ListingsPage({ searchParams }: PageProps) {

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl font-bold ">Listings</h1>
      <Suspense fallback={<ListingsCardLoader no={12} />}>
     <Listings searchParams={searchParams}/>
      </Suspense>
    </div>
  );
}
