import FooterComponent from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";

const ProjectsGridPage = () => {
  return (
    <div className="projects-wrapper">
      <main className="main-wrapper">
        <div className="main-content-container">
          <section className="main-content">
            <ProjectsGrid />
          </section>
          <FooterComponent />
        </div>
      </main>
    </div>
  );
};

export default ProjectsGridPage;
