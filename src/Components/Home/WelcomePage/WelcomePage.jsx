import { Box, styled, Typography } from "@mui/material";
import React from "react";
import "./WelcomeStyles.css";
import {
  Title,
  BottomTitle,
  BottomSubTitle,
  GradientText,
  ParaText,
  ParentContainer,
  Image,
  ImageBox,
  LeftBox,
  NavBtn,
  BookCallBtn,
  BottomContainer,
  BackgroundShades,
  BackgroundShades2,
} from "./WelcomePageStyles";
import { Link } from "react-router-dom";
// export const GradientParentBox = styled(Box)(({ theme }) => ({
//   boxSizing: 'content-box',
//   backgroundColor: '#ffffff';
//   // height: 55px;
//   // padding: 30px;
//   // display: flex;
//   // border-radius: 8px;
//   // box-shadow: 0 20px 25px rgba(0, 0, 0, 0.2),
//   // [theme.breakpoints.down(1100)]: {},
// }));

function WelcomePage() {
  return (
    <>
      {/* // !  Green Box */}

      {/* //!First Shade */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
        }}
      >
        <BackgroundShades></BackgroundShades>
        {/* //!Second Shade */}
        <BackgroundShades2></BackgroundShades2>
      </Box>

      <ParentContainer>
        <LeftBox>
          <Title>MONKI FINANCE</Title>
          <Title>PROVIDES</Title>
          {/* <GradientText>Web3 Development</GradientText> */}
          <div class='wrapper'>
            <div class='words'>
              <span className='spanText txt_btm'>Web3 Development</span>
              <span className='spanText'>Security Audits & Kyc</span>
              <span className='spanText'>Snipe Defi Tools </span>
            </div>
          </div>
          <ParaText>
            Lorem ipsum dolor sit amet, consectetur adipiscing MonkiFinance
          </ParaText>

          <Box
            sx={{
              display: "flex",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <a href='#contact' style={{ textDecoration: "none" }}>
              <NavBtn>Contact us</NavBtn>
            </a>
            <a href='#' style={{ textDecoration: "none" }}>
              <BookCallBtn>Book a call</BookCallBtn>
            </a>
          </Box>

          {/* <BottomContainer>
            <Box>
              <BottomTitle>300+</BottomTitle>
              <BottomSubTitle>Clients</BottomSubTitle>
            </Box>
            <Box>
              <BottomTitle>6+</BottomTitle>
              <BottomSubTitle>Automated </BottomSubTitle>
              <BottomSubTitle>Services</BottomSubTitle>
            </Box>
            <Box>
              <BottomTitle>Any</BottomTitle>
              <BottomSubTitle>Blockchain</BottomSubTitle>
            </Box>
          </BottomContainer> */}
        </LeftBox>

        <ImageBox>
          <Image
            src='assets/images/mainPic.png'
            alt='mainPic'
            // style={{ width: "548px", minWidth: "250px", maxWidth: "548px" }}
            // style={{ width: "100%" }}
          />
        </ImageBox>
      </ParentContainer>
    </>
  );
}

export default WelcomePage;
