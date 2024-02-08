"use client";

import Icon from "./GoogleIcon";
import { useInView } from "react-intersection-observer";

type PlaceholderProps = {
  bgColor: string;
};

const Placeholder = ({ bgColor }: PlaceholderProps) => {
  const { ref: placeholderRef, inView: placeholderInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const { ref: itemRef, inView: itemInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={placeholderRef}
      className={
        placeholderInView
          ? "placeholder-container fade-up"
          : "placeholder-container"
      }
    >
      <div
        style={
          bgColor === "blue"
            ? { backgroundColor: "rgb(165, 249, 255)" }
            : bgColor === "sand"
            ? { backgroundColor: "rgb(255, 218, 185)" }
            : bgColor === "gray"
            ? { backgroundColor: "rgb(230, 230, 230)" }
            : { backgroundColor: "transparent" }
        }
        className="placeholder-content"
      >
        <div className="placeholder-item">
          <div
            style={{ opacity: "0", animationDelay: "0.3s" }}
            ref={itemRef}
            className={
              itemInView ? "placeholder-icon fade-up" : "placeholder-icon"
            }
          >
            <Icon icon="close" />
          </div>
        </div>
      </div>
      <div
        style={
          bgColor === "blue"
            ? { backgroundColor: "rgb(165, 249, 255)" }
            : bgColor === "sand"
            ? { backgroundColor: "rgb(255, 218, 185)" }
            : bgColor === "gray"
            ? { backgroundColor: "rgb(230, 230, 230)" }
            : { backgroundColor: "transparent" }
        }
        className="placeholder-content"
      >
        <div className="placeholder-item">
          <div
            style={{ opacity: "0", animationDelay: "0.5s" }}
            ref={itemRef}
            className={
              itemInView ? "placeholder-icon fade-up" : "placeholder-icon"
            }
          >
            <Icon icon="close" />
          </div>
        </div>
        <div className="placeholder-item">
          <div
            style={{ opacity: "0", animationDelay: "0.7s" }}
            ref={itemRef}
            className={
              itemInView ? "placeholder-icon fade-up" : "placeholder-icon"
            }
          >
            <Icon icon="close" />
          </div>
        </div>
        <div className="placeholder-item">
          <div
            style={{ opacity: "0", animationDelay: "0.9s" }}
            ref={itemRef}
            className={
              itemInView ? "placeholder-icon fade-up" : "placeholder-icon"
            }
          >
            <Icon icon="close" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
