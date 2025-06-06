import { TickIcon } from "@/app/components/common";

type GetStartedChecklistProps = {
  checklistItems: string[];
};

export default function GetStartedChecklist({
  checklistItems,
}: GetStartedChecklistProps) {
  return (
    <div className="flex-1 bg-lb-grey px-10 py-12 rounded-lg">
      <ul className="space-y-4 text-lb-red">
        {checklistItems.map((item, index) => (
          <li key={index} className="flex flex-col items-start">
            <TickIcon />
            <span className="text-black font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
