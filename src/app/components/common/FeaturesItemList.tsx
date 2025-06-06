import KeyFeaturesItem from "./FeaturesItem";

type KeyFeaturesItem = {
  title: string;
  description: string;
  children: React.ReactNode;
};

type KeyFeaturesItemListProps = {
  items: KeyFeaturesItem[];
};

export default function KeyFeaturesItemList({
  items,
}: KeyFeaturesItemListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <KeyFeaturesItem
          key={index}
          title={item.title}
          description={item.description}
          children={item.children}
        />
      ))}
    </div>
  );
}
