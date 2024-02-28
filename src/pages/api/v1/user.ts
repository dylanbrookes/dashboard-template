import mongoDB from "@/lib/mongo";
import type { NextApiRequest, NextApiResponse } from "next";
import User, { UserDocument } from "@/models/User";
import { StatusCodes } from "http-status-codes";
import Cookies from "cookies";
import { VerifyJWT } from "@/utils/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const cookies = new Cookies(req, res);
    const authToken = cookies.get("authToken");
    if (!authToken) {
      return res.status(StatusCodes.OK).json({ userID: null });
    }
    const { data } = await VerifyJWT(authToken);
    const userID = data?.sub;

    if (!userID) {
      return res.status(StatusCodes.OK).json({ userID: null });
    }

    await mongoDB();
    const user = (await User.findById(userID)) as UserDocument & {
      _id: string;
    };
    if (!user) {
      return res.status(StatusCodes.OK).json({ userID: null });
    }

    return res.status(StatusCodes.OK).json({
      userID: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (e) {
    console.error(e);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ userID: null });
  }
}
