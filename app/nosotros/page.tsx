import About from "@/components/About";
import FooterComponent from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <main className="main-wrapper">
        <div className="main-content-container">
          <section className="main-content">
            <About />
          </section>
          <FooterComponent />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
