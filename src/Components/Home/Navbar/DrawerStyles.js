import { Drawer, Typography, styled, Box, Button } from "@mui/material";

export const MainText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "140%",
  textAlign: "center",
  color: "#ffffff",
  [theme.breakpoints.down(650)]: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: 0,
  },
}));
export const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  margin: "30px 30px 30px 0px ",
  alignItems: "center",
  cursor: "pointer",
  // backgroundColor: "salmon",
  [theme.breakpoints.down(1160)]: {
    // paddingLeft: 10,
  },
}));
export const NavBtn = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(270deg, #00F902 -16.36%, rgba(99, 250, 6, 0) 190%)",
  color: "white",
  marginTop: "auto",
  fontWeight: "700",
  borderRadius: "0px",
  //   bottom: 0,
  width: "100%",
  //   position: "fixed",
  height: "45px",
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontSize: "16px",
  lineHeight: "140%",
  "&:hover": {
    background:
      "linear-gradient(90deg, rgba(13,234,7,1) 0%, rgba(3,85,1,1) 100%)",
  },
  [theme.breakpoints.down(650)]: {
    // width: "160px",
    fontSize: "16px",
    fontWeight: "400",
    // lineHeight: 0,
    // marginRight: "0",
  },
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "20px",
  marginTop: "20px",
  marginLeft: "20px",
  lineHeight: "140%",
  textDecoration: "none",
  color: "#ffffff",
  cursor: "pointer",
  "&:hover": {
    color: "#00F902",
  },
}));
export const dropDownStyle = {
  fontSize: "30px",
  fontWeight: "700",
  fontFamily: "Work Sans",
  fontStyle: "normal",

  color: "white",
  "& .MuiTreeItem-content.Mui-selected": {
    background: "transparent",
  },
  "& .MuiTreeItem-content": {
    "&:hover": {
      color: "#00F902",
    },
  },
  "& .MuiTreeItem-content .MuiTreeItem-label": {
    fontSize: "22px",
    fontWeight: "700",
    fontFamily: "Work Sans",
    fontStyle: "normal",
  },
  "& .MuiTreeItem-root .MuiTreeItem-content .MuiTreeItem-label": {
    fontSize: "20px",
    fontWeight: "400",
    fontFamily: "Work Sans",
    fontStyle: "normal",
  },
  "& .MuiTreeItem-content .MuiTreeItem-iconContainer svg": {
    fontSize: "25px",
    fontWeight: "400",
    fontFamily: "Work Sans",
    fontStyle: "normal",
    "&:hover": {
      color: "#00F902",
    },
  },
};
