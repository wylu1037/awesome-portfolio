import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button variant="outline" asChild>
        <Link href="portfolio">View Portfolio</Link>
      </Button>
    </div>
  );
}
