"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@nextui-org/react";
import { Loader, Search } from "lucide-react";
import { useSearchWithQuery } from "@/utils/hooks/search";
interface ListingsSearchbarProps {}

export function ListingsSearchbar({}: ListingsSearchbarProps) {
const {isDebouncing,keyword,setKeyword} = useSearchWithQuery()
  return (
    <div className="w-full  flex items-center justify-center">
      <div className="w-[70%] ">
        <Input
          label=""
          value={keyword}
          onClear={()=>setKeyword("")}
          onChange={(e)=>setKeyword(e.target.value)}
          isClearable
          radius="sm"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <Search className="text-black/50 mb-1 dark:text-white/90 
            text-slate-400 pointer-events-none flex-shrink-0" />
          }
          endContent={
            isDebouncing&&<Loader className="animate-spin"/>        
             }
        />
      </div>
    </div>
  );
}
