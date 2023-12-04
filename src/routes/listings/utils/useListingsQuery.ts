import {
  MashambaListingsCollection,
  MashambaListingsResponse,
} from "@/lib/pb/db-types";
import { TypedRecordListQueryParams } from "@/lib/pb/typed-pocketbase";
import { tryCatchWrapper } from "@/utils/helper/async";
import { numberToArray } from "@/utils/helper/others";
import { useSearchWithQuery } from "@/utils/hooks/search";
import { navigate, usePageContext, useSSQ } from "rakkasjs";
import { expand, or, sort } from "typed-pocketbase";

// type SortFn = typeof sort<UtilityShopsResponse>;
// type SortParams = Parameters<SortFn>[0]

// type queryParams = TypedRecordListQueryParams<UtilityShopsCollection, any, any>;

interface UseMashambaListingsProps {
  page_size?: number;
  pb_query_params?: TypedRecordListQueryParams<
    MashambaListingsCollection,
    "created",
    {owner:true}
  >;
}

export function useListingsQuery({
  page_size = 12,
  pb_query_params,
}: UseMashambaListingsProps) {
  const page_ctx = usePageContext();
  const searchQuery = useSearchWithQuery();
  const page_number = parseInt(page_ctx.url.searchParams.get("p") ?? "1") ?? 1;

  // const query = useQuery({
  //   queryKey: ["utility_shops", searchQuery?.debouncedValue, page_number],
  //   queryFn: () =>
  //     tryCatchWrapper(
  //       page_ctx.locals.pb
  //         ?.collection("utility_shops")
  //         .getList(page_number, page_size, {
  //           // ...pb_query_params,
  //           // filter: `shop_number~"${searchQuery.debouncedValue}"`,
  //           filter:or(["tenant.username","~",searchQuery.debouncedValue],
  //           ["shop_number","~",searchQuery.debouncedValue]),
  //           expand: expand({
  //               tenant: true,
  //           })
  //         }),
  //     ),
  // });

  const query = useSSQ((ctx) => {
    return tryCatchWrapper(
      ctx.locals.pb?.collection("mashamba_listings").getList(page_number, page_size, {
      sort:sort("-created"),
        filter: or(
          ["location", "~", searchQuery.debouncedValue],
          ["description", "~", searchQuery.debouncedValue]
        ),
        expand: expand({
          owner: true,
        })
      })
    );
  });
  function handleChange(e: any) {
    searchQuery.setKeyword(e.target.value);
  }
  // console.log({query})
  const total_pages = query?.data?.data?.totalPages??0
  const pages_arr = numberToArray(total_pages!);
  function goToPage(page: number) {
    page_ctx.url.searchParams.set("p", page.toString());
    navigate(page_ctx.url);
  }
  return {
    query,
    searchQuery,
    page_ctx,
    page_number,
    handleChange,
    goToPage,
    pages_arr,
  };
}
