import {
  Bounded,
  AppleStoreIcon,
  GoogleStoreIcon,
} from "@/app/components/common";

export default function DownloadCTA() {
  return (
    <div className="bg-lb-white text-lb-red">
      <Bounded className="text-center">
        <div className="bg-lb-red text-white p-8 rounded-lg">
          <h2 className="text-3xl font-medium mb-4">Meet more locals</h2>
          <p className="text-lg font-light mb-6">
            Download the App to connect with customers today!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-x-4">
            <a
              href="https://example.com/lb-partner-app-download"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 active:scale-50 duration-300"
            >
              <AppleStoreIcon />
            </a>
            <a
              href="https://example.com/lb-partner-app-download"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 active:scale-50 duration-300"
            >
              <GoogleStoreIcon />
            </a>
          </div>
        </div>
      </Bounded>
    </div>
  );
}
