import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Typography, styled, Box, Link } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const Btn = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(270deg, #00F902 -16.36%, rgba(99, 250, 6, 0) 190%)",
  borderRadius: "10px",
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "140%",
  /* identical to box height, or 31px */

  textAlign: "center",
  color: "#FFFFFF",

  width: "140px",
  height: "30px",
  "&:hover": {
    background:
      "linear-gradient(270deg, #00F902 -16.36%, rgba(99, 250, 6, 0) 190%)",
  },
  [theme.breakpoints.down(600)]: {
    width: "auto",
    height: "auto",
    padding: "5px 20px",
  },
}));

const DialogContentBox = styled(DialogContent)(({ theme }) => ({
  minHeight: "48px !important",
  // width: "450px",
  // minWidth: "100px",
  background:
    "linear-gradient(90deg, rgba(3,85,1,1) 0%, rgba(13,234,7,1) 100%)",
  alignItems: "center",
  textAlign: "center",

  // [theme.breakpoints.down(600)]: {
  //   width: "auto",
  //   height: "auto",
  //   padding: "5px 20px",
  // },
}));
export const Title = styled(Typography)`
  font-family: "Work Sans";
  margin-top: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #ffffff;
`;
export const Text = styled(Typography)`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  padding: 0px 5px;
  color: #ffffff;
`;
export const Text2 = styled(Typography)`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  padding: 0px 0px;
  cursor: pointer;
  color: #ffffff;
  &:hover {
    color: #00f902;
  }
`;

function PopOverFile() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        hideBackdrop={true}
        scroll='body'
        sx={{
          "& .MuiDialog-container": {
            alignItems: "flex-end",
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#2b2b2b",
            width: { lg: "25%", md: "25%", sm: "30%", xs: "80%" },
            verticalAlign: "bottom",
            left: { xl: 550, lg: 450, md: 320, sm: 150, xs: 0 },
            "&.MuiModal-root-MuiDialog-root": {
              zIndex: 1300,
            },
          },
        }}
      >
        <DialogContentBox>
          <img
            src='assets/Images/cookie1.png'
            alt='cookie'
            style={{ width: "52", height: "52px" }}
          />
        </DialogContentBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title>We Use Cookies</Title>
          <Text>
            This Website uses cookies to enhance your browsing experience
          </Text>
          <Link
            href='#'
            target='_blank'
            sx={{
              textDecoration: "none",
            }}
          >
            <Text2>Read more...</Text2>
          </Link>
        </Box>
        <DialogActions sx={{ textAlign: "center", justifyContent: "center" }}>
          <Btn startIcon={<DoneIcon size='large' />} onClick={handleClose}>
            Accept
          </Btn>
          <Btn startIcon={<CloseIcon />} onClick={handleClose}>
            Reject
          </Btn>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopOverFile;
