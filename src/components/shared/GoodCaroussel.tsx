"use client";

import { useEffect, useState } from "react";
import {ChevronLeft, ChevronRight} from "lucide-react"
import NextImage from "next/image";

interface GoodImageCarouselProps {
  height?: number |`${number}`;
  width?: number | `${number}`;
  imgs: string[];
  props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  autoScroll?: boolean;
  autoSrollLoop?: boolean;
  delay?: number;
}

export const GoodImageCarousel = ({
  height = 100,
  width = 100,
  delay = 10000,
  imgs,
  autoScroll = false,
  autoSrollLoop = false,
  ...props
}: GoodImageCarouselProps) => {
  const [image, setImage] = useState({
    img: (imgs && imgs[0]) ?? ("./assets/landscapp.svg"),
    idx: 0,
  });
  // console.log("images =======>   ",image.idx)
  // console.log("imags length =======>   ",image)
  const [imgSrc, setImgSrc] = useState(image.img as string);
  // const [loading,setLoading] = useState(true)
  const [isLoading, setLoading] = useState(true);

  const nextImage = () => {
    setImage((prev) => {
      if (prev.idx < imgs.length - 1) {
        setLoading(true);
        return { img: imgs[prev.idx + 1] as string, idx: prev.idx + 1 };
      }
      return prev;
    });
  };

  const prevImage = () => {
    setImage((prev) => {
      if (prev.idx > 0) {
        setLoading(true);
        return { img: imgs[prev.idx - 1] as string, idx: prev.idx - 1 };
      }
      return prev;
    });
  };

  // auto skip to next image after 500 ms
  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        if (image.idx < imgs.length - 1) {
          nextImage();
        }
      }, delay);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (autoSrollLoop) {
      const interval = setInterval(() => {
        if (image.idx === imgs.length - 1) {
          setImage({ img: imgs[0] as string, idx: 0 });
        }
      }, delay);
      return () => clearInterval(interval);
    }
  }, [image.idx]);

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
  }, [image.img, image.idx]);

  return (
    <div className=" w-full lh-full flex items-center justify-center gap-2 relative">
      {image.idx !== 0 ? (
        <ChevronLeft
          className="w-24 h-32 absolute left-[5%] z-20 bg-slate-500/20 rounded-md"
          onClick={() => {
            prevImage();
          }}
        />
      ) : null}

      <div className=" w-full  h-full flex items-center justify-center gap-2 ">
        <NextImage
          style={{ filter: isLoading ? "blur(10px)" : "none" }}
          {...{
            src: imgSrc,
            alt: props.props.alt ?? "nice image",
            height,
            width,
            loading: "lazy",
            className: "h-full w-full  aspect-video animate-in fade-in duration-500 rounded-lg",
            ...props,
          }}
        />
      </div>

      {image.idx !== imgs.length - 1 ? (
        <ChevronRight
          className="w-24 h-32 absolute right-[5%] z-20 bg-slate-500/20 rounded-md"
          onClick={() => {
            nextImage();
          }}
        />
      ) : null}
    </div>
  );
};
