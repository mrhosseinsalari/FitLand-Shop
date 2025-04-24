import Link from "next/link";
import CustomImage from "./CustomImage";

export default function LogoImage({
  width,
  height,
  src = "/images/logo-images/Logo.png",
}) {
  return (
    <Link href="/">
      <CustomImage src={src} alt="Logo" width={width} height={height} />
    </Link>
  );
}
