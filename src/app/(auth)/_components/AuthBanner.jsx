import CustomImage from "@/ui/CustomImage";
import LogoImage from "@/ui/LogoImage";
import { Home2 } from "iconsax-react";
import Link from "next/link";

export default function AuthBanner() {
  return (
    <div className="bg-secondary-850 w-full h-full relative flex justify-center items-center">
      <div className="absolute inset-0 opacity-10">
        <CustomImage
          className="w-full h-full"
          src="/images/auth-images/auth-cover.jpg"
          alt="cover-image"
          fill
        />
      </div>
      <div className="flex flex-col gap-y-4 items-center z-10">
        <LogoImage width={230} height={50} />
        <Link
          href="/"
          className="flex items-center gap-x-2 text-neutral-white p-2"
        >
          <Home2 className="w-6 h-6 stroke-neutral-white" />
          <p className="text-lg">برگشت به صفحه اصلی</p>
        </Link>
      </div>
    </div>
  );
}
