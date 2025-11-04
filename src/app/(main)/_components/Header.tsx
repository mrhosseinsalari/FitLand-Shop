"use client";

import useGetUser from "@/hooks/useGetUser";
import LogoImage from "@/ui/LogoImage";
import Search from "@/ui/Search";
import UserAccountButton from "./UserAccountButton";
import CartButton from "./CartButton";
import { HambergerMenu } from "iconsax-react";
import { FC } from "react";

const Header: FC = () => {
  const { user, isLoading, cart } = useGetUser();

  return (
    <header
      className={`mb-10 transition-all duration-200 ${
        isLoading ? "blur-sm opacity-70" : "opacity-100 blur-none"
      }`}
    >
      <div className="container xl:max-w-screen-xl">
        <div className="flex items-center justify-between gap-x-10">
          <div className="flex items-center gap-x-4">
            <button className="p-1 lg:hidden">
              <HambergerMenu className="w-7 h-7 stroke-black" />
            </button>
            <div className="lg:hidden">
              <LogoImage
                src="/images/logo-images/mobile-logo.png"
                width={65}
                height={65}
              />
            </div>
            <div className="flex-col gap-y-3 hidden lg:flex">
              <LogoImage width={130} height={32} />
              <span className="text-neutral-600 text-xs font-semibold">
                فروشگاه لوازم ورزشی فیت‌لند
              </span>
            </div>
          </div>
          <div className="flex-1 max-w-[638px] hidden lg:block">
            <Search />
          </div>
          <div className="flex items-center gap-x-4">
            <UserAccountButton user={user} />
            <CartButton cart={cart} />
          </div>
        </div>
        <div className="w-full mt-6 lg:hidden">
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
