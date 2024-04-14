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

export default function Portfolio() {
  return (
    <section className="relative z-0 bg-gray-50 text-green-950 pt-28 sm:pt-36">
      <div className="absolute -z-10 top-[-6rem] right-[11rem] bg-[#fbe2e3] h-[31.25rem] w-[31.25rem] rounded-full blur-[11rem] sm:w-[68.75rem]"></div>
      <div className="absolute -z-10 top-[-1rem] left-[-35rem] bg-[#dbd7fb] h-[31.25rem] w-[50rem] rounded-full blur-[11rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <ActiveSectionContextProvider>
        <Header />
        <div className="flex flex-col items-center px-4">
          <Intro />
          <SectionDivider />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </div>
        <Footer />
      </ActiveSectionContextProvider>
      <ToggleTheme />
    </section>
  );
}
