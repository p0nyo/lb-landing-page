import Image from "next/image";
import React from "react";

type KeyFeaturesItemProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export default function KeyFeaturesItem({ imageSrc, title, description }: KeyFeaturesItemProps) {
  return (
    <div className="text-center">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={80}
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="font-light">{description}</p>
    </div>
  );
};