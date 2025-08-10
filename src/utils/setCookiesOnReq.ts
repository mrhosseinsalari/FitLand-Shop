import type { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";

export default function setCookiesOnReq(cookies: RequestCookies): RequestInit {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");

  const options: RequestInit = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value};`,
    },
  };

  return options;
}
