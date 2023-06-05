import { Grid, Typography, styled, Box, Button } from "@mui/material";

export const Title = styled(Typography)`
  font-family: "Inter";
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  margin-bottom: 10px;
  /* identical to box height */

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
export const GridBox = styled(Box)(({ theme }) => ({
  // width: "500px",
  height: "215px",
  // height: "200px",
  padding: "20px",
  maxHeight: "350px",
  // padding: "10px 10px",
  background:
    "linear-gradient(180deg,rgba(133, 133, 132, 0.25) 0%,rgba(133, 133, 132, 0.0475) 100%)",
  borderRadius: "20px",
  // height: "auto",
  // margin: "10px 30px",
  // overflow: "hidden",
  [theme.breakpoints.down(1080)]: {
    height: "240px",
  },
  [theme.breakpoints.down(900)]: {
    // height: "auto",
    height: "220px",
  },
  [theme.breakpoints.down(760)]: {
    height: "260px",
  },
  [theme.breakpoints.down(600)]: {
    height: "auto",
  },
  [theme.breakpoints.down(480)]: {
    height: "215px",
  },

  [theme.breakpoints.between(900, 1000)]: {
    height: "250px",
  },
}));
export const GridComponent = styled(Grid)(({ theme }) => ({
  width: { lg: "100%", md: "100%", sm: "100%", xs: "100%" },
  // height: "265px",
  display: "flex",
  minHeight: "235px",
  maxHeight: "400px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingRight: "20px",
  [theme.breakpoints.down(1080)]: {
    // paddingRight: "20px",
    minHeight: "257px",
  },
  [theme.breakpoints.between(900, 1000)]: {
    minHeight: "270px",
  },
  [theme.breakpoints.down(900)]: {
    // paddingRight: "20px",
    minHeight: "240px",
  },
  [theme.breakpoints.down(760)]: {
    // paddingRight: "20px",
    minHeight: "280px",
  },
  [theme.breakpoints.down(600)]: {
    paddingRight: "0px",
    minHeight: "210px",
    // minHeight: "100px",
  },
  [theme.breakpoints.down(480)]: {
    paddingRight: "0px",
    minHeight: "230px",
    // minHeight: "100px",
  },
  [theme.breakpoints.up(1800)]: {
    display: "block",
  },
  // [theme.breakpoints.down(1100)]: {
  //   display: "block",
  // },
}));
export const GridContainer = styled(Grid)(({ theme }) => ({
  // display: "flex",
  // padding: "0px 100px",
  padding: "0 88px",
  justifyContent: "center",
  [theme.breakpoints.down(900)]: {
    alignItems: "center",
  },
  [theme.breakpoints.down(600)]: {
    marginLeft: "0px",
    padding: " 0 44px",
  },
}));
export const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down(900)]: {
    display: "flex",
    justifyContent: "center",
  },
}));
export const ParentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "20px 0 20px 0",
  [theme.breakpoints.down(480)]: {
    margin: "20px 0px",
  },
}));

export const GridTitle = styled(Typography)`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  margin-left: 10px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: #ffffff;
`;
export const GridParagraph = styled(Typography)`
  font-family: "Work Sans";
  font-style: normal;
  /* font-weight: 200; */
  font-size: 13px;
  /* line-height: 160%; */
  /* text-align: center; */
  text-transform: capitalize;
  color: #ffffff;
  margin-bottom: 5px;
`;
export const BackgroundShades = styled(Box)(({ theme }) => ({
  // background: "rgba(0, 249, 2, 0.3)",
  filter: "blur(200px)",
  backgroundColor: "#00F902",
  width: "404px",
  opacity: 0.6,
  position: "absolute",
  marginTop: "650px",
  height: "92px",
  marginLeft: "-100px",
  [theme.breakpoints.down(800)]: {
    width: "300px",
  },
}));
