import { Flash, MedalStar, Star1 } from "iconsax-react";
import NavLink from "./NavLink";

const categoryNavLinks = [
  {
    id: 1,
    children: "مردانه",
    path: "/products/men",
  },
  {
    id: 2,
    children: "زنانه",
    path: "/products/women",
  },
  {
    id: 3,
    children: "بچگانه",
    path: "/products/kids",
  },
  {
    id: 4,
    children: "لوازم ورزشی",
    path: "/products/sports-equipment",
  },
  {
    id: 5,
    children: "شیکر و جاگ",
    path: "/products/shakers",
  },
];

const productNavLinks = [
  {
    id: 1,
    title: "جدید ترین محصولات",
    icon: <Star1 />,
    path: "/products",
  },
  {
    id: 2,
    title: "تخفیفات ویژه",
    icon: <Flash />,
    path: "/products",
  },
  {
    id: 3,
    title: "پرفروش ترین ها",
    icon: <MedalStar />,
    path: "/products",
  },
];

export default function Navbar() {
  return (
    <nav className="container xl:max-w-screen-xl bg-neutral-100 px-9 rounded-2xl mb-8">
      <ul className="flex items-center justify-between text-neutral-black py-3">
        <div className="flex items-center gap-x-10">
          {categoryNavLinks.map((item) => {
            return (
              <li key={item.id}>
                <NavLink path={item.path}>{item.children}</NavLink>
              </li>
            );
          })}
        </div>
        <div className="flex items-center gap-x-10">
          {productNavLinks.map((item) => {
            return (
              <li key={item.id}>
                <NavLink path={item.path}>
                  {item.icon}
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
}
