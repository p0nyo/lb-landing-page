import { LBLogo } from "@/app/components/common";

export default function FooterLogo() {
  return (
    <div className="flex flex-col w-[155px]" style={{ fontSize: "14px" }}>
      <LBLogo />
      <span className="font-semibold" style={{ fontSize: "0.8em" }}>
        © Local Bestie Limited 2025
      </span>
    </div>
  );
}
