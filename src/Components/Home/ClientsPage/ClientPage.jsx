import { Box } from "@mui/material";
import React from "react";
import {
  Title,
  MainText,
  CardTitle,
  ParentContainer,
  CardParentBox,
  ParaText,
  CardChildBox,
  BackgroundShades2,
} from "./ClientPageStyles";

function ClientPage() {
  return (
    <>
      <BackgroundShades2 />
      <ParentContainer>
        <Title>CLIENTS</Title>
        <MainText>WHAT OUR CLIENT SAYS</MainText>
        <CardParentBox>
          <CardChildBox>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src='assets/Images/client1.png' alt='client1' />
              <CardTitle>Client</CardTitle>
            </Box>
            <ParaText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </ParaText>
          </CardChildBox>
          <CardChildBox>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src='assets/Images/client2.png' alt='client1' />
              <CardTitle>Client</CardTitle>
            </Box>
            <ParaText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </ParaText>
          </CardChildBox>
        </CardParentBox>
      </ParentContainer>
    </>
  );
}

export default ClientPage;
