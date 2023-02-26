import { Link } from "rakkasjs";
import { makeImageUrl } from "../../utils/api/pocketbase";
import { GoodImage } from "../shared/wrappers/GoodImage";
import { useSearchData } from "./useSearchData";

interface SearchResultsProps {
  keyword: string;
}

export const SearchResults = ({ keyword }: SearchResultsProps) => {
  const data = useSearchData(keyword);
  return (
    <div className="w-full flex flex-col  justify-center items-center">
      {data &&
        data.map((item) => {
          return (
            <Link
              href={"listings/" + item.id}
              key={item.id}
              className="w-[90%] h-[10%] p-1 flex items-center justify-center rounded-lg bg-slate-600 m-[2px]"
            >
              <GoodImage
                props={{
                  src: (makeImageUrl(
                    "listings",
                    item.id,
                    item.images[0] as string
                  ) + "?thumb=100x50") as string,
                  alt: item?.location,
                  className: "w-[10%] aspect-square object-cover rounded-lg",
                }}
                placeholderSrc={undefined}
                height={"50px"}
                width={"50px"}
              />
              <div
                className="w-full h-full px-1 flex flex-col items-start justify-center 
                rounded-lg"
              >
                <div className="text-xl font-bold font-serif">
                  {item.location}
                </div>
                <div className="w-[99%] line-clamp-1 text-sm">
                  {item.description}
                </div>
                <div className=" font-bold text-purple-300 ">
                  {item.price.toLocaleString("en-us")} Ksh
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};
