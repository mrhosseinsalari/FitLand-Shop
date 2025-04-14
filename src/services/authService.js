import http from "./httpService";

export async function getOtpApi(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export async function checkOtpApi(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export async function completeProfileApi(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export async function getUserApi() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
