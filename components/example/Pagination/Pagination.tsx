import { TESTIMONIALS } from "@/lib/data/exampleData";

interface PaginationProps {
  active: number;
}

export default function Pagination({ active }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {TESTIMONIALS.map((item, index) => (
        <div
          className={`w-8 h-1 ${
            active === index ? "bg-darkBlue" : "bg-blue-100"
          } rounded-md transition-all duration-500`}
          key={item.id}
        ></div>
      ))}
    </div>
  );
}
