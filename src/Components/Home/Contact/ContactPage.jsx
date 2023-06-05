import React, { useRef } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import {
  Box,
  FormGroup,
  OutlinedInput,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import "../../../App.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SendIcon from "@mui/icons-material/Send";
// import { withStyles } from "@mui/material/styles";
// import { makeStyles } from "@mui/material/styles";
// import styled from "@emotion/styled";

import {
  Title,
  MainText,
  ParentContainer,
  HeadContainer,
  NavBtn,
  ChildContainer,
  BackgroundShades,
  TextFieldComponent,
  DotText,
  TimelineText,
  GradientText,
  RightContainer,
  MainTitle,
} from "./ContactStyles";
import emailjs from "emailjs-com";
import { contactValidation } from "./ContactValidation";

export const ErrorMsgText = styled(Typography)`
  font-size: 12px;
  color: red;
  text-align: start;
`;

const TimelineList = [
  {
    id: 1,
    text: "An expert will contact you shortly after having analyzed your business requirements.",
    connect: <TimelineConnector />,
  },
  {
    id: 2,
    text: "If required, we sign an NDA to ensure the highest privacy level.",
    connect: <TimelineConnector />,
  },
  {
    id: 3,
    text: "We will submits a comprehensive project proposal. It may include estimates, timelines, etc.",
    connect: <TimelineConnector />,
  },
  {
    id: 4,
    text: "The team assembled for your project can start delivering within the agreed timeline",
  },
];

const CssTextField = styled(TextField)({
  marginTop: "10px",
  "& label.Mui-focused": {
    color: "white",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#838384",
      color: "white",
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:before": {
      color: "white",
      // background: "#414141",
    },

    "&:hover fieldset": {
      borderColor: "#00F902",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00F902",
    },
  },
});

function ContactPage() {
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("Submit Request");
  const [sentEmail, setSentEmail] = React.useState("");
  const [disableButton, setDisableButton] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  const form = useRef();
  const [contactData, setContactData] = React.useState({
    name: "",
    email: "",
    telegramUsername: "",
    number: Number,
    message: "",
  });
  // const handleChange = (e) => {
  //   setContactData({ ...contactData, [e.target.name]: e.target.value });
  // };
  // const classes = useStyles();

  const { handleBlur, values, touched, errors, handleChange, handleSubmit } =
    useFormik({
      initialValues: contactData,
      validationSchema: contactValidation,
      validateOnChange: true,
      onSubmit: async (values, action) => {
        setDisableButton(true);
        handleClick();
        console.log(values);
        emailjs
          .sendForm(
            //Servie Id
            "",
            //TemplateId
            "",
            form.current,
            //Public Key
            ""
          )
          .then(
            (result) => {
              console.log(result.text);
              // setMessage("Sent!");
              // setLoading(false);
              // setDisableButton(true);
              // showSentMail(true);
              setSentEmail("Email sent Successfully");
              setDisableButton(false);
            },
            (error) => {
              console.log(error.text);
              setSentEmail("Something went wrong");
              // setLoading(false);
              // setMessage("Sent!");
              // setDisableButton(true);
              setDisableButton(false);
            }
          );
      },
    });
  // const classes = useStyle();
  return (
    <>
      <BackgroundShades></BackgroundShades>
      <ParentContainer id='contact'>
        <Title>CONTACTS</Title>
        <MainText>GET IN TOUCH!</MainText>
        <HeadContainer>
          <ChildContainer>
            <MainTitle sx={{ marginBottom: "20px" }}>
              CONTACT US FOR A FREE IT CONSULTATION
            </MainTitle>
            <form
              ref={form}
              style={{ textAlign: "center" }}
              onSubmit={handleSubmit}
            >
              <CssTextField
                placeholder='Name*'
                InputProps={{
                  style: { height: "40px", color: "white" },
                }}
                fullWidth
                onBlur={handleBlur}
                variant='outlined'
                name='name'
                onChange={handleChange}
                value={values.name}
              />
              {touched.name && errors.name ? (
                <>
                  <ErrorMsgText>{errors.name}</ErrorMsgText>
                </>
              ) : null}

              <CssTextField
                variant='outlined'
                fullWidth
                onBlur={handleBlur}
                InputProps={{
                  style: {
                    color: "white",
                    height: "40px",
                  },
                }}
                // InputProps={{ disableUnderline: true }}
                placeholder='Email*'
                name='email'
                type='email'
                onChange={handleChange}
                value={values.email}
              />
              {touched.email && errors.email ? (
                <>
                  <ErrorMsgText>{errors.email}</ErrorMsgText>
                </>
              ) : null}

              <CssTextField
                placeholder='Number*'
                InputProps={{
                  style: { color: "white", height: "40px" },
                }}
                // type='number'
                fullWidth
                onBlur={handleBlur}
                variant='outlined'
                name='number'
                onChange={handleChange}
                value={values.number}
              />
              {touched.number && errors.number ? (
                <>
                  <ErrorMsgText>{errors.number}</ErrorMsgText>
                </>
              ) : null}

              <CssTextField
                placeholder='Telegram Username*'
                InputProps={{
                  style: { color: "white", height: "40px" },
                }}
                fullWidth
                onBlur={handleBlur}
                variant='outlined'
                name='telegramUsername'
                onChange={handleChange}
                value={values.telegramUsername}
              />
              {touched.telegramUsername && errors.telegramUsername ? (
                <>
                  <ErrorMsgText>{errors.telegramUsername}</ErrorMsgText>
                </>
              ) : null}

              <CssTextField
                placeholder='Message*'
                variant='outlined'
                InputProps={{
                  style: { color: "white" },
                }}
                fullWidth
                onBlur={handleBlur}
                multiline
                rows={5}
                name='message'
                onChange={handleChange}
                value={values.message}
              />
              {touched.message && errors.message ? (
                <>
                  <ErrorMsgText>{errors.message}</ErrorMsgText>
                </>
              ) : null}
              {sentEmail ? (
                <Typography
                  sx={{
                    marginTop: "20px",
                    textAlign: "center",
                    fontSize: "16px",
                    fontFamily: "Work Sans",
                    color: "white",
                  }}
                >
                  {sentEmail}
                </Typography>
              ) : (
                ""
              )}
              <NavBtn
                disabled={disableButton}
                type='submit'
                onClick={handleSubmit}
              >
                {message}
              </NavBtn>
            </form>
          </ChildContainer>

          <RightContainer sx={{ width: "100%" }}>
            <Box sx={{ alignText: "center", mt: "10px", mb: "50px" }}>
              <GradientText>HOW IT WORKS</GradientText>
            </Box>
            <Timeline
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "start",
                // justifyContent: "center",
                content: "none",
              }}
            >
              {TimelineList.map((data) => (
                <TimelineItem
                  key={data.id}
                  sx={{
                    height: "110px",
                    "&.MuiTimelineItem-root:before": {
                      content: "none",
                    },
                  }}
                >
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: "#5F5E5E",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <DotText>{data.id}</DotText>
                    </TimelineDot>
                    {data.connect}
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <TimelineText>{data.text}</TimelineText>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </RightContainer>
        </HeadContainer>
      </ParentContainer>
    </>
  );
}

export default ContactPage;
