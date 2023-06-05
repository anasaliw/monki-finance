import { Box } from "@mui/material";
import React from "react";
import { LinkText, MainText, ParentBox } from "./MenuStyles";
const monkiList = [
  { href: "https://www.youtube.com/", title: "Audits&Kyc" },
  { href: "https://www.youtube.com/", title: "Wallet Genration" },
  { href: "https://www.youtube.com/", title: "Swap" },
  { href: "https://www.youtube.com/", title: "Lock&Vesting" },
  { href: "https://www.youtube.com/", title: "Stacking" },
  { href: "https://www.youtube.com/", title: "Multisender" },
  { href: "https://www.youtube.com/", title: "Token generation" },
];
const securityList = [
  { href: "https://www.youtube.com/", title: "Kyc" },
  { href: "https://www.youtube.com/", title: "Audits" },
  { href: "https://www.youtube.com/", title: "DApp Testing" },
  { href: "https://www.youtube.com/", title: "Wallet tracing" },
  { href: "https://www.youtube.com/", title: "Smart Contract Testing" },
];
const consultingList = [
  { href: "https://www.youtube.com/", title: "Security" },
  { href: "https://www.youtube.com/", title: "Tokenization" },
  { href: "https://www.youtube.com/", title: "Development" },
  { href: "https://www.youtube.com/", title: "Project management" },
];
const web3List1 = [
  { href: "https://www.youtube.com/", title: "NFT Marketplace" },
  { href: "https://www.youtube.com/", title: "NFT Minting" },
  { href: "https://www.youtube.com/", title: "NFT Generator" },
  { href: "https://www.youtube.com/", title: "NFT Stacking" },
  { href: "https://www.youtube.com/", title: "Farming" },
  { href: "https://www.youtube.com/", title: "Voting" },
  { href: "https://www.youtube.com/", title: "ICO/Presale" },
  { href: "https://www.youtube.com/", title: "Dashboard" },
  { href: "https://www.youtube.com/", title: "Swap" },
];
const web3List2 = [
  { href: "https://www.youtube.com/", title: "Bridge" },
  { href: "https://www.youtube.com/", title: "SaaS" },
  { href: "https://www.youtube.com/", title: "Dexes" },
  { href: "https://www.youtube.com/", title: "Cexes" },
  { href: "https://www.youtube.com/", title: "Tools" },
  { href: "https://www.youtube.com/", title: "P2P solutions" },
  { href: "https://www.youtube.com/", title: "Metaverse" },
  { href: "https://www.youtube.com/", title: "GameFi" },
  { href: "https://www.youtube.com/", title: "Websites" },
];
const contractsList = [
  { href: "#", title: "NFT contracts" },
  { href: "#", title: "Tokens" },
  { href: "#", title: "standard,deflationary" },
  { href: "#", title: "Crowdsale/Presale/Private" },
  { href: "#", title: "Sale" },
  { href: "#", title: "Tool Contract" },
  { href: "#", title: "Lockers,Vesting,Batch" },
  { href: "#", title: "Transfer" },
];
function MenuFile() {
  return (
    <Box sx={{ padding: "20px 40px" }}>
      <MainText>Services</MainText>
      <ParentBox>
        {/* //!Left */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            marginRight: "100px",
          }}
        >
          <MainText sx={{ marginBottom: "10px" }}>Monki Saas</MainText>
          {monkiList.map((data) => (
            <LinkText href={data.href} target='_blank'>
              {data.title}
            </LinkText>
          ))}
        </Box>
        {/* //!Right */}
        <Box sx={{ marginTop: "20px", width: "564px" }}>
          <MainText>Blockchain Development</MainText>
          <Box
            sx={{
              backgroundColor: "rgba(87, 87, 87, 0.15)",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            <MainText>Web3 Application</MainText>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                {web3List1.map((data) => (
                  <LinkText href={data.href} target='_blank'>
                    {data.title}
                  </LinkText>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  marginLeft: "150px",
                }}
              >
                {web3List2.map((data) => (
                  <LinkText href={data.href} target='_blank'>
                    {data.title}
                  </LinkText>
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                backgroundColor: "rgba(87, 87, 87, 0.15)",
                borderRadius: "20px",
                padding: "10px",
                marginTop: "20px",
              }}
            >
              <MainText>Consulting</MainText>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  width: "257px",
                }}
              >
                {consultingList.map((data) => (
                  <LinkText href={data.href} target='_blank'>
                    {data.title}
                  </LinkText>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgba(87, 87, 87, 0.15)",
                borderRadius: "20px",
                padding: "10px ",
                marginTop: "20px",
                width: "257px",
                // marginLeft: "20px",
              }}
            >
              <MainText>Security Analysis</MainText>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                {securityList.map((data) => (
                  <LinkText href={data.href} target='_blank'>
                    {data.title}
                  </LinkText>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(87, 87, 87, 0.15)",
            borderRadius: "20px",
            padding: "10px 20px ",
            marginTop: "50px",
            marginLeft: "50px",
            height: "248px",
          }}
        >
          <MainText>Smart Contracts</MainText>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            {contractsList.map((data) => (
              <LinkText href={data.href} target='_blank'>
                {data.title}
              </LinkText>
            ))}
          </Box>
        </Box>
      </ParentBox>
    </Box>
  );
}

export default MenuFile;
