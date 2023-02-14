import React from "react";
import { ImageContainer } from "./ImageContainer";

export const InnerContainer = ({ carouselItems }) => {
  return (
    <>
      {
      carouselItems.map((item, index) => {

        // If the user wishes to add a card to the carousel, the first object in the array should have a key 
        // named 'card' set to true.  Otherwise the key will not exist or it will be set to false.
        let cardFlag = carouselItems[0].card ? true : false

        //Skip the first item since it will contain an object with meta data about the carousel items
        if(index === 0) return <></>;

        return (
          <ImageContainer
            index={index}
            item={item}
            cardFlag={cardFlag}
          />
        );
      })}
    </>
  );
};
