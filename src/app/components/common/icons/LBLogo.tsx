import Image from "next/image";

export default function LBLogo() {
  return (
    <Image
      src="/header-logo.png"
      alt="Local Bestie Header Logo"
      width={155}
      height={40}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
