import "@/styles/globals.css";
import vazirFont from "@/constants/localFont";

export const metadata = {
  title: {
    template: "%s | فیت‌لند",
    default: "فیت‌لند",
  },
  description: "فروشگاه لوازم ورزشی فیت‌لند",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
