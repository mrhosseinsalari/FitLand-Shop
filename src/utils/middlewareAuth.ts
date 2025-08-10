import type { NextRequest } from "next/server";
import setCookiesOnReq from "./setCookiesOnReq";
import { User } from "types/User";

export async function middlewareAuth(req: NextRequest): Promise<User | null> {
  const options = setCookiesOnReq(req.cookies);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    options
  );

  const { data } = await res.json();
  const { user } = data || {};

  return user;
}
