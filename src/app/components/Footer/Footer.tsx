import FooterLogo from "./FooterLogo";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-6">
      <div className="mx-auto px-4 flex">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <FooterLogo />
        </div>

        {/* NavBar */}
        <div className="flex-1 flex justify-center">
          <p>Middle content</p>
        </div>

        {/* Social Icons */}
        <div className="flex-1 flex justify-end">
          <p>Right content</p>
        </div>
      </div>
    </footer>
  );
}
