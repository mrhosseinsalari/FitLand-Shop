import http from "./httpService";

export async function getOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}
