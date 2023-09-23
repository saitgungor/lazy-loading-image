"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { BlurhashCanvas } from "react-blurhash";

interface LazyLoadingImageProps {
  hash: string;
  imageSrc: string;
}

const LazyLoadingImage: FC<LazyLoadingImageProps> = ({ hash, imageSrc }) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);
  return (
    <>
      <Image
        src={imageSrc}
        onLoad={() => setIsImageLoaded(true)}
        onLoadStart={() => setIsImageLoading(true)}
        fill
        alt="test"
      />
      {!isImageLoaded && isImageLoading && <BlurhashCanvas hash={hash} className="w-full h-full absolute" />}
    </>
  );
};

export default LazyLoadingImage;
