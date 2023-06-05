import { Box, styled } from "@mui/material";
import React from "react";
import {
  Title,
  MainText,
  HeadTitle,
  BottomContainer,
  GridParagraph,
  GradientText,
  BottomText,
  Container,
  ChildContainer,
  ParentContainer,
  ImageContainer,
  Image,
  BackgroundShades,
  BackgroundShades2,
} from "./DigitalBuilderStyles";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const ScrollTriggerBox = styled(ScrollTrigger)(({ theme }) => ({
  // alignItems: "center",

  [theme.breakpoints.down(480)]: {
    display: "flex",
    justifyContent: "center",
  },
}));
function DigitalBuilder() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [counterOn, setCounterOn] = React.useState(false);

  return (
    <>
      <BackgroundShades></BackgroundShades>
      <BackgroundShades2 />
      <ParentContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "80px 0px 0px 0px",
          }}
        >
          <Title>MONKI FINANCE</Title>
          <MainText>ABOUT US</MainText>
        </Box>

        <Container>
          <ImageContainer>
            <Image src='assets/images/mainPic.png' alt='mainPic' />
          </ImageContainer>

          <ChildContainer>
            <HeadTitle>Digital Builders</HeadTitle>
            <GridParagraph sx={{ marginTop: "50px" }}>
              Monki finance is a top notch development company based in London.
            </GridParagraph>
            <GridParagraph>
              We have been helping individual, small business and enterprises
              around the world to build their digital solutions with the use of
              innovative technologies
            </GridParagraph>
          </ChildContainer>
        </Container>
        <ScrollTriggerBox
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <BottomContainer data-aos='fade-up'>
            <Box>
              <GradientText>
                {counterOn && (
                  <CountUp start={0} end={300} duration={0.8} delay={0} />
                )}
                +
              </GradientText>
              <BottomText>Clients</BottomText>
            </Box>
            <Box>
              <GradientText>
                {counterOn && (
                  <CountUp start={0} end={10} duration={0.8} delay={0} />
                )}
                k+
              </GradientText>
              <BottomText>Community</BottomText>
            </Box>
            <Box>
              <GradientText>
                {counterOn && (
                  <CountUp start={0} end={100} duration={1} delay={0} />
                )}
                +
              </GradientText>
              <BottomText>Developers</BottomText>
            </Box>
            <Box>
              <GradientText>
                {counterOn && (
                  <CountUp start={0} end={24} duration={0.8} delay={0} />
                )}
                /
                {counterOn && (
                  <CountUp start={0} end={7} duration={0.8} delay={0} />
                )}
              </GradientText>
              <BottomText>Active</BottomText>
            </Box>
          </BottomContainer>
        </ScrollTriggerBox>
      </ParentContainer>
    </>
  );
}

export default DigitalBuilder;
