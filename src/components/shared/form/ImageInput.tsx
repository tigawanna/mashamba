import { useEffect, useRef, useState } from "react";
import { TheIcon } from "../wrappers/TheIcon";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";

interface ImageInputProps<T> {
    label: string;
    error: { name: string; message: string }
    input: T
    setInput: React.Dispatch<React.SetStateAction<T>>
    image_keys: (keyof T)[]
}

export const ImageInput = <T,>({ label, image_keys, setInput }: ImageInputProps<T>) => {
    const [pic, setPic] = useState<File[] | null | undefined>();
    const fileInput = useRef<HTMLInputElement | null>(null);

    const clearImage = (idx: number) => {
        setPic(prev => {
            prev?.splice(idx, 1)
            return prev
        });
        setInput(prev => {
            return { ...prev, [image_keys[idx]]: null }
        })
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const allImgs = [...e.target.files]
            setPic(prev => {
                if (prev && prev.length < image_keys.length) {
                    return [...prev, ...allImgs].slice(0, image_keys.length)
                }
                return allImgs.slice(0, image_keys.length)
            });
        }
    };

    useEffect(() => {
        if (pic) {
            pic.forEach((p, idx) => {
                if (idx <= image_keys.length - 1)
                    setInput(prev => {
                        return { ...prev, [image_keys[idx]]: p }
                    })
            })
        }
    }, [pic])

    // console.log("input ==== ",input)
    return (

        <div className="w-full  h-full flex flex-col items-center justify-center ">
            <label className="text-md capitalize  w-[90%] flex items-start">
                {label}
            </label>
            {/* <input className="hidden" {...register('user')}/> */}
            <input className="hidden" ref={fileInput} type="file" 
            multiple max={image_keys.length} onChange={handleChange} />


            {pic && typeof pic === "object" ? (
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-[90%] flex flex-wrap gap-1 items-center ">
                        {
                            pic.map((file: Blob, index) => {
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

            {pic && typeof pic === "string" ? (
                <img src={pic} height="200" width="200"
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
