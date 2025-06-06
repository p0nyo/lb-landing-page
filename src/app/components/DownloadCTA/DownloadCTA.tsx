import { Bounded, AppleStoreIcon, GoogleStoreIcon } from "@/app/components/common";

export default function DownloadCTA() {
  return (
    <div className="bg-lb-white text-lb-red">
      <Bounded className="text-center">
        <div className="bg-lb-red text-white p-8 rounded-lg">
          <h2 className="text-3xl font-medium mb-4">Meet more locals</h2>
          <p className="text-lg font-light mb-6">
            Download the App to connect with customers today!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-x-2">
            <AppleStoreIcon />
            <GoogleStoreIcon />
          </div>
        </div>
      </Bounded>
    </div>
  );
}
