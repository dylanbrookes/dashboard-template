import User from "@/models/User";
import type { NextApiRequest, NextApiResponse } from "next";
import { validateInput } from "./validate";
import { StatusCodes } from "http-status-codes";

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterResponse {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse>
) {
  if (req.method === "POST") {
    const data = req.body as RegisterRequest;
    const { firstName, lastName, email, password } = data;
    const { validInput, errorMessage } = validateInput(data);
    if (!validInput) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: errorMessage });
    }

    await User.create({
      firstName,
      lastName,
      email,
      password,
    }).catch((_) => {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "user already exists" });
    });

    return res.status(StatusCodes.CREATED).json({ message: "user created" });
  }
}
