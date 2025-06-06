import Image from "next/image";

import { Bounded } from "@/app/components/common";

export default function DownloadCTA() {
  return (
    <div className="bg-lb-white text-lb-red">
      <Bounded className="text-center">
        <div className="bg-lb-red text-white p-8 rounded-lg">
          <h2 className="text-3xl font-medium mb-4">Meet more locals</h2>
          <p className="text-lg font-light mb-6">
            Download the App to connect with customers today!
          </p>
          <div className="flex justify-center gap-x-2">
            <Image
              src="/apple-store-button.png"
              alt="Download on the App Store"
              width={150}
              height={50}
              className="inline-block mt-4"
            />
            <Image
              src="/google-store-button.png"
              alt="Get it on Google Play"
              width={150}
              height={50}
              className="inline-block mt-4"
            />
          </div>
        </div>
      </Bounded>
    </div>
  );
}
