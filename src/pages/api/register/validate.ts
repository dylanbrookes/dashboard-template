import { RegisterRequest } from "./index";

interface ValidateInputResponse {
  validInput: boolean;
  errorMessage: string;
}

export function validateInput(data: RegisterRequest): ValidateInputResponse {
  const response = {
    validInput: true,
    errorMessage: "",
  };
  const { firstName, lastName, email, password, confirmPassword } = data;
  if (!passwordsMatch(password, confirmPassword)) {
    response.validInput = false;
    response.errorMessage = "passwords do not match";
    return response;
  }
  if (!validPassword(password)) {
    response.validInput = false;
    response.errorMessage = "password must be at least 8 characters";
    return response;
  }
  if (!validEmail(email)) {
    response.validInput = false;
    response.errorMessage = "email is invalid";
    return response;
  }
  if (!validNames(firstName, lastName)) {
    response.validInput = false;
    response.errorMessage = "first and last name are required";
    return response;
  }
  return response;
}

function passwordsMatch(password: string, confirmPassword: string) {
  return password === confirmPassword;
}

function validEmail(email: string) {
  if (email === undefined) {
    return false;
  }
  if (email.length === 0) {
    return false;
  }
  return email.includes("@");
}

function validPassword(password: string) {
  if (password === undefined) {
    return false;
  }
  if (password.length === 0) {
    return false;
  }
  return password.length >= 8;
}

function validNames(firstName: string, lastName: string) {
  if (firstName === undefined || lastName === undefined) {
    return false;
  }
  if (firstName.length === 0 || lastName.length === 0) {
    return false;
  }
  return true;
}
