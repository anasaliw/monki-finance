import { Grid } from "@mui/material";
import React from "react";
import {
  Title,
  MainText,
  ParentContainer,
  Image,
  BottomImage,
  GridContainer,
  BackgroundShades,
} from "./PartnerStyles";

function Partners() {
  return (
    <>
      <BackgroundShades></BackgroundShades>
      <ParentContainer>
        <Title>WEB3 PARTNERS</Title>
        <MainText>PARTNERS</MainText>
        <Grid container spacing={5} sx={{ marginTop: "60px" }} rowGap={5}>
          <GridContainer item xs={6} sm={6} md={3} l={3}>
            <Image src='assets/Images/binance.png' alt='binance-logo' />
          </GridContainer>
          <GridContainer item xs={6} sm={6} md={3} l={3}>
            <Image src='assets/Images/binance.png' alt='binance-logo' />
          </GridContainer>
          <GridContainer item xs={6} sm={6} md={3} l={3}>
            <Image src='assets/Images/binance.png' alt='binance-logo' />
          </GridContainer>
          <GridContainer item xs={6} sm={6} md={3} l={3}>
            <Image src='assets/Images/binance.png' alt='binance-logo' />
          </GridContainer>
          <GridContainer item xs={6} sm={6} md={3} l={3}>
            <Image src='assets/Images/binance.png' alt='binance-logo' />
          </GridContainer>
          <GridContainer item xs={6} sm={6} md={3} l={3}>
            <Image src='assets/Images/binance.png' alt='binance-logo' />
          </GridContainer>
          <GridContainer item xs={6} sm={6} md={3} l={3}>
            <Image src='assets/Images/binance.png' alt='binance-logo' />
          </GridContainer>
          <GridContainer item xs={6} sm={6} md={3} l={3}>
            <Image src='assets/Images/binance.png' alt='binance-logo' />
          </GridContainer>
          <GridContainer item xs={6} sm={6} md={3} l={3}>
            <Image src='assets/Images/binance.png' alt='binance-logo' />
          </GridContainer>
          <GridContainer item xs={6} sm={6} md={3} l={3}>
            <Image src='assets/Images/binance.png' alt='binance-logo' />
          </GridContainer>
          <GridContainer item xs={6} sm={6} md={3} l={3}>
            <Image src='assets/Images/binance.png' alt='binance-logo' />
          </GridContainer>
          <GridContainer item xs={6} sm={6} md={3} l={3}>
            <Image src='assets/Images/binance.png' alt='binance-logo' />
          </GridContainer>
        </Grid>

        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "60px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GridContainer item xs={4} sm={4} md={3} l={3}>
            <BottomImage
              src='assets/Images/blockchain.png'
              alt='binance-logo'
            />
          </GridContainer>
          <GridContainer item xs={4} sm={4} md={3} l={3}>
            <BottomImage
              src='assets/Images/blockchain.png'
              alt='binance-logo'
            />
          </GridContainer>
          <GridContainer item xs={4} sm={4} md={3} l={3}>
            <BottomImage
              src='assets/Images/blockchain.png'
              alt='binance-logo'
            />
          </GridContainer>
        </Grid>
      </ParentContainer>
    </>
  );
}

export default Partners;
