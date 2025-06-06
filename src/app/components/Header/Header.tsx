import Image from "next/image";

import { CommonButton, LBLogo, HamburgerMenuIcon } from "@/app/components/common";

export default function Header() {
  return (
    <nav className="w-full bg-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-6 h-18 flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          {/* Logo on the left */}
          <div className="flex-shrink-0 w-[100px] md:w-[155px]">
            <LBLogo />
          </div>
          {/* Navigation Links on the right */}
          <ul className="hidden md:flex gap-x-4">
            <li>
              <CommonButton
                text="Log In"
                textColor="text-lb-red"
                bgColor="bg-white"
                className="py-2 px-6"
              />
            </li>
            <li>
              <CommonButton text="Join Now" className="py-2 px-6" />
            </li>
          </ul>
          {/* Hamburger menu button for Mobile screens */}
          <div className="md:hidden">
            <HamburgerMenuIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
