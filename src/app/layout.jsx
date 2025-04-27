import "@/styles/globals.css";
import vazirFont from "@/constants/localFont";
import AppProviders from "@/providers/AppProviders";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | فیت‌لند",
    default: "فیت‌لند",
  },
  description: "فروشگاه لوازم ورزشی فیت‌لند",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Toaster />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
