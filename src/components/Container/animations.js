
export const calculateAnimations = carouselItems => {

  //Metadata is not included in count
  const itemCount = carouselItems.length - 1;
  const rotationAmt = 360/itemCount;
  const parentOffset = rotationAmt/2;
  let childOffset = parentOffset

  const carouselItemsWithAnimations = carouselItems.map((item, index) => {

    if(index !== 0) {
      item['rotationFrom'] = childOffset - rotationAmt;
      item['rotationTo'] = rotationAmt - childOffset;
      item['offset'] = childOffset 
      childOffset += parentOffset;
    }
    
    return item;
  })

  carouselItemsWithAnimations[0]['parentOffset'] = parentOffset;
  carouselItemsWithAnimations[0]['rotationAmout'] = rotationAmt;

  return carouselItemsWithAnimations;

}