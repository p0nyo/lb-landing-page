import { Bounded, CommonButton, HeroImage } from "@/app/components/common";

export default function Hero() {
  return (
    <div className="bg-lb-red flex items-center pt-8">
      <Bounded className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-start text-white">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            More customers. <br />
            Smarter promotions. <br />
            Zero hassle.
          </h1>
          <p className="mb-6 font-light text-md md:text-lg">
            Join Local Bestie - the AI-powered marketing platform that fills
            your quiet hours, builds loyalty, and turns one-time visitors into
            regulars.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-x-4 md:gap-x-6">
            <CommonButton
              text="Join for Free"
              bgColor="bg-white"
              textColor="text-lb-red"
              className="px-4 py-4 md:px-10 md:py-2"
            />
            <CommonButton
              text="View Demo"
              className="px-4 py-4 md:px-10 md:py-2"
            />
          </div>
        </div>
        <div className="relative w-full h-64 md:h-[500px] flex-1">
          <HeroImage />
        </div>
      </Bounded>
    </div>
  );
}
