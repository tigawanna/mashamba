interface InputDataType<T> {
    fields: T
    error: { field: keyof T | "main", message: string }
}
interface FormInputProps<T> {
label:string;    
prop: keyof T;
input:InputDataType<T>;
}


export const FormInput = <T,>({prop,input,label}:FormInputProps<T>) => {
  
    const isError = (actionData:InputDataType<T>, prop: keyof T) => {
        if (actionData?.error?.field === prop && actionData?.error?.message &&  actionData?.fields[prop] !=="") {
            return true;
        }
        return false;
    };

return (
    <div className='flex flex-col items-center justify-center w-full '>
        <label className="font-bold  text-md capitalize  w-[90%] flex items-start">
            {label}
        </label>

        <input
            style={{ borderColor: isError(input, prop) ? "red" : "" }}
            className="w-[90%] p-[6px] m-1 border border-black 
                dark:border-white h-10 text-base rounded-smdark:bg-slate-700
                focus:border-2 dark:focus:border-4 focus:border-purple-700 dark:focus:border-purple-600 "
            name={prop as string}
            type={"text"}
            placeholder={`enter ${prop as string}`}
            // autoComplete={"off"}
            defaultValue={"text field"}
        />

        {isError(input, prop) ? (
            <div className="text-base  text-red-600">{input.error.message}</div>
        ) : null}
 </div>
);
}
