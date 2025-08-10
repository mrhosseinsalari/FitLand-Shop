// authService types
export type GetOtp = { phoneNumber: string };
export type CheckOtp = { phoneNumber: string; otp: string };
export type CompleteProfile = { name: string; email: string };
