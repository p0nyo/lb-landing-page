import Image from 'next/image';

type KeyFeaturesImagesProps = {
    imageSrc: string;
    altText: string;
}

export default function KeyFeaturesImages({ imageSrc, altText }: KeyFeaturesImagesProps) {
  return (
    <Image
      src={imageSrc}
      alt={altText}
      width={400}
      height={80}
      className="mb-4"
    />
  );
}
