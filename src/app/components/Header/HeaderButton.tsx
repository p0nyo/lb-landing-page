type HeaderButtonProps = {
  text: string;
  bgColor?: string;
  textColor?: string;
};

export default function HeaderButton({ text, bgColor = "bg-lb-red", textColor = "text-white"}: HeaderButtonProps) {
  return (
    <button className={`w-auto h-10 py-2 px-6 ${bgColor} ${textColor} rounded-md`}>
      {text}
    </button>
  );
}