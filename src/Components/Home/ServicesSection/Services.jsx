import { Link, Grid, Typography, styled, Box, Button } from "@mui/material";

import React from "react";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import {
  Title,
  MainText,
  GridComponent,
  GridBox,
  GridContainer,
  ImageContainer,
  GridTitle,
  GridParagraph,
  BackgroundShades,
  ParentBox,
} from "./ServiceStyles";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavBtn } from "../WelcomePage/WelcomePageStyles";
import { Send } from "iconsax-react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const bold = <b>5000</b>;

const gridList = [
  {
    link: "#",
    animation: "fade-right",
    icon: <Send size='32' color='#00f902' />,
    image: "assets/Images/send.png",
    title: "Multisender",
    text1: (
      <span>
        Bulk Transfer BNB & Tokens up to{" "}
        <span style={{ fontWeight: "bold" }}>5000</span> wallets in just one
        transaction!
      </span>
    ),
    text2: "Gas Fee Optimizer, Time Saver and really affordable.",
  },
  {
    link: "#",
    animation: "fade-up",
    icon: <LockOutlinedIcon size='32' color='#00f902' />,
    image: "assets/Images/lock.png",
    title: "Lock & Vesting",
    text1:
      " Monki Lock provides an easy and affordable tool for project`s owners.",
    text2:
      "Lock & Vest BNB, Tokens & Liquidity Tokens to gain trust among your community.",
  },
  {
    link: "#",
    animation: "fade-left",
    image: "assets/Images/wallet.png",
    title: "Wallet Generator",
    text1:
      "Create unlimited wallets & Save your private keys in a just few clicks.",
    text2: "Try it with Snipe Multisender or/and Monki Swapper.",
    // text3: "This is the perfect tool for project owners.",
  },
  {
    link: "#",
    animation: "fade-right",
    image: "assets/Images/swap.png",
    title: "Swap",
    text1: "Monki Swapper.",
    text2:
      "Swap with limit,stop, recurring, at a defined time or with price trigerring!",
    text3: "Professional Tool to better manage your investments.",
    // text4: "Match it with wallet generator.",
  },
  {
    link: "#",
    animation: "fade-down",
    image: "assets/Images/swap.png",
    title: "Stacking",
    text1:
      "This service allows anyone to create its own staking pool to incentivize staking NFT, LP tokens, Tokens and BNB in exchange of a fixed reward.",
    text2: "Create your own stacking ecosystem in just a few minutes.",
  },
  {
    link: "#",
    animation: "fade-right",
    image: "assets/Images/swap.png",
    title: "Token Generator",
    text1:
      "Monki Token Generator Create secure DeFi Tokens for your crypto business.",
    text2:
      "Standard, Mint, Burn, Reflection, Dividend Tokens and many more SECURE options available.",
  },
];

function Services() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <BackgroundShades></BackgroundShades>
      <Box
        sx={{
          marginTop: "100px",
          padding: "0px 0px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          // width: "100%",
        }}
      >
        <ParentBox>
          <Title>MONKI DAPP</Title>
          <MainText>SERVICES</MainText>
        </ParentBox>

        <GridContainer container spacing={0}>
          {gridList.map((data, index) => {
            return (
              <GridComponent
                data-aos={data.animation}
                item
                lg={4}
                md={4}
                sm={6}
                xs={12}
              >
                <GridBox>
                  <Link
                    href={data.link}
                    style={{ textDecoration: "none" }}
                    target='_blank'
                  >
                    <ImageContainer>
                      <img
                        src={data.image}
                        alt='gridPics'
                        style={{ height: "34px", width: "34px" }}
                      />
                      <GridTitle>{data.title}</GridTitle>
                    </ImageContainer>
                    <Box sx={{ marginTop: "30px" }}>
                      <GridParagraph>{data?.text1}</GridParagraph>
                      <GridParagraph>{data?.text2}</GridParagraph>
                      <GridParagraph>{data?.text3}</GridParagraph>
                      <GridParagraph>{data?.text4}</GridParagraph>
                    </Box>
                  </Link>
                </GridBox>
              </GridComponent>
            );
          })}
        </GridContainer>

        <Link href='#' style={{ textDecoration: "none" }} target='_blank'>
          <Button
            endIcon={
              <RocketLaunchOutlinedIcon
                color='white'
                sx={{ width: "31px", height: "31px" }}
              />
            }
            sx={{
              textAlign: "center",
              background:
                "linear-gradient(270deg, #00F902 -16.36%, rgba(99, 250, 6, 0) 190%)",
              color: "white",
              fontWeight: "700",
              borderRadius: "10px",
              marginTop: "20px",
              width: "229px",
              height: "50px",
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "140%",
              marginBottom: "100px",
              "&:hover": {
                background:
                  "linear-gradient(90deg, rgba(13,234,7,1) 0%, rgba(3,85,1,1) 100%)",
              },
            }}
          >
            Launch App
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default Services;
