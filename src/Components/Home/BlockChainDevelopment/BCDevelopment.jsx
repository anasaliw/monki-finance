import { IconButton, Button, Link, Box } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Title,
  MainText,
  ParentContainer,
  ChildContainer,
  Btn,
  Image,
  BackgroundShades,
} from "./BCDevelopmentStyles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

// const BackgroundBox = styled(Button)(({ theme }) => ({
//   textAlign: "center",
//   marginBottom: "25px",
//   height: "140px",
//   width: "140px",
//   background: "purple",
//   borderRadius: "100%",
//   "&:hover": {
//     background: "purple",
//   },
//   [theme.breakpoints.down(1100)]: {},
// }));

// !Custom Buttons
// const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//   const {
//     carouselState: { currentSlide },
//   } = rest;
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "relative",
//         top: { lg: "-100px", md: "-100px", sm: "-100px", xs: "0px" },
//       }}
//     >
//       <IconButton onClick={() => previous()}>
//         <WestIcon sx={{ color: "white" }} />
//       </IconButton>
//       <IconButton onClick={() => next()}>
//         <EastIcon sx={{ color: "white" }} />
//       </IconButton>
//     </Box>
//   );
// };

function BCDevelopment() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2560 },
      items: 7,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 2559, min: 1439 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1439, min: 1023 },
      items: 3,
    },
    tablet1: {
      breakpoint: { max: 1023, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <BackgroundShades />
      <ParentContainer>
        <Title>BLOCHCHAIN DEVELOPMENT</Title>
        <MainText>POPULAR SERVICES</MainText>

        {/* //! CSS of Carousal is in App.css */}
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          customTransition='all 1s'
          transitionDuration={1000}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "tablet1",
            "mobile",
          ]}
        >
          <Link href='#' style={{ textDecoration: "none" }}>
            <ChildContainer>
              <Image src='assets/Images/icon34.png' alt='icon' />
              <Btn>Stacking</Btn>
            </ChildContainer>
          </Link>
          <Link href='#' style={{ textDecoration: "none" }}>
            <ChildContainer>
              <Image src='assets/Images/icon34.png' alt='icon' />
              <Btn>NFT Market Place</Btn>
            </ChildContainer>
          </Link>
          <Link href='#' style={{ textDecoration: "none" }}>
            <ChildContainer>
              <Image src='assets/Images/icon34.png' alt='icon' />

              <Btn>Smart Contract</Btn>
            </ChildContainer>
          </Link>
          <Link href='#' style={{ textDecoration: "none" }}>
            <ChildContainer>
              <Image src='assets/Images/icon34.png' alt='icon' />

              <Btn>Stacking</Btn>
            </ChildContainer>
          </Link>
          <Link href='#' style={{ textDecoration: "none" }}>
            <ChildContainer>
              <Image src='assets/Images/icon34.png' alt='icon' />
              <Btn>NFT Market Place</Btn>
            </ChildContainer>
          </Link>
          <Link href='#' style={{ textDecoration: "none" }}>
            <ChildContainer>
              <Image src='assets/Images/icon34.png' alt='icon' />

              <Btn>Smart Contract</Btn>
            </ChildContainer>
          </Link>
          <Link href='#' style={{ textDecoration: "none" }}>
            <ChildContainer>
              <Image src='assets/Images/icon34.png' alt='icon' />

              <Btn>Smart Contract</Btn>
            </ChildContainer>
          </Link>
          <Link href='#' style={{ textDecoration: "none" }}>
            <ChildContainer>
              <Image src='assets/Images/icon34.png' alt='icon' />

              <Btn>Smart Contract</Btn>
            </ChildContainer>
          </Link>
          {/* <Link href='javascript:void(0)' sx={{ textDecoration: "none" }}>
            <ChildContainer>
              <Image src='assets/Images/icon34.png' alt='icon' />

              <Btn>Smart Contract</Btn>
            </ChildContainer>
          </Link> */}
        </Carousel>
      </ParentContainer>
    </>
  );
}

export default BCDevelopment;
