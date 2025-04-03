import Image from "next/image";

export default function BubbleImage({ src, size, className }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative block">
        <Image
          className="object-cover object-center"
          src={src}
          alt="bubbles-image"
          quality={80}
          width={size}
          height={size}
        />
      </div>
    </div>
  );
}
