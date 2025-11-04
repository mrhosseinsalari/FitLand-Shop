import Header from "./_components/Header";
import React, { FC, ReactNode } from "react";
import Navbar from "./_components/Navbar";

type LayoutProps = { children: ReactNode };

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="h-10 bg-secondary-main text-neutral-white flex justify-center items-center mb-10">
        <p className="text-xs font-medium md:text-sm md:font-bold">
          با عضویت در فیت لند اولین ارسال را مهمون ما باش :)
        </p>
      </div>
      <Header />
      <Navbar />
      <div className="container xl:max-w-screen-xl">{children}</div>
    </>
  );
};

export default Layout;
