type KeyFeaturesItemProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function KeyFeaturesItem({
  title,
  description,
  children,
}: KeyFeaturesItemProps) {
  return (
    <div className="text-center">
      <div className="mb-4">{children}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="font-light">{description}</p>
    </div>
  );
}