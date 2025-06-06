import FeaturesItem from "./FeaturesItem";

type FeaturesItemProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

type FeaturesItemListProps = {
  items: FeaturesItemProps[];
};

export default function FeaturesItemList({ items }: FeaturesItemListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <FeaturesItem
          key={index}
          title={item.title}
          description={item.description}
          children={item.children}
        />
      ))}
    </div>
  );
}
