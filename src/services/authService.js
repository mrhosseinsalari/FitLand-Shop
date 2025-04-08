import http from "./httpService";

export async function getOtpApi(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}
