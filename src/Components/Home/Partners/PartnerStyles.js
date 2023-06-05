import { Box, Grid, styled, Typography } from "@mui/material";

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
export const ParentContainer = styled(Box)(({ theme }) => ({
  minHeight: "65vh",
  maxHeight: "350vh",
  padding: "100px 40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down(480)]: {
    padding: "100px 30px",
  },
}));
export const Image = styled("img")(({ theme }) => ({
  width: "175px",
  height: "40px",
  [theme.breakpoints.up(1440)]: {
    width: "200px",
    height: "45px",
  },
  [theme.breakpoints.up(1640)]: {
    width: "240px",
    height: "52px",
  },
  [theme.breakpoints.up(1800)]: {
    width: "280px",
    height: "56px",
  },
  [theme.breakpoints.up(2000)]: {
    width: "340px",
    height: "62px",
  },
  [theme.breakpoints.up(2200)]: {
    width: "380px",
    height: "70px",
  },
  [theme.breakpoints.up(2400)]: {
    width: "420px",
    height: "70px",
  },
}));
export const BottomImage = styled("img")(({ theme }) => ({
  width: "180px",
  height: "200px",
  [theme.breakpoints.down(480)]: {
    width: "115px",
    height: "130px",
  },
}));
export const GridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down(480)]: {},
}));
export const BackgroundShades = styled(Box)(({ theme }) => ({
  background: "rgba(0, 249, 2, 0.3)",
  // backgroundColor: "#00F902",
  filter: "blur(200px)",
  width: "100%",
  position: "absolute",
  zIndex: "-1",
  height: "92px",
  marginTop: "550px",
  [theme.breakpoints.down(900)]: {
    marginTop: "950px",
  },
  [theme.breakpoints.down(600)]: {
    marginTop: "1600px",
    width: "300px",
  },
}));
