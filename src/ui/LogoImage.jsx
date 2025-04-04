import Link from "next/link";
import CustomImage from "./CustomImage";

export default function LogoImage({ width, height }) {
  return (
    <Link href="/">
      <CustomImage
        src="/images/logo-images/Logo.png"
        alt="Logo"
        width={width}
        height={height}
      />
    </Link>
  );
}
