import Link from "next/link";
import CustomImage from "./CustomImage";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FC } from "react";

type LogoImageProps = {
  src?: string | StaticImport;
  width?: number | `${number}`;
  height?: number | `${number}`;
};

const LogoImage: FC<LogoImageProps> = ({
  width,
  height,
  src = "/images/logo-images/Logo.png",
}) => {
  return (
    <Link href="/">
      <CustomImage src={src} alt="Logo" width={width} height={height} />
    </Link>
  );
};

export default LogoImage;
