import LazyLoadingImage from "@/components/lazyLoadingImage";
import { imagesAndHashes } from "@/constants/imagesAndHashs";

export default function Home() {
  return (
    <div className="container grid grid-cols-4 gap-4 m-auto">
      {imagesAndHashes.map((imageObj) => (
        <div key={imageObj.hash} className="relative w-full aspect-[2/3]">
          <LazyLoadingImage hash={imageObj.hash} imageSrc={imageObj.src} />
        </div>
      ))}
    </div>
  );
}
