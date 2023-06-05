import { Button, styled, Typography, Box, Link } from "@mui/material";

export const MainText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "140%",
  textAlign: "center",
  color: "#ffffff",
  [theme.breakpoints.down(650)]: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: 0,
  },
}));
export const LinkContainer = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    borderBottom: "1px solid #0CE306",
  },
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  // margin: "0px 12px",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "140%",
  textAlign: "center",
  textDecoration: "none",
  color: "#ffffff",
  cursor: "pointer",
  "&:hover": {
    color: "#00F902",
  },
  [theme.breakpoints.down(650)]: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: 0,
  },
}));
export const MenuText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "400",
  padding: "0 10px",

  color: "#ffffff",
  cursor: "pointer",
  "&:hover": {
    color: "#00F902",
  },
  [theme.breakpoints.down(650)]: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: 0,
  },
}));

export const NavBtn = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(270deg, #00F902 -16.36%, rgba(99, 250, 6, 0) 190%)",
  color: "white",
  fontWeight: "700",
  borderRadius: "10px",
  marginRight: "80px",
  width: "200px",
  height: "45px",
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontSize: "15px",
  lineHeight: "140%",
  "&:hover": {
    background:
      "linear-gradient(90deg, rgba(13,234,7,1) 0%, rgba(3,85,1,1) 100%)",
  },
  [theme.breakpoints.down(650)]: {
    width: "160px",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: 0,
    marginRight: "0",
  },
}));
export const LogoBox = styled(Box)(({ theme }) => ({
  paddingLeft: "70px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  [theme.breakpoints.down(1160)]: {
    paddingLeft: 10,
  },
}));
