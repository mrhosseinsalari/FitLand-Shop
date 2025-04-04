import Image from "next/image";

export default function CustomImage({
  src,
  alt,
  width,
  height,
  className = "",
  fill,
}) {
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
