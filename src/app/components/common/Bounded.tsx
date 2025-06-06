import { ReactNode } from "react";

type BoundedProps = {
  children: ReactNode;
  className?: string;
};

export default function Bounded({ children, className = "" }: BoundedProps) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-6 md:px-20 pt-40 pb-20 md:pt-38 md:pb-32 ${className}`}>
      {children}
    </div>
  );
}
