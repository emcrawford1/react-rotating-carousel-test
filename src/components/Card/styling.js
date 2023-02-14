// Styling sheet for Card components

const info = {
  height: "300px",
  width: "300px",
  visibility: "hidden",
  position: "absolute",
  color: "rgb(122, 32, 65)",
  backgroundColor: "black",
  opacity: "0.8",
  left: "0",
  transform: "scale(1.174)",
  top: "0",
  display: "flex",
  flexFlow: "column nowrap",
};

const card = {};

const projectTitle = {
  fontSize: "21px",
  marginBotom: "12px",
  textAlign: "center",
  fontFamily:
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
};

const projectDescr = {
  position: "relative",
  width: "90%",
  left: "5%",
  marginBottom: "12px",
  fontSize: "14px",
  fontFamily: "Arial, Helvettica, sans-serif",
};

const cardImageContainerStyle = {

}

const cardImageLinkStyle = {
  textDecoration: "none",
};


const cardImageTitleStyle = {
  fontFamily: "Arial, Helvettica, sans-serif",
  textAlign: "center",
  fontSize: "11px",
  paddingTop: "10px",
  color: "#3399FF",
};


const linkContainer = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-evenly',
  marginTop: 'auto',
  paddingBottom: '25px',
}

const cardImageImgStyle = {
  width: '88px',
  height: '90px',
}

const hoverStyle = {
  transform: 'scale(1.1)'
}

let animation_delay = 5;

const image1Right = {
  transform: 'scale(1.174)',
  animation: 'front-image-rotate forwards',
  animationDelay: `${animation_delay}s`
}

//Possibly change so that the user can import these settings or they set to the default image size
const imgSettings = {
  height: '300px',
  width: '300px',
  borderRadius: '2px',
}

export {
  image1Right,
  imgSettings,
  info,
  card,
  projectTitle,
  projectDescr,
  cardImageContainerStyle,
  cardImageLinkStyle,
  cardImageTitleStyle,
  cardImageImgStyle,
  linkContainer,
  hoverStyle,
};


/*
TO DO
*** I want to be able to either have the user specify the width & height of each image, or 
have it auto-calculated.  In the non-react form, I have the images set to a fixed height &
width.  However, this will not work for a library. ***
*/
