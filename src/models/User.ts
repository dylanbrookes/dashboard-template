import { model, models, Schema, InferSchemaType, Model } from "mongoose";
import bcrypt from "bcrypt";
import mongoDB from "@/lib/mongo";
import { CreateJWT } from "@/utils/auth";

const BCRYPT_SALT_ROUNDS = 10;

interface IUser extends IUserMethods {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface IUserMethods {
  passwordMatches(candidate: String): Promise<boolean>;
  createAuthToken(): string;
}

export type UserDocument = IUser & IUserMethods;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});

userSchema.method("passwordMatches", async function (candidate: string) {
  return await bcrypt.compare(candidate, this.password);
});

userSchema.method("createAuthToken", function () {
  return CreateJWT({ sub: this._id.toString() });
});

userSchema.pre("save", async function (next) {
  await mongoDB(); // ensure db is connected
  this.password = await bcrypt.hash(
    this.password as string,
    BCRYPT_SALT_ROUNDS
  );
  next();
});

export default models.User || model("User", userSchema);
