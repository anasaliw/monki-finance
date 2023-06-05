import { Box, Button, styled, Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "52px",
  lineHeight: "110%",
  color: "white",
  [theme.breakpoints.down(560)]: {
    textAlign: "center",
    fontSize: "35px",
  },
  [theme.breakpoints.up(1800)]: {
    // textAlign: "center",
    fontSize: "70px",
  },
}));
export const BottomTitle = styled(Typography)`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 140%;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #ffffff;
  @media (min-width: 2000px) {
    /* display: block; */
    font-size: 40px;
  }
`;
export const BottomSubTitle = styled(Typography)`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  text-transform: capitalize;
  color: #ffffff;
  @media (min-width: 2000px) {
    /* display: block; */
    font-size: 22px;
  }
`;
export const GradientText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "52px",
  lineHeight: "110%",
  // color: "#22bf0e",
  background:
    "linear-gradient(180deg, #00f902 0%, rgba(80, 249, 0, 0.24) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  marginTop: "10px",
  [theme.breakpoints.down(560)]: {
    textAlign: "center",
    fontSize: "35px",
  },
}));
export const ParaText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "22px",
  lineHeight: "160%",
  textTransform: "capitalize",
  color: "#FFFFFF",
  [theme.breakpoints.down(560)]: {
    marginTop: "10px",
    textAlign: "center",
    fontSize: "18px",
  },
  [theme.breakpoints.down(900)]: {
    marginTop: "10px",
    textAlign: "center",
    // fontSize: "18px",
  },
  [theme.breakpoints.up(1800)]: {
    marginTop: "10px",
    // textAlign: "center",
    fontSize: "35px",
  },
}));
export const ParentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "40px 60px 50px 80px",
  overflowX: "hidden",
  marginTop: "70px",

  [theme.breakpoints.down(1100)]: {
    flexDirection: "column",
    padding: "20px 20px",
    // width: "90%",
  },
  // [theme.breakpoints.between(900, 1100)]: {
  //   padding: "100px 60px 100px 80px",
  // },
}));
export const Image = styled("img")(({ theme }) => ({
  width: "85%",
  textAlign: "center",
  // objectFit: "cover",
  display: "flex",
  [theme.breakpoints.down(1100)]: {
    width: "100%",
    maxWidth: "350px",
    height: "auto",
    textAlign: "center",
    marginTop: "60px",
  },
  [theme.breakpoints.down(480)]: {
    marginTop: "10px",
    textAlign: "center",
    // display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.up(1600)]: {
    // display: "flex",
    justifyContent: "center",
    width: "80%",
    textAlign: "center",
  },
}));
export const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  // textAlign: "end",
  marginTop: "55px",
  display: "flex",
  paddingRight: "43px",
  justifyContent: "flex-end",
  // paddingRight: "20px",
  [theme.breakpoints.down(1100)]: {
    paddingRight: "0px",
    // width: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down(480)]: {
    paddingRight: "0px",
    marginTop: "0px",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
  },
}));
export const LeftBox = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "50px",
  padding: "0px 100px 0 20px",
  [theme.breakpoints.down(480)]: {
    padding: "0px 100px 0 0px",
  },
  [theme.breakpoints.down(1100)]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  [theme.breakpoints.up(1800)]: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // padding: "0 250px",
  },
  [theme.breakpoints.between(1400, 1600)]: {
    marginTop: "100px",
    // border: "1px solid red",
  },
  [theme.breakpoints.between(1601, 1800)]: {
    marginTop: "120px",
    // border: "1px solid red",
  },
  [theme.breakpoints.between(1801, 2000)]: {
    marginTop: "100px",
    // border: "1px solid red",
  },
}));
export const NavBtn = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(270deg, #00F902 -16.36%, rgba(99, 250, 6, 0) 190%)",
  color: "white",
  fontWeight: "700",
  borderRadius: "10px",
  marginRight: "20px",
  textDecoration: "none",
  width: "200px",
  height: "50px",
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontSize: "16px",
  lineHeight: "140%",
  "&:hover": {
    background:
      "linear-gradient(90deg, rgba(13,234,7,1) 0%, rgba(3,85,1,1) 100%)",
  },
  [theme.breakpoints.down(650)]: {
    // width: "180px",
    width: "auto",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: 0,
    marginRight: "10px",
  },
  [theme.breakpoints.up(1850)]: {
    // width: "180px",
    width: "229px",
    height: "65px",
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: 0,
    marginRight: "10px",
  },
}));
export const BookCallBtn = styled(Button)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontSize: "16px",
  lineHeight: "140%",
  color: "white",
  fontWeight: "700",
  borderRadius: "10px",
  width: "200px",
  height: "50px",
  border: "2px solid #00F902",
  "&:hover": {
    background:
      "linear-gradient(270deg, #00F902 -16.36%, rgba(99, 250, 6, 0) 190%)",
    border: "none",
  },
  [theme.breakpoints.down(650)]: {
    // width: "180px",
    width: "auto",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: 0,
  },
  [theme.breakpoints.up(1850)]: {
    // width: "180px",
    width: "229px",
    height: "65px",
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: 0,
  },
}));
export const BottomContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "70%",
  [theme.breakpoints.up(1450)]: {
    width: "70%",
  },
  [theme.breakpoints.up(1800)]: {
    width: "55%",
  },
  [theme.breakpoints.up(2200)]: {
    width: "30%",
  },
  [theme.breakpoints.down(470)]: {
    width: "100%",
  },
}));
export const BackgroundShades = styled(Box)(({ theme }) => ({
  // background: "rgba(0, 249, 2, 0.3)",
  backgroundColor: "#00F902",
  filter: "blur(200px)",
  width: "784px",
  // position: "absolute",
  marginBottom: "500px",
  height: "92px",
  marginLeft: "-300px",
  [theme.breakpoints.down(800)]: {
    width: "600px",
  },
  [theme.breakpoints.down(500)]: {
    width: "300px",
  },
}));
export const BackgroundShades2 = styled(Box)(({ theme }) => ({
  // background: "rgba(0, 249, 2, 0.3)",
  backgroundColor: "#00F902",
  filter: "blur(200px)",
  width: "300px",
  marginTop: "500px",
  // overflowX: "hidden !important",
  overflow: "hidden !important",
  left: 0,
  // position: "absolute",
  height: "92px",
  [theme.breakpoints.down(800)]: {
    width: "600px",
  },
}));
