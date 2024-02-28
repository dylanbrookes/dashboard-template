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
  if (req.method === "POST") {
    const data = req.body;
    const { email, password } = data;

    await mongoDB();
    const user = (await User.findOne({
      email,
    })) as UserDocument;

    const passwordMatches = await user?.passwordMatches(password);
    if (passwordMatches) {
      const cookies = new Cookies(req, res);
      cookies.set("authToken", user.createAuthToken());

      return res
        .status(StatusCodes.OK)
        .json({ message: "authentication successful" });
    }

    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "username or password incorrect" });
  }
}
