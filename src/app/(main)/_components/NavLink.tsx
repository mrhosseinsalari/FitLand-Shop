"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
  path: string;
  children: ReactNode;
};

function NavLink({ path, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`py-2 hover:text-primary-main transition-all duration-200 ease-out 
      [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-primary-main flex items-center gap-x-1.5
      ${pathname === path ? "text-primary-main" : ""}
      `}
    >
      {children}
    </Link>
  );
}

export default NavLink;
