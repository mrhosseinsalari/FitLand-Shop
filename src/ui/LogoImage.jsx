import Image from "next/image";
import Link from "next/link";

export default function LogoImage({ src, width, height }) {
  return (
    <Link href="/">
      <div className="relative block">
        <Image
          className="object-cover object-center"
          src={src}
          alt="Logo"
          quality={80}
          width={width}
          height={height}
        />
      </div>
    </Link>
  );
}
