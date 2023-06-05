import { Box, Card, CardContent, styled, Typography } from "@mui/material";
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
  minHeight: "65vh",
  maxHeight: "200vh",
  padding: "100px 100px",
  background: "#2b2b2b",
  overflowX: "hidden",

  [theme.breakpoints.down(480)]: {
    padding: "10px 10px",
    // minHeight: "45vh",
  },
}));
export const CardBox = styled(Card)(({ theme }) => ({
  margin: "0px",
  width: "282px",
  marginRight: "5px",
  // minWidth: "280px",
  // maxWidth: "360px",
  maxHeight: "320px",
  borderRadius: "20px",
  background: "none",
}));
export const CardContentBox = styled(CardContent)(({ theme }) => ({
  color: "white",
  height: "60px",
  background: "#3B3B3B",
  textAlign: "center",
  fontFamily: "Work Sans",
  fontSize: "22px",
  display: "flex",
  justifyContent: "center",
}));
