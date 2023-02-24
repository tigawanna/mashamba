import { useEffect, useState } from 'react';
import LandScape from '../../../assets/landscapp.svg';
import { GrNext, GrPrevious } from 'react-icons/gr/index.js'
import { TheIcon } from './TheIcon';


interface GoodImageCarouselProps {
    height?: string | number;
    width?: string | number;
    imgs:string[]
    props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement
>;
}

export const GoodImageCarousel = ({ height = 100, width = 100, imgs ,...props }: GoodImageCarouselProps) => {
    
    const [image, setImage] = useState({ img:(imgs&&imgs[0])??LandScape as string, idx: 0 })
    // console.log("images =======>   ",imgs)
    const [imgSrc, setImgSrc] = useState(image.img as string);
    // const [loading,setLoading] = useState(true)
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        let timeoutId: NodeJS.Timeout;

        const img = new Image();
        img.src = image.img as string;

        img.onload = () => {
            if (isMounted) {
                timeoutId = setTimeout(() => {
                    setImgSrc(image.img as string);
                    setLoading(false);
                }, 500);
            }
        };
        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, [image.img,image.idx]);

    return (
        <div className=" w-full lg:w-[50%] h-[50%] flex items-center justify-center gap-2 ">
            {image.idx !== 0 ?
                <TheIcon 
                Icon={GrPrevious} iconAction={() => {
                    setLoading(true);
                    setImage((prev) => {
                        if (prev.idx > 0) {
                            return { img:imgs[prev.idx - 1] as string, idx: prev.idx - 1 }
                        }
                        return prev
                    })

                }} /> :
                null}

        <div className=" w-[90%]  h-[50%] flex items-center justify-center gap-2 ">
        <img
            style={{ filter: isLoading ? 'blur(10px)' : "none" }}
            {...{
                src: imgSrc,
                alt: props.props.alt,
                height,
                width,
                loading: 'lazy',
                className: 'h-full w-full  aspect-video animate-in fade-in duration-500 rounded-lg',
                ...props,
            }}
           />
        </div>


            {image.idx !== imgs.length - 1 ?
                <TheIcon Icon={GrNext} iconAction={() => {
                    setLoading(true);
                    setImage((prev) => {
                        if (prev.idx < imgs.length - 1) {
                            return { img: imgs[prev.idx + 1] as string, idx: prev.idx + 1 }
                        }
                        return prev
                    })
                }} /> :
                null}


        </div>
    );
};
