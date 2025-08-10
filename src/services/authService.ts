import { CheckOtp, CompleteProfile, GetOtp } from "@/types/Services";
import http from "./httpService";

export async function getOtpApi(data: GetOtp) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export async function checkOtpApi(data: CheckOtp) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export async function completeProfileApi(data: CompleteProfile) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export async function getUserApi() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
