"use client";

import Image from "next/image";
import { projects } from "@/data/projects";
import { useLanguage, useProduct } from "@/contexts/ContextHooks";
import ProductItems from "./ProductItems";

const ProjectsGrid = () => {
  const { language } = useLanguage();
  const { product, setProduct } = useProduct();

  return (
    <div className="projects-grid">
      {projects.map((item, i) => {
        return (
          <div
            role="button"
            tabIndex={0}
            key={i}
            className="projects-grid-item"
            onClick={() =>
              setProduct({
                headingES: item.descTextES,
                headingEN: item.descTextEN,
                imgSrc: item.img,
                alt: "Proyecto desarrollado por LO design",
              })
            }
          >
            <div className="grid-item-overlay">
              {language === "ES" ? (
                <div className="grid-item-text">
                  <h3>{item.descTextES}</h3>
                  <h3>{item.clientTextES}</h3>
                  <h4>{item.year}</h4>
                </div>
              ) : (
                <div className="grid-item-text">
                  <h3>{item.descTextEN}</h3>
                  <h3>{item.clientTextEN}</h3>
                  <h4>{item.year}</h4>
                </div>
              )}
            </div>
            <div className="grid-item-img">
              <Image
                src={item.img}
                alt="Imagen de un proyecto de LO design"
                width={400}
                height={400}
              />
            </div>
          </div>
        );
      })}
      <ProductItems />
    </div>
  );
};

export default ProjectsGrid;
