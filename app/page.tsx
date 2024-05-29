import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen space-x-2">
            <Button variant="outline" asChild>
                <Link href="portfolio">View Portfolio</Link>
            </Button>
            <Button variant="ghost">
                <Link href="example">Explore Example</Link>
            </Button>
        </div>
    );
}
