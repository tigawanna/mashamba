import { useState, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai/index.js";
import { TheIcon } from "../wrappers/TheIcon";
import { BiImageAdd } from "react-icons/bi/index.js";




interface InputDataType<T> {
    fields: T
    error: { field: keyof T | "main", message: string }
}
interface FormFileInputProps<T> {
label:string;    
prop: keyof T;
input:InputDataType<T>;
}


export const FormFileInput = <T,>({prop,input,label}:FormFileInputProps<T>) => {
  const [pic, setPic] = useState<File | string | null>();
  const fileInput = useRef<HTMLInputElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if ("files" in e.target && e.target.files) {
            setPic(e.target.files[0]);
            // input.fields[prop]=e.target.files[0];
        };
        console.log("chnaged fileds ===> ",input)   
    }

    const isError = (actionData:InputDataType<T>, prop: keyof T) => {
        if (actionData?.error?.field === prop && actionData?.error?.message &&  actionData?.fields[prop] !=="") {
            return true;
        }
        return false;
    };

    const clearImage = () => {
        setPic(null);
    };

return (
    <div className='flex flex-col items-center justify-center w-full '>
        <label className="font-bold  text-md capitalize  w-[90%] flex items-start">
            {label}
        </label>

        <input name={'pic'} className="hidden" ref={fileInput} type="file" onChange={handleChange} />

        {pic && typeof pic === "object" ? (
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-[90%] flex items-center justify-end">
                    <TheIcon
                        Icon={AiOutlineCloseCircle}
                        size={"40"}
                        iconAction={() => clearImage()}
                    />
                </div>
                <img
                    src={URL.createObjectURL(pic as Blob)}
                    className="max-h-[200px] rounded-lg"
                />
            </div>
        ) : null}

        {pic && typeof pic === "string" ? (
            <img src={pic} className="w-[80%] max-h-[300px] rounded-lg" />
        ) : null}
        <div
            // onClick={(event) => event.stopPropagation()}
            className="w-[90%]"
        >
            <TheIcon
                Icon={BiImageAdd}
                size={"40"}
                iconAction={() => fileInput.current?.click()}
            />
        </div>

        {isError(input, prop) ? (
            <div className="text-base  text-red-600">{input.error.message}</div>
        ) : null}
 </div>
);
}
