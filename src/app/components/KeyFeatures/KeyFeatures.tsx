import { Bounded, FeaturesItemList } from "@/app/components/common";
import Image from "next/image";

const features = [
  {
    title: "Smart visibility",
    description: "Get discovered by local customers actively looking for services like yours.",
    children: (
      <Image
        src="/key-features-1.png"
        alt="Smart visibility"
        width={400}
        height={80}
        className="mb-4"
      />
    ),
  },
  {
    title: "Dynamic offers",
    description: "Use AI-powered pricing to attract customers during slow hours.",
    children: (
      <Image
        src="/key-features-2.png"
        alt="Dynamic offers"
        width={400}
        height={80}
        className="mb-4"
      />
    ),
  },
  {
    title: "Cashback loyalty",
    description: "Keep them coming back with our points-based cashback rewards system.",
    children: (
      <Image
        src="/key-features-3.png"
        alt="Cashback loyalty"
        width={400}
        height={80}
        className="mb-4"
      />
    ),
  },
];

export default function KeyFeatures() {
  return (
    <div className="bg-white flex items-center">
      <Bounded>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2">Why Local Bestie works</h2>
          <p className="text-lg text-lb-red">
            Built for local businesses like yours
          </p>
        </div>
        <FeaturesItemList items={features} />
      </Bounded>
    </div>
  );
}