import { Bounded } from "@/app/components/common";
import KeyFeaturesItem from "./KeyFeaturesItem";

export default function KeyFeatures() {
  return (
    <div className="bg-white flex items-center">
      <Bounded>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Why Local Bestie works</h2>
          <p className="text-lg text-lb-red">
            Built for local businesses like yours
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid gap-y-8 md:grid-cols-3">
          <KeyFeaturesItem
            imageSrc="/key-features-1.png"
            title="Smart visibility"
            description="Get discovered by local customers actively looking for services like yours."
          />
          <KeyFeaturesItem
            imageSrc="/key-features-2.png"
            title="Dynamic offers"
            description="Use AI-powered pricing to attract customers during slow hours."
          />
          <KeyFeaturesItem
            imageSrc="/key-features-3.png"
            title="Cashback loyalty"
            description="Keep them coming back with our points-based cashback rewards system."
          />
        </div>
      </Bounded>
    </div>
  );
}
