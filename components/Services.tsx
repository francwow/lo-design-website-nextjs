"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import { ServicesItems } from "@/data/services";
import Dots from "./Dots";
import ServicesItem from "./ServicesItem";
import { useState } from "react";
import ProductItems from "./ProductItems";

const Services = () => {
  const { language } = useLanguage();

  return (
    <div className="services-container">
      <Dots />
      <div className="services">
        {/* main heading */}
        <div className="services-heading">
          <h1>
            {language === "ES"
              ? "Productos y Servicios"
              : "Products and Services"}
          </h1>
        </div>
        <div className="services-nav-container">
          {/* main-container */}
          <div className="services-items">
            {ServicesItems.map((item, i) => {
              return (
                <div key={i} className="services-item-container">
                  <ServicesItem
                    id={item.id}
                    headingES={item.headingES}
                    headingEN={item.headingEN}
                    type={item.type}
                    moreItems={item.moreItems}
                    imgSrc={item.imgSrc}
                    alt={item.alt}
                  >
                    {item.subCategories?.map((item2, j) => {
                      return (
                        <div key={j} className="services-item-container">
                          <ServicesItem
                            id={item2.id}
                            headingES={item2.headingES}
                            headingEN={item2.headingEN}
                            type={item2.type}
                            moreItems={item2.moreItems}
                            imgSrc={item2.imgSrc}
                            alt={item2.alt}
                          >
                            {item2.subCategories?.map((item3, k) => {
                              return (
                                <div
                                  key={k}
                                  className="services-item-container"
                                >
                                  <ServicesItem
                                    id={item3.id}
                                    headingES={item3.headingES}
                                    headingEN={item3.headingEN}
                                    type={item3.type}
                                    moreItems={item3.moreItems}
                                    imgSrc={item3.imgSrc}
                                    alt={item3.alt}
                                  >
                                    {item3.subCategories?.map((item4, l) => {
                                      return (
                                        <div
                                          key={l}
                                          className="services-item-container"
                                        >
                                          <ServicesItem
                                            id={item4.id}
                                            headingES={item4.headingES}
                                            headingEN={item4.headingEN}
                                            type={item4.type}
                                            moreItems={item4.moreItems}
                                            imgSrc={item4.imgSrc}
                                            alt={item4.alt}
                                          />
                                        </div>
                                      );
                                    })}
                                  </ServicesItem>
                                </div>
                              );
                            })}
                          </ServicesItem>
                        </div>
                      );
                    })}
                  </ServicesItem>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ProductItems />
    </div>
  );
};

export default Services;
