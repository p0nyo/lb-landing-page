import Image from 'next/image';

export default function MoreFeaturesImage() {
  return (
    <Image
      src="/more-features-image.png"
      alt="AI Tools"
      width={500}
      height={300}
      className="rounded-lg"
    />
  );
}
