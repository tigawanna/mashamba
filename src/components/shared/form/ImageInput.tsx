import { useEffect, useRef, useState } from "react";
import { TheIcon } from "../wrappers/TheIcon";
import { AiOutlineCloseCircle } from "react-icons/ai/index.js";
import { BiImageAdd } from "react-icons/bi/index.js";
import { ListingFormInputs } from "../../../routes/admin/index.page";

interface ImageInputProps<T> {
    label: string;
    error: { name: string; message: string }
    input: ListingFormInputs
    setInput: React.Dispatch<React.SetStateAction<ListingFormInputs>>
    prop: keyof ListingFormInputs
    max_images?: number
}

export const ImageInput = <T,>({ input,label, prop, setInput,max_images=2}: ImageInputProps<T>) => {
    const img_arr = new Array<File[] | null | undefined>(input[prop] as File[] | null | undefined)

    const [pics, setPics] = useState<File[] | null | undefined>(input[prop] as File[] | null | undefined);
    const fileInput = useRef<HTMLInputElement | null>(null);
    
    const clearImage = (idx: number) => {

        setPics(prev => {
            prev?.splice(idx, 1)
            return prev
        });
        setInput(prev => {
            // @ts-expect-error
            return { ...prev, [prop]: prev[prop]?.splice(idx, 1)}
        })
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const allImgs = [...e.target.files]
            setPics(prev => {
                if (prev && prev.length < max_images) {
                    return [...prev, ...allImgs].slice(0, max_images)
                }
                return allImgs.slice(0, max_images)
            });
        }
    };

    useEffect(() => {
        if (pics) {
            setInput(prev => {
                return { ...prev, [prop]: pics }
            })}
    }, [pics])

    // console.log("input ==== ",input)
    return (

        <div className="w-full  h-full flex flex-col items-center justify-center ">
            <label className="text-md capitalize  w-[90%] flex items-start">
                {label}
            </label>
            {/* <input className="hidden" {...register('user')}/> */}
            <input className="hidden" ref={fileInput} type="file" 
                multiple max={img_arr?.length} onChange={handleChange} />


            {pics && typeof pics === "object" ? (
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-[90%] flex flex-wrap gap-1 items-center ">
                        {
                            pics.map((file: Blob, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="w-fit gap-1 p-1 flex flex-col items-end justify-end">
                                        <TheIcon
                                            Icon={AiOutlineCloseCircle}
                                            size={"25"}
                                            iconAction={() => clearImage(index)}
                                        />
                                            <img height="100" width="100"
                                            src={URL.createObjectURL(file as Blob)}
                                            className="max-h-[200px] rounded-lg  aspect-square"
                                        />
                                    </div>
                                )
                            }

                            )
                        }
                    </div>

                </div>
            ) : null}

            {pics && typeof pics === "string" ? (
                <img src={pics} height="200" width="200"
                    className="w-[80%] max-h-[300px] rounded-lg" />
            ) : null}
            <div className="w-[90%]">
                <TheIcon
                    Icon={BiImageAdd}
                    size={"30"}
                    iconAction={() => fileInput.current?.click()}
                />
            </div>
        </div>

    );
}
