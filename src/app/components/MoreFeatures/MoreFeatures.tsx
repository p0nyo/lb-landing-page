import Image from "next/image";

import { Bounded } from "@/app/components/common";
import MoreFeaturesItemList from "./MoreFeaturesItemList";

export default function MoreFeatures() {
  const features = [
    {
      icon: "/more-features-icon-1.png",
      title: "Dynamic pricing tool:",
      description:
        "Auto-adjust offers to drive traffic during low demand hours.",
    },
    {
      icon: "/more-features-icon-2.png",
      title: "AI-powered promotions:",
      description: "Launch smart deals with zero guesswork.",
    },
    {
      icon: "/more-features-icon-3.png",
      title: "Auto-Reply to reviews:",
      description: "Build trust, respond fast, stay professional.",
    },
    {
      icon: "/more-features-icon-4.png",
      title: "Performance insights:",
      description: "Understand trends and take action.",
    },
  ];

  return (
    <div className="bg-lb-red text-white">
      <Bounded>
        <div className="flex flex-col md:flex-row md:gap-x-16 items-center mb-8">
          <div className="flex-1 mb-4">
            <Image
              src="/more-features-image.png"
              alt="AI Tools"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">
              Boost revenue with AI tools
            </h2>
            <p className="text-lg">
              AI that drives results - not just buzzwords.
            </p>
          </div>
        </div>
        <MoreFeaturesItemList features={features} />
      </Bounded>
    </div>
  );
}
