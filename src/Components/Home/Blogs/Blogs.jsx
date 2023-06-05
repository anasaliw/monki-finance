import { CardMedia, Link } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./StylesBlog.css";
import {
  Title,
  MainText,
  ParentContainer,
  CardBox,
  CardContentBox,
} from "./BlogStyles";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const GridList = [
  {
    id: 1,
    image: "assets/Images/pic2.jpg",
    link: "#",
    location: "#",
    title: "Title",
  },
  {
    id: 2,
    image: "assets/Images/pic2.jpg",
    link: "#",
    location: "#",
    title: "Title",
  },
  {
    id: 3,
    image: "assets/Images/pic2.jpg",
    link: "#",
    location: "#",
    title: "Title",
  },
  {
    id: 4,
    image: "assets/Images/pic2.jpg",
    link: "#",
    location: "#",
    title: "Title",
  },
  {
    id: 5,
    image: "assets/Images/pic2.jpg",
    link: "#",
    location: "#",
    title: "Title",
  },
  {
    id: 6,
    image: "assets/Images/pic2.jpg",
    link: "#",
    location: "#",
    title: "Title",
  },
  {
    id: 7,
    image: "assets/Images/pic2.jpg",
    link: "#",
    location: "#",
    title: "Title",
  },
  {
    id: 8,
    image: "assets/Images/pic2.jpg",
    link: "#",
    location: "#",
    title: "Title",
  },
];

//! Custom Button Section

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

function Blogs() {
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
    <ParentContainer>
      <Title>NEWS</Title>
      <MainText>BLOGS</MainText>

      {/* //! CSS of Carousal is in App.css */}

      <Carousel
        // containerClass='carousel-container'
        removeArrowOnDeviceType={[
          "tablet",
          "tablet1",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
        infinite={true}
        responsive={responsive}
        // arrows={false}
        // customButtonGroup={<ButtonGroup />}
        // renderButtonGroupOutside={true}
      >
        {GridList.map((data) => (
          <React.Fragment key={data.id}>
            <CardBox>
              <Link
                href={data.link}
                target='_blank'
                style={{ textDecoration: "none" }}
              >
                <CardMedia>
                  <img
                    src={data.image}
                    style={{
                      width: "281px",
                      height: "250px",
                      objectFit: "cover",
                      // background:
                      // "linear-gradient(180deg, #393939 0%, #313131 100%)",
                    }}
                  />
                </CardMedia>
                <CardContentBox>{data.title}</CardContentBox>
              </Link>
            </CardBox>
          </React.Fragment>
        ))}
      </Carousel>
    </ParentContainer>
  );
}

export default Blogs;
