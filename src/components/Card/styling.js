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

const githubContainerStyle = {

}

const githubLinkStyle = {
  textDecoration: "none",
  color: "#00CCFF",
  fontSize: "13px",
};

const deployedContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
}

const deployedTitleStyle = {
  fontFamily: "Arial, Helvettica, sans-serif",
  textAlign: "center",
  fontSize: "11px",
  paddingTop: "10px",
  color: "#3399FF",
};

const githubTitleStyle = {
  fontFamily: "Arial, Helvettica, sans-serif",
  textAlign: "center",
  fontSize: "11px",
  paddingTop: "10px",
  color: "#3399FF",
};

const deployedLinkStyle = {
  textDecoration: "none",
  color: "#0072de",
  fontSize: "13px",
};

const linkContainer = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-evenly',
  marginTop: 'auto',
  paddingBottom: '25px',
}

const deployedImgStyle = {
  width: '88px',
  height: '90px',
}

const githubImgStyle = {
  width: '92px',
  height: '90px',
}

const hoverStyle = {
  transform: 'scale(1.1)'
}

export {
  info,
  card,
  projectTitle,
  projectDescr,
  githubContainerStyle,
  githubLinkStyle,
  deployedContainerStyle,
  deployedTitleStyle,
  githubTitleStyle,
  deployedLinkStyle,
  linkContainer,
  deployedImgStyle,
  githubImgStyle,
  hoverStyle,
};


/*
TO DO
*** I want to be able to either have the user specify the width & height of each image, or 
have it auto-calculated.  In the non-react form, I have the images set to a fixed height &
width.  However, this will not work for a library. ***
*/
