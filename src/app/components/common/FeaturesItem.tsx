type FeaturesItemProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function FeaturesItem({
  title,
  description,
  children,
}: FeaturesItemProps) {
  return (
    <div className="text-center">
      <div className="flex mb-4 justify-center items-center">{children}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="font-light text-xs">{description}</p>
    </div>
  );
}