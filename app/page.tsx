import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
import Experience from "@/components/portfolio/Experience";
import Footer from "@/components/portfolio/Footer";
import Header from "@/components/portfolio/Header";
import Intro from "@/components/portfolio/Intro";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import ToggleTheme from "@/components/portfolio/ToggleTheme";
import SectionDivider from "@/components/portfolio/SectionDivider";
import ActiveSectionContextProvider, {
  ActiveSectionContext,
} from "@/context/active-section-context";
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
