import Destacados from "@/components/Destacados";
import HomeCTA from "@/components/HomeCTA";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import IntroDesc from "@/components/IntroDesc";
import Reel from "@/components/Reel";

export default function Home() {
  return (
    <div className="home-container">
      <section className="home-intro">
        <Reel />
      </section>
      <section className="main-content">
        <IntroDesc />
        <Projects />
        <Partners />
        <HomeCTA />
        <Destacados />
      </section>
    </div>
  );
}
