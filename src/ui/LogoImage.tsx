import Link from "next/link";
import CustomImage from "./CustomImage";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type LogoImageProps = {
  src?: string | StaticImport;
  width?: number | `${number}`;
  height?: number | `${number}`;
};

export default function LogoImage({
  width,
  height,
  src = "/images/logo-images/Logo.png",
}: LogoImageProps) {
  return (
    <Link href="/">
      <CustomImage src={src} alt="Logo" width={width} height={height} />
    </Link>
  );
}
