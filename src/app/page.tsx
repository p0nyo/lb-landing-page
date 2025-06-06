import { Hero } from "@/app/components/Hero";
import { KeyFeatures } from "@/app/components/KeyFeatures";
import { HowItWorks } from "@/app/components/HowItWorks";
import { MoreFeatures } from "@/app/components/MoreFeatures";
import { DownloadCTA } from "@/app/components/DownloadCTA";
import { GetStarted } from "@/app/components/GetStarted";

export default function Home() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <MoreFeatures />
      <DownloadCTA />
      <GetStarted />  
    </>
  );
}
