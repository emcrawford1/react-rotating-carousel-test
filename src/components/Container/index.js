import React from "react";
import { ImageContainer } from "./ImageContainer";
import { carousel, carousel_outer_container } from "./styling";
import { calculateAnimations } from "../../helpers/animationEngine";

export const InnerContainer = ({ carouselItems }) => {
  //Returns an object with the animation styles for each component
  const animations = calculateAnimations(carouselItems);

  // Check if meta-object contains style items.  If so, assign to style variables
  const carouselStyle = carouselItems[0].carouselStyle
    ? carouselItems[0].carouselStyle
    : {};
  const outerContStyle = carouselItems[0].outerContStyle
    ? carouselItems[0].outerContStyle
    : {};

  return (
    <div style={Object.assign({}, carousel, carouselStyle)}>
      <div class={carouselItems[0].imgRotatorClass} style={Object.assign({}, carousel_outer_container, outerContStyle)}>
        <div style={Object.assign({}, animations.innerContainer, animations.imgRotator)}>
          {carouselItems.map((item, index) => {
            // If the user wishes to add a card to the carousel, the first object in the array should have a key
            // named 'card' set to true.  Otherwise the key will not exist or it will be set to false.
            let cardFlag = carouselItems[0].card ? true : false;

            //Skip the first item since it will contain an object with meta data about the carousel items
            if (index === 0) return <></>;

            return (
              <ImageContainer index={index} item={item} cardFlag={cardFlag} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

/*Note - for future reference.  The meta data in carouselItems[0] will need to contain:
  1) A 'card' flag boolean value, indicating whether or not the user wishes to add a card to the front carousel item. 
  2) 'Style' variables if the user wishes to overwrite any of the default styling
  3) Certain animation attributes such as animation duration
*/
