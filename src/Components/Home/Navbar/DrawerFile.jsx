import { Divider, Drawer, Box, List, Link } from "@mui/material";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import React from "react";
import { MainText, LogoBox, NavBtn, Text, dropDownStyle } from "./DrawerStyles";
import { Close } from "@mui/icons-material";

function DrawerFile({ handleDrawerToggle, openDrawer }) {
  return (
    <Drawer
      open={openDrawer}
      onClose={handleDrawerToggle}
      anchor='right'
      PaperProps={{
        sx: {
          width: "280px",
          background: "transparent",

          backdropFilter: "blur(30px)",
        },
      }}
    >
      <Box>
        <LogoBox>
          <Box
            onClick={handleDrawerToggle}
            sx={{
              background:
                "linear-gradient(270deg, #00F902 -16.36%, rgba(99, 250, 6, 0) 190%)",
              borderRadius: "100%",
              height: "40px",
              width: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              "&:hover": {
                background:
                  "linear-gradient(90deg, rgba(13,234,7,1) 0%, rgba(3,85,1,1) 100%)",
              },
            }}
          >
            <Close sx={{ color: "white" }} />
          </Box>
        </LogoBox>
        <Divider style={{}} />

        <List>
          {/* <TreeView
            aria-label='file system navigator'
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            back
            sx={{
              height: "auto",
              flexGrow: 1,
              maxWidth: 280,
              overflow: "hidden",
            }}
          >
            <TreeItem sx={dropDownStyle} nodeId='1' label='Applications'>
              <TreeItem nodeId='2' label='MONKI Finance' />
              <TreeItem nodeId='3' label='Youtube' />
            </TreeItem>
          </TreeView> */}

          <Link href='#services' style={{ textDecoration: "none" }}>
            <Text style={{ padding: "0px 12px" }}>Services</Text>
          </Link>
          <Link href='#' target='_blank' style={{ textDecoration: "none" }}>
            <Text style={{ padding: "0px 12px" }}>Request Audit</Text>
          </Link>

          <Link href='#' target='_blank' style={{ textDecoration: "none" }}>
            <Text style={{ padding: "0px 12px" }}>Token</Text>
          </Link>
        </List>
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
    </Drawer>
  );
}

export default DrawerFile;
