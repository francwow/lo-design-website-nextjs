import CTA from "@/components/CTA";
import HomeCTA from "@/components/HomeCTA";
import LandingPage from "@/components/LandingPage";
import Partners from "@/components/Partners";
import Placeholder from "@/components/Placeholder";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="home-container">
      <section className="home-intro">
        <Slider />
      </section>
      <section className="main-content">
        <Placeholder bgColor="blue" />
        <HomeCTA />
        <Partners />
        <Placeholder bgColor="gray" />
      </section>
    </div>
  );
}
