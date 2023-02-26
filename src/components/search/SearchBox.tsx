import { TheIcon } from "../shared/wrappers/TheIcon";
import { FaSearch } from "react-icons/fa";
interface SearchBoxProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBox = ({ keyword, setKeyword }: SearchBoxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <div
        className="flex w-[90%] md:w-[50%] h-10  border shadow-3xl rounded-xl text-black 
        items-center justify-center gap-2 "
      >
        <input
          value={keyword}
          onChange={handleChange}
          className="w-full p-1 border-none"
        />
        <TheIcon Icon={FaSearch} size="40px" iconstyle="p-1" />
      </div>
    </div>
  );
};
