import Destacados from "@/components/Destacados";
import HomeCTA from "@/components/HomeCTA";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import IntroDesc from "@/components/IntroDesc";
import Reel from "@/components/Reel";
import FooterComponent from "@/components/Footer";

export default function Home() {
  return (
    <div className="home-container">
      <main className="main-wrapper">
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
        <FooterComponent />
      </main>
    </div>
  );
}
