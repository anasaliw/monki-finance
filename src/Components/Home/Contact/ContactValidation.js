import * as Yup from "yup";

export const contactValidation = Yup.object({
  name: Yup.string()
    .min(4, "Please enter minimum 4 letters")
    .max(20, "Please enter maximum 20 letters")
    .required("Please Enter First Name"),
  telegramUsername: Yup.string()
    .min(4, "Please enter minimum 4 letters")
    .max(20, "Please enter maximum 20 letters")
    .required("Please Enter Telegram Username"),

  email: Yup.string().email().required("Please Enter Valid Email"),

  number: Yup.number().required("Please enter valid mobile number"),
  message: Yup.string()
    .min(20, "Please enter minimum 20 letters")
    .max(500, "The limit is 500  letters")
    .required("Pleas Enter Message"),
});
