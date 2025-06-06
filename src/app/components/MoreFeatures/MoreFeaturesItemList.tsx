import React from "react";
import { MoreFeatureIcons } from "@/app/components/common";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

export default function MoreFeaturesItemList({
  features,
}: {
  features: Feature[];
}) {
  return (
    <div className="grid gap-8 md:grid-cols-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-row md:flex-col items-center md:items-start gap-4"
        >
          <MoreFeatureIcons imageSrc={feature.icon} altText={feature.title} />
          <div className="flex flex-col text-start">
            <h3 className="text-xl font-medium">{feature.title}</h3>
            <p className="text-xs font-light">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
