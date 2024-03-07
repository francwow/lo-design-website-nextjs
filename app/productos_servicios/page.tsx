import Services from "@/components/Services";
import FooterComponent from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="services-wrapper">
      <main className="main-wrapper">
        <div className="main-content-container">
          <section className="main-content">
            <Services />
          </section>
          <FooterComponent />
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
