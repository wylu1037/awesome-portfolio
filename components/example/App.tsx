import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import OurServices from "./OurServices";
import OurWork from "./OurWork";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <OurServices />
      <OurWork />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
