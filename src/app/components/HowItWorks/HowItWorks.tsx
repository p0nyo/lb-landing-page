import { Bounded, FeaturesItemList } from "@/app/components/common";
import Image from "next/image";

const features = [
  {
    title: "Customer pays in app",
    description:
      "User enters the amount in LB app. You both get a unique verification code.",
    children: (
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/how-it-works-icon-1.png"
          alt="Customer pays in app"
          width={80}
          height={80}
          className="mb-4"
        />
        <span className="text-sm font-semibold text-lb-red">Step 1</span>
      </div>
    ),
  },
  {
    title: "Auto cashback issued",
    description:
      "Cash back points go to the customer account - no need to track or print anything.",
    children: (
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/how-it-works-icon-2.png"
          alt="Auto cashback issued"
          width={80}
          height={80}
          className="mb-4"
        />
        <span className="text-sm font-semibold text-lb-red">Step 2</span>
      </div>
    ),
  },
  {
    title: "You get paid fast",
    description:
      "Funds are securely transferred to your account. Easy accounting.",
    children: (
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/how-it-works-icon-3.png"
          alt="You get paid fast"
          width={80}
          height={80}
          className="mb-4"
        />
        <span className="text-sm font-semibold text-lb-red">Step 3</span>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-lb-grey flex items-center">
      <Bounded>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2">How it works</h2>
          <p className="text-lg text-lb-red">
            Simple. Powerful. No staff training required.
          </p>
        </div>
        <FeaturesItemList items={features} />
      </Bounded>
    </div>
  );
}
