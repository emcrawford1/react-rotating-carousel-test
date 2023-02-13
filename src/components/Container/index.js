import React from "react";
import { Card } from "../Card";
import { ImageContainer } from "./ImageContainer";

export const InnerContainer = ({ carouselItems }) => {
  return (
    <>
      {carouselItems.map((item, index) => {
        return (
          <ImageContainer
            index={index}
            src={item.source}
            alt={item.title}
            style={item.style}
          />
        );
      })}
    </>
  );
};
