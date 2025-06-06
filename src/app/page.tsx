import { Hero } from "@/app/components/Hero";
import { KeyFeatures } from "@/app/components/KeyFeatures";
import { HowItWorks } from "@/app/components/HowItWorks";
import { MoreFeatures } from "@/app/components/MoreFeatures";

export default function Home() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <MoreFeatures />
    </>
  );
}
