import { Box, styled, Typography, Link, Divider } from "@mui/material";

export const MainText = styled(Typography)`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`;
export const ParentContainer = styled(Box)(({ theme }) => ({
  minHeight: "65vh",
  maxHeight: "350vh",
  padding: "50px 100px 10px 100px",
  background: "#232323",
  display: "flex",
  background: "#232323",
  flexDirection: "column",

  [theme.breakpoints.down(900)]: {
    padding: "100px 20px",
    alignItems: "center",
  },
  [theme.breakpoints.down(480)]: {
    padding: "100px 20px 10px 20px",
    alignItems: "start",
  },
}));
export const LogoBox = styled(Box)(({ theme }) => ({
  //   paddingLeft: "60px",
  marginBottom: "30px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down(650)]: {
    paddingLeft: 0,
  },
}));
export const LinkParentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.down(900)]: {
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
  },
  [theme.breakpoints.down(480)]: {
    alignItems: "start",
  },
}));
export const LinkText = styled(Link)(({ theme }) => ({
  color: "white",
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "140%",
  textDecoration: "none",
  "&:hover": {
    color: "#00F902",
    fontSize: "16.5px",
  },
  [theme.breakpoints.down(650)]: {},
}));
export const LinkText2 = styled(Link)(({ theme }) => ({
  color: "white",
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "140%",
  padding: "0px 20px",
  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },
  [theme.breakpoints.down(700)]: {
    marginTop: "30px",
  },
  [theme.breakpoints.down(480)]: {
    marginTop: "10px",
  },
}));
export const BottomText = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "140%",
  padding: "0px 20px",
  textDecoration: "none",

  [theme.breakpoints.down(650)]: {},
}));
export const LinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",

  [theme.breakpoints.down(900)]: {
    alignItems: "center",
  },
  [theme.breakpoints.down(480)]: {
    alignItems: "start",
  },
}));
export const InfoBox = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(180deg, #3B3B3B 0%, rgba(59, 59, 59, 0.19) 100%)",
  borderRadius: "20px",
  padding: "10px 20px",

  [theme.breakpoints.down(650)]: {},
}));
export const GradientText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "26px",
  lineHeight: "110%",
  color: "#22bf0e",
  marginBottom: "20px",
  background:
    "linear-gradient(180deg, #00f902 0%, rgba(80, 249, 0, 0.24) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  marginTop: "10px",
  [theme.breakpoints.down(560)]: {
    // textAlign: "center",
    fontSize: "20px",
  },
}));
export const ContactText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "140%",
  color: "white",

  marginBottom: "10px",
  [theme.breakpoints.down(560)]: {},
}));
export const BottomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  margin: "20px 0px",
  [theme.breakpoints.down(700)]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down(480)]: {
    alignItems: "start",
    justifyContent: "flex-start",
  },
}));
