import { Box, Grid } from "@mui/material";
import React from "react";
import {
  Title,
  MainText,
  ParentContainer,
  ParentCardBox,
  ChildCardBox,
  CardText,
  BottomText1,
  BottomText2,
  BigBoxComponent,
  MainImage,
  Image,
} from "./CaseStudiesStyles";

function CaseStudies() {
  const [changeImage, setChangeImage] = React.useState(
    "assets/Images/pic3.jpg"
  );
  const [description, setDescription] = React.useState(
    "This is human who is interacting with virtual technology "
  );
  const handlePicChange = (e) => {
    const picAlt = e.target.alt;
    console.log(picAlt);
    if (picAlt === "pic3") {
      setChangeImage("assets/Images/pic3.jpg");
      s;
      setDescription(
        "This is human who is interacting with virtual technology "
      );
      return;
    }
    if (picAlt === "pic1") {
      setChangeImage("assets/Images/pic1.jpg");
      setDescription(
        "This is monster truck which is used for off roading and for loading "
      );
      return;
    }
    if (picAlt === "pic2") {
      setChangeImage("assets/Images/pic2.jpg");
      setDescription(
        "This is the image galaxy where we can see other galaxies , planet and falling stars"
      );
      return;
    }
    if (picAlt === "pic4") {
      setChangeImage("assets/Images/pic4.jpg");
      setDescription(
        "This is the girl interacting with her friends through internet."
      );
      return;
    }
    if (picAlt === "pic5") {
      setChangeImage("assets/Images/pic5.jpg");
      setDescription(
        "This is Astronaut who is representing his success for exploring other planet."
      );
      return;
    }
    if (picAlt === "pic6") {
      setChangeImage("assets/Images/pic6.jpg");
      setDescription("Astronauts loves exploring other planets.");
      return;
    }
    if (picAlt === "pic7") {
      setChangeImage("assets/Images/pic7.jpg");
      setDescription("This is a Astronauts who is floating in the space.");
      return;
    }
    if (picAlt === "pic8") {
      setChangeImage("assets/Images/pic8.jpg");
      setDescription("This  Astronauts is posing.");
      return;
    }
    if (picAlt === "pic9") {
      setChangeImage("assets/Images/pic9.jpg");
      setDescription("This  is the picture of earth where humans live.");
      return;
    }
  };
  const imageList = [
    {
      picFunction: handlePicChange,
      imgURL: "assets/Images/pic3.jpg",
      alt: "pic3",
      title: "Title",
    },
    {
      picFunction: handlePicChange,
      imgURL: "assets/Images/pic2.jpg",
      alt: "pic2",
      title: "Title",
    },
    {
      picFunction: handlePicChange,
      imgURL: "assets/Images/pic1.jpg",
      alt: "pic1",
      title: "Title",
    },
    {
      picFunction: handlePicChange,
      imgURL: "assets/Images/pic4.jpg",
      alt: "pic4",
      title: "Title",
    },
    {
      picFunction: handlePicChange,
      imgURL: "assets/Images/pic5.jpg",
      alt: "pic5",
      title: "Title",
    },
    {
      picFunction: handlePicChange,
      imgURL: "assets/Images/pic6.jpg",
      alt: "pic6",
      title: "Title",
    },
    {
      picFunction: handlePicChange,
      imgURL: "assets/Images/pic7.jpg",
      alt: "pic7",
      title: "Title",
    },
    {
      picFunction: handlePicChange,
      imgURL: "assets/Images/pic8.jpg",
      alt: "pic8",
      title: "Title",
    },
    {
      picFunction: handlePicChange,
      imgURL: "assets/Images/pic9.jpg",
      alt: "pic9",
      title: "Title",
    },
  ];
  return (
    <>
      <ParentContainer>
        <Title>EXAMPLES</Title>
        <MainText>CASE STUDIES</MainText>
        {/* // !Four Card Container */}
        <ParentCardBox>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {imageList.map((data, index) => (
              <Grid key={index} item xs={4} sm={3} md={1.2} l={1}>
                <ChildCardBox onClick={data.picFunction}>
                  <Image src={data.imgURL} alt={data.alt} />
                  <CardText>{imageList.title}</CardText>
                </ChildCardBox>
              </Grid>
            ))}
          </Grid>
        </ParentCardBox>

        {/* //! Big Box Container */}
        <MainText>TITLE</MainText>
      </ParentContainer>

      <BigBoxComponent>
        <MainImage src={changeImage} alt='pics' />
        <Box sx={{ maxWidth: "547px" }}>
          <BottomText1>Description</BottomText1>
          <BottomText2>{description}</BottomText2>
        </Box>
      </BigBoxComponent>
    </>
  );
}

export default CaseStudies;
