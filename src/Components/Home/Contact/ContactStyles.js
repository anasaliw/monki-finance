import { LoadingButton } from "@mui/lab";
import { Box, styled, TextField, Typography, Button } from "@mui/material";

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
  color: #ffffff;
  text-align: center;
`;
export const MainTitle = styled(Typography)`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
  color: #ffffff;
  text-align: center;
`;
export const ParentContainer = styled(Box)(({ theme }) => ({
  minHeight: "65vh",
  maxHeight: "350vh",
  padding: "100px 100px",
  background: "#2b2b2b",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down(960)]: {
    padding: "100px 10px",
  },
  [theme.breakpoints.down(480)]: {
    padding: "20px 20px",
  },
}));
export const HeadContainer = styled(Box)(({ theme }) => ({
  minHeight: "65vh",
  maxHeight: "350vh",
  background: "rgba(133, 133, 132, 0.25)",
  borderRadius: "20px",
  width: "100%",
  marginTop: "60px",
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",

  [theme.breakpoints.down(950)]: {
    flexDirection: "column",
  },
}));
export const NavBtn = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(270deg, #00F902 -16.36%, rgba(99, 250, 6, 0) 190%)",
  color: "white",
  fontWeight: "700",
  borderRadius: "10px",
  width: "215px",
  height: "50px",
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontSize: "16px",
  alignItems: "center",
  textAlign: "center",
  margin: "5px auto 10px auto",

  lineHeight: "140%",

  "&:hover": {
    background:
      "linear-gradient(90deg, rgba(13,234,7,1) 0%, rgba(3,85,1,1) 100%)",
  },
  [theme.breakpoints.down(650)]: {
    width: "180px",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: 0,
  },
  [theme.breakpoints.down(480)]: {
    width: "195px",
  },
}));
export const ChildContainer = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  width: "90%",
  display: "flex",
  flexDirection: "column",
  padding: "15px 30px",
  marginTop: "20px",
  [theme.breakpoints.down(950)]: {
    textAlign: "center",
    width: "auto",
  },
}));

export const RightContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "22px",

  [theme.breakpoints.up(1800)]: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.between(1600, 1799)]: {
    marginTop: "0px",
  },
}));
export const BackgroundShades = styled(Box)(({ theme }) => ({
  backgroundColor: "#00F902",
  filter: "blur(200px)",
  width: "300px",
  opacity: 0.5,
  position: "absolute",
  height: "92px",
  marginTop: "100px",
  [theme.breakpoints.down(700)]: {
    width: "300px",
  },
}));
export const TextFieldComponent = styled(TextField)(({ theme }) => ({
  marginTop: "10px",
  borderRadius: "10px",
  border: "1px solid #838384",

  "&.MuiInputBase-input-MuiOutlinedInput-input": {
    height: "0.5em",
  },
}));
export const DotText = styled(Typography)(({ theme }) => ({
  color: "#00F902",
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "22px",
}));
export const TimelineText = styled(Typography)(({ theme }) => ({
  color: "#FFFF",
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
}));
export const GradientText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "140%",
  textAlign: "center",

  background:
    "linear-gradient(180deg, #00f902 0%, rgba(80, 249, 0, 0.24) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  marginTop: "0px",
  [theme.breakpoints.down(560)]: {
    textAlign: "center",
  },
}));
