import Image, { ImageProps } from "next/image";
import { useState } from "react";

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={`transition duration-300
        ${isLoading ? "blur-sm" : "blur-0"}
        ${className}`}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      // loader={customImageLoader}
      decoding="async"
      {...rest}
    />
  );
};

// const customImageLoader = ({ src }: { src: string }) => {
//   if (process.env.NODE_ENV === "development") {
//     // Bypass SSL issues by converting the protocol to http for local dev
//     return src.replace("https://", "http://");
//   }

//   // Use the original URL in production
//   return src;
// };
