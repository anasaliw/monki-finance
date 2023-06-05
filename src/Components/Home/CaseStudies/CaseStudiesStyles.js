import { Box, styled, Typography } from "@mui/material";

export const Title = styled(Typography)`
  font-family: "Inter";
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  margin-bottom: 0px;
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
export const ParentContainer = styled(Box)(({ theme }) => ({
  minHeight: "25vh",
  maxHeight: "350vh",
  padding: "10px 80px 0px 80px",
  background: "#232323",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down(480)]: {
    padding: "20px 10px",
  },
}));
export const ParentCardBox = styled(Box)(({ theme }) => ({
  padding: "10px 50px 0px 50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.down(480)]: {
    padding: "20px 10px",
    flexDirection: "column",
  },
}));
export const ChildCardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  margin: "20px",
  [theme.breakpoints.down(480)]: {},
}));
export const CardText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "20px",
  marginTop: "10px",
  lineHeight: "140%",

  color: "#FFFFFF",
  [theme.breakpoints.down(480)]: {},
}));
export const BottomText1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "22px",
  lineHeight: "140%",
  marginTop: "20px",
  color: "#FFFFFF",
  [theme.breakpoints.down(480)]: {},
}));
export const BottomText2 = styled(Typography)(({ theme }) => ({
  paddingBottom: "50px",
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "400",
  marginTop: "10px",
  fontSize: "16px",
  lineHeight: "140%",
  background: "#232323",
  color: "#FFFFFF",
  [theme.breakpoints.down(480)]: {},
}));
export const BigBoxComponent = styled(Box)(({ theme }) => ({
  background: "#232323",
  padding: "0px 100px",
  // width: "100%",
  [theme.breakpoints.down(768)]: {
    padding: "0px 20px",
  },
  [theme.breakpoints.up(1850)]: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: "72px",
  height: "73px",
  borderRadius: "20px",
  objectFit: "cover",

  [theme.breakpoints.down(480)]: {},
}));
export const MainImage = styled("img")(({ theme }) => ({
  width: "100%",
  minWidth: "310px",
  maxWidth: "1500px",
  height: "550px",
  objectFit: "cover",
  borderRadius: "10px",
  [theme.breakpoints.up(1800)]: {
    maxWidth: "5000px",
  },
}));
