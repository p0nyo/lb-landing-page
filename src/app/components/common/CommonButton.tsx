type CommonButtonProps = {
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
};

export default function CommonButton({ text, bgColor = "bg-lb-red", textColor = "text-white", className=""}: CommonButtonProps) {
  return (
    <button className={`w-auto font-medium ${bgColor} ${textColor} rounded-md ${className}`}>
      {text}
    </button>
  );
}