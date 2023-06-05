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
export const CardTitle = styled(Typography)`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 140%;
  text-align: center;
  color: #ffffff;
`;
export const ParentContainer = styled(Box)(({ theme }) => ({
  minHeight: "65vh",
  maxHeight: "200vh",
  padding: "100px 80px",
  background: "#232323",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  //   width: "100%",
  //   justifyContent: "center",
  [theme.breakpoints.down(480)]: {
    padding: "10px 10px",
  },
}));
export const CardParentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "80px",

  [theme.breakpoints.down(480)]: {
    // padding: "100px 10px",
    flexDirection: "column",
    marginTop: "10px",
  },
}));
export const ParaText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "18px",
  lineWeight: "160%",
  marginTop: "30px",
  textTransform: "capitalize",
  color: "#FFFFFF",

  [theme.breakpoints.down(480)]: {
    // padding: "100px 10px",
  },
}));

export const CardChildBox = styled(Box)(({ theme }) => ({
  background: "#2B2B2B",
  borderRadius: "10px",
  padding: " 10px 20px",
  margin: "20px",
  [theme.breakpoints.between(1400, 1600)]: {
    height: "250px",
  },
  [theme.breakpoints.between(1601, 1800)]: {
    marginTop: "120px",
    height: "250px",
  },
  [theme.breakpoints.between(1801, 2000)]: {
    height: "250px",
  },
}));

export const BackgroundShades2 = styled(Box)(({ theme }) => ({
  background: "rgba(0, 249, 2, 0.3)",
  // backgroundColor: "#00F902",
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
