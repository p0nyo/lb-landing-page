import Image from "next/image";

export default function FooterLogo() {
  return (
    <div className="flex flex-col w-[155px]" style={{ fontSize: "14px" }}>
      <Image
        src="/header-logo.png"
        alt="Local Bestie Footer Logo"
        width={155}
        height={40}
      />
      <span className="font-semibold" style={{ fontSize: "0.8em" }}>
        © Local Bestie Limited 2025
      </span>
    </div>
  );
}
