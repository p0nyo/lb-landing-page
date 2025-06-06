import Image from "next/image";

export default function AppleStoreIcon() {
  return (
    <Image
      src="/apple-store-button.png"
      alt="Download on the App Store"
      width={150}
      height={50}
      className="inline-block mt-4"
    />
  );
}
