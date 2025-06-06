import Image from "next/image";

type HowItWorksImagesProps = {
  imageSrc: string;
  altText: string;
};

export default function HowItWorksImages({
  imageSrc,
  altText,
}: HowItWorksImagesProps) {
  return (
    <Image
      src={imageSrc}
      alt={altText}
      width={80}
      height={80}
      className="mb-4"
    />
  );
}
