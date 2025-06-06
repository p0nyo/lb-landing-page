import Image from "next/image";

export default function HeroImage() {
  return (
    <Image
      src="/hero-image.png"
      alt="Hero Image"
      fill
      priority
      className="rounded-xl object-cover"
    />
  );
}
