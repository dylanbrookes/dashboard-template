// TODO: consolidate all jwt related functions into just jose and not use jsonwebtoken
import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET as string;
const jwtConfig = {
  secret: new TextEncoder().encode(JWT_SECRET),
};

interface JWTData {
  sub: string;
}

export function CreateJWT({ sub }: JWTData) {
  return jwt.sign(
    {
      sub,
    },
    JWT_SECRET,
    {
      expiresIn: "30d",
      // TODO: Add issuer and audience
    }
  );
}

interface VerifyJWTResponse {
  data: {
    sub: string;
    iat: number;
    exp: number;
  } | null;
  error: string | null;
}

export async function VerifyJWT(token: string): Promise<VerifyJWTResponse> {
  try {
    const result = await jwtVerify(token, jwtConfig.secret);
    if (result?.payload === null) {
      return {
        data: null,
        error: "failed to verify token signature",
      };
    }
    return {
      data: {
        sub: result.payload.sub!,
        iat: result.payload.iat!,
        exp: result.payload.exp!,
      },
      error: null,
    };
  } catch (err) {
    console.error(err);
    return {
      data: null,
      error: "failed to verify token",
    };
  }
}
