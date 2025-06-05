import Image from "next/image";

import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <nav className="w-full bg-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1920px] mx-auto px-2 sm:px-20 h-18 flex items-center justify-between">
        <div className="flex items-center justify-between w-full px-4">
          {/* Logo on the left */}
          <div className="flex-shrink-0 w-[100px] sm:w-[155px]">
            <Image
              src="/header-logo.png"
              alt="Local Bestie Header Logo"
              width={155}
              height={40}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          {/* Navigation Links on the right */}
          <ul className="hidden sm:flex gap-x-4">
            <li>
              <HeaderButton
                text="Log In"
                textColor="text-lb-red"
                bgColor="bg-white"
              />
            </li>
            <li>
              <HeaderButton text="Join Now" />
            </li>
          </ul>
          {/* Hamburger menu botton for Mobile screens */}
          <div className="sm:hidden">
            <Image
              src="/header-menu-toggle.png"
              alt="Menu Toggle for Mobile Screens"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
