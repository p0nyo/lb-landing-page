import FooterLogo from "./FooterLogo";
import FooterNavBar from "./FooterNavBar";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-10 flex md:items-center">
        {/* Logo */}
        <div className="flex-1 flex flex-col md:flex-row justify-start gap-y-6">
          <FooterLogo />
          <div className="flex md:hidden">
            <FooterNavBar items={["About", "FAQ", "Terms"]} />
          </div>
        </div>

        {/* NavBar */}
        <div className="flex-1 hidden md:flex justify-center">
          <FooterNavBar items={["About", "FAQ", "Terms"]} />
        </div>

        {/* Social Icons */}
        <div className="flex-1 flex justify-end items-end">
          <SocialIcons
            images={["/facebook.png", "/instagram.png", "/linkedin.png"]}
          />
        </div>
      </div>
    </footer>
  );
}
