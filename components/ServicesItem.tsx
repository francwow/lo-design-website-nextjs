"use client";

import { useLanguage, useProduct } from "@/contexts/ContextHooks";
import { PropsWithChildren, useState } from "react";

type ServicesItem = {
  headingES: string;
  headingEN: string;
  type: number;
  moreItems: boolean;
  id: number;
  imgSrc?: string;
  alt?: string;
};

const ServicesItem = (props: PropsWithChildren<ServicesItem>) => {
  const { language } = useLanguage();
  const { product, setProduct } = useProduct();
  const [expanded, setExpanded] = useState(false);

  return props.moreItems ? (
    <div className="services-item">
      <div className="services-item-header">
        <button onClick={() => setExpanded(!expanded)}>
          {props.type === 1 ? (
            <h2>{language === "ES" ? props.headingES : props.headingEN}</h2>
          ) : props.type === 2 ? (
            <h3>{language === "ES" ? props.headingES : props.headingEN}</h3>
          ) : props.type === 3 ? (
            <h4>{language === "ES" ? props.headingES : props.headingEN}</h4>
          ) : props.type === 4 ? (
            <h5>{language === "ES" ? props.headingES : props.headingEN}</h5>
          ) : null}
          {props.moreItems ? (
            <span className={expanded ? "expanded" : "collapsed"}>+</span>
          ) : null}
        </button>
      </div>
      <div
        style={{}}
        className={
          expanded ? "services-item expanded" : "services-item collapsed"
        }
      >
        {props.children}
      </div>
    </div>
  ) : (
    <div className="services-item">
      <div className="services-item-header">
        <button
          onClick={() =>
            setProduct({
              headingES: props.headingES,
              headingEN: props.headingEN,
              imgSrc: props.imgSrc,
              alt: props.alt,
            })
          }
        >
          {props.type === 1 ? (
            <h2>{language === "ES" ? props.headingES : props.headingEN}</h2>
          ) : props.type === 2 ? (
            <h3>{language === "ES" ? props.headingES : props.headingEN}</h3>
          ) : props.type === 3 ? (
            <h4>{language === "ES" ? props.headingES : props.headingEN}</h4>
          ) : props.type === 4 ? (
            <h5>{language === "ES" ? props.headingES : props.headingEN}</h5>
          ) : null}
          {props.moreItems ? (
            <span className={expanded ? "expanded" : "collapsed"}>+</span>
          ) : null}
        </button>
      </div>
      {props.children}
    </div>
  );
};

export default ServicesItem;
