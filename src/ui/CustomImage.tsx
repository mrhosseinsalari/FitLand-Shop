import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type CustomImageProps = {
  className?: string;
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
};

export default function CustomImage({
  src,
  alt,
  width,
  height,
  className = "",
  fill,
}: CustomImageProps) {
  return (
    <div className={`relative block ${className}`}>
      <Image
        className="object-cover object-center"
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={80}
        fill={fill}
      />
    </div>
  );
}
