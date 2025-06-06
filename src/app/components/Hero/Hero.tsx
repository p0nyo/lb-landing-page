import Image from "next/image";
import Bounded from "@/app/components/Bounded";

export default function Hero() {
  return (
    <Bounded className="bg-lb-red flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold mb-4">
            More customers. <br />
            Smarter promotions. <br />
            Zero hassle.
          </h1>
          <p className="mb-6 font-light text-md md:text-lg">
            Join Local Bestie - the AI-powered marketing platform that fills
            your quiet hours, builds loyalty, and turns one-time visitors into
            regulars.
          </p>
          <div className="flex gap-x-4">
            <button className="bg-white text-lb-red font-semibold py-2 px-4 rounded">
              Join for Free
            </button>
            <button className="flex items-center text-white font-semibold py-2 px-4">
              <span>🎥</span>
              <span className="ml-2">View Demo</span>
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/hero-image.png"
            alt="Description of Image"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </Bounded>
  );
}
