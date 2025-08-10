export type User = {
  _id: number;
  phoneNumber: string;
  name: string;
  email: string;
  isActive: boolean;
  role: "USER" | "ADMIN";
  createdAt: string;
};
