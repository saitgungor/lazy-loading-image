"use client";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { BlurhashCanvas } from "react-blurhash";

interface LazyLoadingImageProps {
  hash: string;
  imageSrc: string;
}

const LazyLoadingImage: FC<LazyLoadingImageProps> = ({ hash, imageSrc }) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => setIsMounted(true), []);
  return isMounted ? (
    <>
      <Image src={imageSrc} onLoad={() => setIsImageLoaded(true)} fill alt="test" />
      {!isImageLoaded && <BlurhashCanvas hash={hash} className="w-full h-full absolute z-10" />}
      <canvas height="100%" width="100%"></canvas>
    </>
  ) : null;
};

export default LazyLoadingImage;
