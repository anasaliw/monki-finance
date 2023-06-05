import { Box, Button, styled, Typography } from "@mui/material";

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
  margin-bottom: 50px;
`;
export const ParentContainer = styled(Box)(({ theme }) => ({
  minHeight: "45vh",
  maxHeight: "200vh",
  padding: "100px 60px 100px 60px",
  background: "#232323",
  overflowX: "hidden",

  [theme.breakpoints.down(480)]: {
    padding: "50px 10px",
  },
}));
export const Image = styled("img")(({ theme }) => ({
  width: "122px",
  height: "134px",
}));

export const ChildContainer = styled(Box)(({ theme }) => ({
  width: "282px",
  height: "282px",
  margin: "10px",
  background:
    "linear-gradient(180deg, #3B3B3B 0%, rgba(59, 59, 59, 0.19) 100%)",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  // marginRight: "50px",
  [theme.breakpoints.down(1100)]: {
    minWidth: "200px",
    maxWidth: "500px",
    // width: "400px",
  },
  [theme.breakpoints.down(480)]: {
    minWidth: "200px",
    // maxWidth: "500px",
    width: "250px",
  },
}));
export const Btn = styled(Button)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "400",
  marginTop: "30px",
  width: "254px",
  fontSize: "18px",
  textDecoration: "none",
  color: "#FFFFFF",
  background:
    " linear-gradient(180deg, #5F5E5E 0%, rgba(95, 94, 94, 0.19) 100%)",
  borderRadius: "10px",
  [theme.breakpoints.down(480)]: {
    width: "auto",
    fontSize: "14px",
  },
}));
export const BackgroundShades = styled(Box)(({ theme }) => ({
  // background: "rgba(0, 249, 2, 0.3)",
  backgroundColor: "#00F902",
  opacity: 0.6,
  filter: "blur(200px)",
  width: "784px",
  position: "absolute",
  marginTop: "500px",
  height: "92px",
  right: 0,
  marginLeft: "-300px",
  [theme.breakpoints.down(800)]: {
    width: "300px",
  },
}));
