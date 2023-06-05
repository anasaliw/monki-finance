import { Box, Typography, styled, Link } from "@mui/material";
export const MainText = styled(Typography)`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`;

export const ParentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  // justifyContent: "space-between",
  [theme.breakpoints.down(1160)]: {
    // paddingLeft: 10,
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
