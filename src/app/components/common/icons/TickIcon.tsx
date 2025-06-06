import Image from "next/image";

export default function TickIcon() {
  return (
    <Image
      src="/get-started-tick-icon.png"
      alt="Tick Icon"
      width={24}
      height={24}
      className="w-6 h-6"
      loading="lazy"
      priority={false}
      style={{ objectFit: "contain" }}
      draggable={false}
      unoptimized={true}
      fetchPriority="low"
      quality={100}
      sizes="(max-width: 768px) 24px, 48px"
    />
  );
}