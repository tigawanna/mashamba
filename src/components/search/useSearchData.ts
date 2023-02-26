import { useState, useEffect } from "react";
import { PBListings, searchListing } from "../../utils/api/listings";

export const useSearchData = (keyword: string) => {
  const [data, setData] = useState<PBListings[] | never[]>([]);

  const fetchData = async (word: string) => {
    const res = await searchListing(word);
    setData(res);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      // if(keyword!==''&& keyword.length>2){
      //     fetchData(keyword);
      // }
      fetchData(keyword);
    }, 500);

    // Cleanup function, clears the debounce timer if component is unmounted
    return () => clearTimeout(debounceTimer);
  }, [keyword]);

  return data;
};
