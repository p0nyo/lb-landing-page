import { Bounded, CommonButton } from "@/app/components/common";
import GetStartedChecklist from "./GetStartedChecklist";


export default function GetStarted(){
    const checklistItems = [
        "No setup fee",
        "No monthly cost",
        "Small success fee per in-app payment",
    ];
    return (
    <div className="bg-lb-red text-white">
      <Bounded className="flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">Get started</h2>
          <p className="text-lg mb-10">Start free. Pay only when you win.</p>
          <CommonButton text="Become a Local Bestie Partner" className="border border-white p-2 md:p-4"/>
        </div>
        
        {/* Right Side */}
        <GetStartedChecklist checklistItems={checklistItems} />
      </Bounded>
    </div>
  );
};