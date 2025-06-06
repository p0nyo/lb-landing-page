import Image from "next/image";

type SocialIconsProps = {
  images: string[];
};

export default function SocialIcons({ images }: SocialIconsProps) {
  return (
    <nav>
      <ul className="flex gap-x-2 font-semibold text-sm">
        {images.map((image, index) => (
          <li key={index}>
            <Image
              src={`${image}`}
              alt={`Social Icon ${index}`}
              width={24}
              height={24}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
