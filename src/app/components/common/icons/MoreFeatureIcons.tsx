import Image from "next/image";

type MoreFeatureIconsProps = {
    imageSrc: string;
    altText: string;
}

export default function MoreFeatureIcons({ imageSrc, altText }: MoreFeatureIconsProps) {
  return (
    <Image src={imageSrc} alt={altText} width={25} height={25} />
  );
}
