import {
  Bounded,
  FeaturesItemList,
  KeyFeaturesImages,
} from "@/app/components/common";

const features = [
  {
    title: "Smart visibility",
    description:
      "Get discovered by local customers actively looking for services like yours.",
    children: (
      <KeyFeaturesImages
        imageSrc="/key-features-1.png"
        altText="Smart visibility"
      />
    ),
  },

  {
    title: "Dynamic offers",
    description:
      "Use AI-powered pricing to attract customers during slow hours.",
    children: (
      <KeyFeaturesImages
        imageSrc="/key-features-2.png"
        altText="Dynamic offers"
      />
    ),
  },

  {
    title: "Cashback loyalty",
    description:
      "Keep them coming back with our points-based cashback rewards system.",
    children: (
      <KeyFeaturesImages
        imageSrc="/key-features-3.png"
        altText="Cashback loyalty"
      />
    ),
  },
];

export default function KeyFeatures() {
  return (
    <div className="bg-white flex items-center">
      <Bounded>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2">
            Why Local Bestie works
          </h2>
          <p className="text-lg text-lb-red">
            Built for local businesses like yours
          </p>
        </div>
        <FeaturesItemList items={features} />
      </Bounded>
    </div>
  );
}
