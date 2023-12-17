import { Listings } from "@/components/listings/Listings";
import { ListingsCardLoader } from "@/components/listings/ListingsCradLoader";
import { HeroSection } from "@/components/root/HeroSection";
import { Suspense } from "react";


export interface PageProps {
  params: Record<string, string | undefined>;
  searchParams: {
    q?: string;
    p?: number;
  };
}

export default async function Home({ searchParams }: PageProps) {

  return (
    <section className="flex flex-col  h-full gap-2 min-h-screen">
      <HeroSection />
      <Suspense fallback={<ListingsCardLoader no={12} />}>
        <Listings searchParams={searchParams}/>
      </Suspense>
    </section>
  );
}
