import { Box, styled, Typography } from "@mui/material";

export const Title = styled(Typography)`
  font-family: "Inter";
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  margin-bottom: 10px;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #00f902;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 8px #00f902;
`;
export const MainText = styled(Typography)`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 140%;
  text-align: center;
  color: #ffffff;
`;
export const HeadTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "67px",
  lineHeight: "110%",
  textTransform: "capitalize",
  color: "#ffffff",
  marginTop: "50px",
  [theme.breakpoints.down(1100)]: {
    textAlign: "center",
    fontSize: "35px",
    alignItems: "center",
  },
  [theme.breakpoints.up(2000)]: {
    fontSize: "90px",
  },
}));
export const BottomContainer = styled(Box)(({ theme }) => ({
  background: "rgba(133, 133, 132, 0.25)",
  borderRadius: "10px",
  margin: "30px 23px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "40px 90px",
  textAlign: "center",
  [theme.breakpoints.down(1050)]: {
    flexDirection: "column",
    // padding: "40px 20px",
  },
  [theme.breakpoints.down(480)]: {
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding: "40px 20px",
    width: "150px",
  },
}));

export const GridParagraph = styled(Typography)`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  text-transform: capitalize;
  color: #ffffff;
  margin-bottom: 10px;
  @media (min-width: 1800px) {
    font-size: 28px;
  }
  @media (min-width: 2000px) {
    font-size: 30px;
  }
`;
export const GradientText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "45px",
  lineHeight: "110%",
  alignItems: "center",
  textTransform: "capitalize",
  background: "linear-gradient(180deg, #00F902 0%, rgba(0, 249, 2, 0.19) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  [theme.breakpoints.down(450)]: {
    fontSize: "35px",
    // padding: 0,
  },
}));
export const BottomText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "23px",
  lineHeight: "160%",
  textTransform: "capitalize",
  color: "#ffffff",
  [theme.breakpoints.down(450)]: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  [theme.breakpoints.down(1050)]: {
    marginBottom: "30px",
  },
}));
export const Container = styled(Typography)(({ theme }) => ({
  display: "flex",
  padding: "20px 20px",
  [theme.breakpoints.down(1100)]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: 0,
  },
}));
export const ChildContainer = styled(Typography)(({ theme }) => ({
  width: "100%",
  paddingLeft: "30px",
  marginTop: "50px",
  [theme.breakpoints.down(1100)]: {
    justifyContent: "center",
    paddingLeft: "0px",
    alignItems: "center",
    textAlign: "center",
    // padding: 0,
  },
  [theme.breakpoints.up(1800)]: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // padding: 0,
  },
  [theme.breakpoints.between(1400, 1600)]: {
    marginTop: "70px",
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
export const ParentContainer = styled(Typography)(({ theme }) => ({
  padding: "0px 80px",
  [theme.breakpoints.down(500)]: {
    padding: "0 10px",
    // padding: 0,
  },
}));
export const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: "60px",
  [theme.breakpoints.down(1100)]: {
    textAlign: "center",
    // padding: 0,
  },
  [theme.breakpoints.up(1800)]: {
    // textAlign: "center",
    // padding: 0,
  },
}));
export const Image = styled("img")(({ theme }) => ({
  width: "80%",

  maxWidth: "700px",
  [theme.breakpoints.down(1100)]: {
    maxWidth: "400px",
    // padding: 0,
  },
  [theme.breakpoints.down(470)]: {
    // maxWidth: "400px",
    // padding: 0,
    width: "100%",
  },
}));
export const BackgroundShades = styled(Box)(({ theme }) => ({
  // background: "rgba(0, 249, 2, 0.3)",
  backgroundColor: "#00F902",
  filter: "blur(200px)",
  width: "404px",
  position: "absolute",
  marginTop: "600px",
  height: "92px",
  opacity: 0.5,

  marginLeft: "-100px",
  [theme.breakpoints.down(800)]: {
    width: "300px",
  },
}));

export const BackgroundShades2 = styled(Box)(({ theme }) => ({
  // background: "rgba(0, 249, 2, 0.3)",
  backgroundColor: "#00F902",
  filter: "blur(200px)",
  width: "404px",
  position: "absolute",
  marginTop: "800px",
  height: "92px",
  opacity: 0.5,
  right: 0,
  marginLeft: "-600px",
  [theme.breakpoints.down(800)]: {
    width: "300px",
  },
}));
