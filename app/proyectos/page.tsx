import FooterComponent from "@/components/Footer";
import Placeholder from "@/components/Placeholder";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="projects-wrapper">
      <main className="main-wrapper">
        <div className="main-content-container">
          <section className="main-content">
            <Projects />
          </section>
          <FooterComponent />
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
