import { STATS_DATA } from "@/lib/data/exampleData";
import StatsCard from "./Cards/StatsCard";

export default function Stats() {
  return (
    <section className="bg-secondary">
      <div className="max-w-screen-xl flex justify-around mx-auto flex-wrap">
        {STATS_DATA.map((item) => (
          <StatsCard
            key={item.label}
            iconUrl={item.iconUrl}
            count={item.count}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
}
