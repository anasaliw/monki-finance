import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  useMediaQuery,
  Link,
  MenuItem,
  Menu,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AlternateEmail,
  ChevronRight,
  Telegram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import DrawerFile from "./DrawerFile";
import {
  MainText,
  Text,
  MenuText,
  NavBtn,
  LogoBox,
  LinkContainer,
} from "./NavbarStyles";
import MenuFile from "./MenuFile";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  // ! Menu State
  const [anchorEl, setAnchorEl] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  //! For responsiveness
  const responsive = useMediaQuery("(max-width:1160px)");
  console.log(responsive);
  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: "rgba(133, 133, 132, 0.25)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            // paddingRight: "60px",
            height: 100,
          }}
        >
          <LogoBox>
            <img
              src='assets/Images/logo.png'
              alt='logo'
              style={{ margin: 0, padding: 0 }}
            />
            <LinkContainer
              href='#'
              target='_blank'
              style={{
                textDecoration: "none",
              }}
            >
              <MainText>MONKI FINANCE</MainText>
            </LinkContainer>
          </LogoBox>

          {responsive ? (
            <MenuIcon
              onClick={handleDrawerToggle}
              sx={{
                cursor: "pointer",
                fontSize: "30px",
                "&:hover": {
                  color: "#00F902",
                },
              }}
            />
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link href='#' target='_blank'>
                  <Telegram
                    sx={{
                      width: "40px",
                      height: "38px",
                      padding: "5px",
                      cursor: "pointer",
                      color: "gray",
                      "&:hover": {
                        color: "#00F902",
                      },
                    }}
                  />
                </Link>
                <Link href='#' target='_blank'>
                  <Twitter
                    sx={{
                      width: "40px",
                      height: "38px",
                      padding: "5px",
                      cursor: "pointer",
                      color: "gray",
                      "&:hover": {
                        color: "#00F902",
                      },
                    }}
                  />
                </Link>
                <Link href='#' target='_blank'>
                  <WhatsApp
                    sx={{
                      width: "40px",
                      height: "38px",
                      padding: "5px",
                      cursor: "pointer",
                      color: "gray",
                      "&:hover": {
                        color: "#00F902",
                      },
                    }}
                  />
                </Link>
                <Link href='#' target='_blank'>
                  <FontAwesomeIcon
                    className='awesome-icon'
                    icon={faDiscord}
                    // fontSize='10px'
                    style={{ width: "30px", height: "34px" }}
                  />
                </Link>
                <Link href='#' target='_blank'>
                  <AlternateEmail
                    sx={{
                      width: "40px",
                      height: "36px",
                      padding: "5px",
                      cursor: "pointer",
                      color: "gray",
                      "&:hover": {
                        color: "#00F902",
                      },
                    }}
                  />
                </Link>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0px 8px",
                    "&:hover": {
                      color: "#00F902",
                    },
                  }}
                  onClick={handleMenuClick}
                >
                  <Text
                    sx={
                      {
                        // padding: "0px 5px",
                        // "&:hover": {
                        //   color: "#00F902",
                        // },
                      }
                    }
                  >
                    Services
                  </Text>
                  {anchorEl ? <ExpandMoreIcon /> : <ChevronRight />}
                </Box>
                &nbsp; &nbsp;
                <LinkContainer
                  href='#'
                  target='_blank'
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Text>Request Audit</Text>
                </LinkContainer>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <LinkContainer
                  href='#'
                  target='_blank'
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Text>Token</Text>
                </LinkContainer>
              </Box>

              <NavBtn
                endIcon={
                  <RocketLaunchOutlinedIcon
                    color='white'
                    sx={{ width: "31px", height: "31px" }}
                  />
                }
              >
                Launch App
              </NavBtn>
            </>
          )}
          {/* // !  DrawerFile */}

          <DrawerFile
            handleDrawerToggle={handleDrawerToggle}
            openDrawer={openDrawer}
          />

          {/* // ! DropDown Menu */}
          <Menu
            anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.8,
                minHeight: 10,
                height: "auto",
                // marginLeft: "40px",
                background: "#2B2B2B",
                border: "none",
                width: "100% !important",
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuFile />
            {/* <Link
              // to='/profile '
              href='https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0xDbb332Cf5eC10149cC75f1c47370027364551732'
              style={{ textDecoration: "none", color: "#4d148c", padding: 0 }}
            >
              <MenuItem>
                <Box sx={{ padding: "0px 15px" }}>
                  <a
                    href='#'
                    target='_blank'
                    style={{ textDecoration: "none" }}
                  >
                    <MenuText>MONKI Finance</MenuText>
                  </a>
                </Box>
              </MenuItem>
              <MenuItem>
                <Box sx={{ padding: "0px 15px" }}>
                  <a
                    href='#'
                    target='_blank'
                    style={{ textDecoration: "none" }}
                  >
                    <MenuText>Youtube</MenuText>
                  </a>
                </Box>
              </MenuItem>
            </Link> */}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
