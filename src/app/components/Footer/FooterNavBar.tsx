type FooterNavBarProps = {
  items: string[];
};

export default function FooterNavBar({ items }: FooterNavBarProps) {
  return (
    <nav>
      <ul className="flex gap-x-8 font-semibold text-xs md:text-sm">
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
