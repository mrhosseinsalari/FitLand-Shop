import Header from "@/components/Header";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <div className="h-10 bg-secondary-main text-neutral-white flex justify-center items-center">
        <p className="text-xs font-medium md:text-sm md:font-bold">
          با عضویت در فیت لند اولین ارسال را مهمون ما باش :)
        </p>
      </div>
      <Header />
      <div className="container xl:max-w-screen-xl">{children}</div>
    </>
  );
}

export default Layout;
