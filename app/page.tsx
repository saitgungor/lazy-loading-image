"use client";
import LazyLoadingImage from "@/components/lazyLoadingImage";
import Image from "next/image";
import { Blurhash } from "react-blurhash";

export default function Home() {
  const blurhashCode = "LXDmHv%MS4S$_Nofofs:?vWBt7xu";
  return (
    // image container
    <div className="container grid grid-cols-4 gap-4 m-auto">
      <div className="relative w-full aspect-[2/3]">
        <LazyLoadingImage hash="T8Dub~AIIo0Q$ij?MboJoL~AbIay" imageSrc="/images/1.jpg" />
      </div>
      <div className="relative w-full aspect-[2/3]">
        <LazyLoadingImage hash="T8Dub~AIIo0Q$ij?MboJoL~AbIay" imageSrc="/images/1.jpg" />
      </div>
      <div className="relative w-full aspect-[2/3]">
        <LazyLoadingImage hash="T8Dub~AIIo0Q$ij?MboJoL~AbIay" imageSrc="/images/1.jpg" />
      </div>
      <div className="relative w-full aspect-[2/3]">
        <LazyLoadingImage hash="T8Dub~AIIo0Q$ij?MboJoL~AbIay" imageSrc="/images/1.jpg" />
      </div>
      <div className="relative w-full aspect-[2/3]">
        <LazyLoadingImage hash="T8Dub~AIIo0Q$ij?MboJoL~AbIay" imageSrc="/images/1.jpg" />
      </div>
      <div className="relative w-full aspect-[2/3]">
        <LazyLoadingImage hash="T8Dub~AIIo0Q$ij?MboJoL~AbIay" imageSrc="/images/1.jpg" />
      </div>
      <div className="relative w-full aspect-[2/3]">
        <LazyLoadingImage hash="T8Dub~AIIo0Q$ij?MboJoL~AbIay" imageSrc="/images/1.jpg" />
      </div>
      <div className="relative w-full aspect-[2/3]">
        <LazyLoadingImage hash="T8Dub~AIIo0Q$ij?MboJoL~AbIay" imageSrc="/images/1.jpg" />
      </div>
      <div className="relative w-full aspect-[2/3]">
        <LazyLoadingImage hash="T8Dub~AIIo0Q$ij?MboJoL~AbIay" imageSrc="/images/1.jpg" />
      </div>
      <div className="relative w-full aspect-[2/3]">
        <LazyLoadingImage hash="T8Dub~AIIo0Q$ij?MboJoL~AbIay" imageSrc="/images/1.jpg" />
      </div>
    </div>
  );
}
