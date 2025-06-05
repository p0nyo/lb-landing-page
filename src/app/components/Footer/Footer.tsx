import FooterLogo from "./FooterLogo";
import FooterNavBar from "./FooterNavBar";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-6">
      <div className="mx-auto px-4 flex items-center">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <FooterLogo />
        </div>

        {/* NavBar */}
        <div className="flex-1 flex justify-center">
          <FooterNavBar items={["About", "FAQ", "Terms"]}/>
        </div>

        {/* Social Icons */}
        <div className="flex-1 flex justify-end">
          <p>Right content</p>
        </div>
      </div>
    </footer>
  );
}
