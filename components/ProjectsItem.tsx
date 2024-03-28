"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { useInView } from "react-intersection-observer";

type ProjectsItemProps = {
  imgSrc: string;
  descTextES: string;
  descTextEN: string;
  headingTextES: string;
  headingTextEN: string;
};

const ProjectsItem = ({
  imgSrc,
  descTextES,
  headingTextES,
  descTextEN,
  headingTextEN,
}: ProjectsItemProps) => {
  const { language } = useLanguage();
  const deskTop = useMediaQuery("(min-width: 991px)");
  const { ref: itemRef, inView: itemInView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <div ref={itemRef} className={"projects-item"}>
      <Link href={"/proyectos/proyectos_grid"}>
        <div
          className={
            !deskTop && itemInView
              ? "projects-item-img inview"
              : "projects-item-img"
          }
        >
          <div
            className={
              !deskTop && itemInView
                ? "projects-img-filter inview"
                : "projects-img-filter"
            }
          ></div>
          <Image src={imgSrc} alt="project" width={400} height={400} />
          {language === "ES" ? (
            <div className={"projects-item-text"}>
              <h3 className={!deskTop && itemInView ? "text-inview" : "text"}>
                {descTextES}
              </h3>
              <h2 className={!deskTop && itemInView ? "text-inview" : "text"}>
                {headingTextES}
              </h2>
            </div>
          ) : (
            <div className={"projects-item-text"}>
              <h3>{descTextEN}</h3>
              <h2>{headingTextEN}</h2>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProjectsItem;
