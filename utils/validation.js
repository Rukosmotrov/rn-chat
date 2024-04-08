import * as Yup from "yup";
import { useEmailCheck } from "../hooks/useEmailCheck";

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .test("isEmailUnique", "Email is already in use", (email) => {
      return !useEmailCheck(email)
    })
    .required("Field email is required"),
  password: Yup.string()
    .min(8, "Password length cannot be less than 8 characters")
    .max(70, "Password length cannot be more than 70 characters")
    .required("Field password is required"),
});

export const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .test("isEmailExists", "Email doesn't exist", (email) => {
      return useEmailCheck(email);
    })
    .required("Field email is required"),
  password: Yup.string()
    .required("Field password is required"),
});
