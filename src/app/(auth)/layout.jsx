import BubbleImage from "@/ui/BubbleImage";
import LogoImage from "@/ui/LogoImage";
import MoveBack from "@/ui/MoveBack";
import AuthBanner from "./_components/AuthBanner";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-7 relative min-h-screen">
        <BubbleImage
          src="/images/auth-images/Bubbles-1.png"
          size={200}
          className="top-0 left-0"
        />
        <div className="max-w-md lg:max-w-lg mx-auto px-4 mb-10 lg:mb-0">
          <div className="flex justify-between items-center mt-3 mb-24 lg:hidden">
            <MoveBack />
          </div>
          <div className="flex flex-col gap-y-3 items-center mb-8 lg:hidden">
            <LogoImage width={150} height={32} />
            <p className="text-neutral-600 text-xs">
              فروشگاه لوازم ورزشی فیت‌لند
            </p>
          </div>
          <div className="flex lg:items-center lg:min-h-screen">{children}</div>
        </div>
        <BubbleImage
          src="/images/auth-images/Bubbles-2.png"
          size={200}
          className="bottom-0 right-0"
        />
      </div>
      <div className="hidden lg:block col-span-5 min-h-screen">
        <AuthBanner />
      </div>
    </div>
  );
}

export default Layout;
