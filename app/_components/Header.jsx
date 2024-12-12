import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  const Menu = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      title: "Contact Us",
      path: "/contacts",
    },
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-8">
        <Image src="/logo.svg" alt="Logo" width={180} height={80} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li
                key={item.id}
                className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out"
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Login</Button>
    </div>
  );
}

export default Header;
