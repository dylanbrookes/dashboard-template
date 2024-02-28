import mongoDB from "@/lib/mongo";
import type { NextApiRequest, NextApiResponse } from "next";
import User, { UserDocument } from "@/models/User";
import { StatusCodes } from "http-status-codes";
import Cookies from "cookies";

type SuccessResponseData = {
  firstName: string;
  lastName: string;
  email: string;
};

type ErrorResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponseData | ErrorResponseData>
) {
  try {
    const cookies = new Cookies(req, res);
    cookies.set("authToken", "", { expires: new Date(0) });
  } catch (e) {
    console.error(e);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "logout failed" });
  }

  return res.status(StatusCodes.OK).json({ message: "logout successful" });
}
