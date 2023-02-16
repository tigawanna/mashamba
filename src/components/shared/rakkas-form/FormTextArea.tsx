interface InputDataType<T> {
    fields: T
    error: { field: keyof T | "main", message: string }
}
interface FormInputProps<T> {
    label: string;
    prop: keyof T;
    input: InputDataType<T>;
}


export const FormTextArea = <T,>({ prop, input, label }: FormInputProps<T>) => {
    const isError = (actionData: InputDataType<T>, prop: keyof T) => {
        if (actionData && actionData?.error?.message && actionData?.fields && actionData?.fields[prop] !== "") {
            return true;
        }
        return false;
    };
return (
    <div className="flex flex-col items-center justify-center w-full ">
        <label className="font-bold  text-md capitalize  w-[90%] flex items-start">
            bio
        </label>


        <textarea
            style={{ borderColor: isError(input,prop) ? "red" : "" }}
            className="w-[90%] min-h-[100px] md:h-[30%]
                    m-2 p-2  border border-black dark:border-white text-base rounded-lg
                    dark:bg-slate-700focus:border-2 dark:focus:border-4 focus:border-purple-700
                    dark:focus:border-purple-600 "
            name={prop as string}
            placeholder={`enter ${prop as string}`}
            // autoComplete={"off"}
            defaultValue={input?.fields && input?.fields[prop] as string}
        />

        {isError(input, prop) ? (
            <div className="text-base  text-red-600">{input.error.message}</div>
        ) : null}

    </div>
);
}
