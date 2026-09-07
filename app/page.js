import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import About from "@/components/sections/About";
import WhyChoose from "@/components/sections/WhyChoose";
import Experience from "@/components/sections/Experience";
import Expertise from "@/components/sections/Expertise";
import Publications from "@/components/sections/Publications";
import Certifications from "@/components/sections/Certifications";
import Booking from "@/components/sections/CtaSection";
import Heroo from "@/components/sections/Heroo";


export default function Home() {
  return (
    <main>   
      <Heroo />
      <About />
      <Hero />
      <TrustedBy />
      <WhyChoose />
      <Expertise />
      <Experience />
      <Publications />
      <Certifications />
      <Booking />
    </main>
  );
}
