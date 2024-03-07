import Placeholder from "@/components/Placeholder";
import FooterComponent from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <main className="main-wrapper">
        <div className="main-content-container">
          <section className="main-content">
            <Placeholder bgColor="sand" />
          </section>
          <FooterComponent />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
